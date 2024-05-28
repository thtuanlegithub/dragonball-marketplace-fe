import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React, { useEffect, useState } from 'react';
import {STYLES} from '../../config/styles';
import {COLORS} from '../../config';
import NFTItem from '../../components/NFTItem';
import Button from '../../components/Button';
import axios from 'axios';
import { SERVER_URL } from '../../utils/constants/server-url.constant';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../../config/firebaseConfig';

type NFTFetchItem = {
  tokenId: string;
  name: string;
  price: number;
  image: string;
  rarity: string;
  isSold: boolean;
  isAuction: boolean;
}[];

const HomeScreen = () => {
    const [topPriceNFT, setTopPriceNFT] = useState<NFTFetchItem>([]); 
    const fetchTopPriceNFT = async () => {
      try {
        const res = await axios.get(`${SERVER_URL}/nft/topPrice`);
        setTopPriceNFT(res.data.data.nft);
        return res;
      } catch (error) {
        console.error(error);
        return null;
      }
    };
  
    useEffect(() => {
      fetchTopPriceNFT();
      const unsubscribe = onSnapshot(collection(db, "nfts"), () => {
        fetchTopPriceNFT();
      });  
      // Clean up listener on unmount
      return () => unsubscribe();
    }, []);

  return (
    <ScrollView
      style={{
        backgroundColor: COLORS.background.primary,
      }}>
      <View style={styles.container}>
        <View style={{paddingHorizontal: 16}}>
          <Text style={styles.title}>Find favorite character</Text>
          <Text style={styles.subTitle} ellipsizeMode="tail">
            Delve into our marketplace powered by Dragon Ball enthusiasts.
            Purchase, sell, and uncover artwork from NFT artists, showcasing
            beloved Dragon Ball characters.
          </Text>
        </View>
        <NFTItem 
          tokenId={topPriceNFT.tokenId}
          name={topPriceNFT.name}
          price={topPriceNFT.price}
          image={topPriceNFT.image}
          rarity={topPriceNFT.rarity}
          isSold={topPriceNFT.isSold}
          isAuction={topPriceNFT.isAuction}
        />
        <Button content="Get Started" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 100,
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: COLORS.background.primary,
    paddingTop: 24,
    gap: 14,
  },
  title: {
    ...STYLES.text.WorkSansH4,
  },
  subTitle: {
    ...STYLES.text.WorkSansBase,
    marginTop: 16,
  },
});

export default HomeScreen;
