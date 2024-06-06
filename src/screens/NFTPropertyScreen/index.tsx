import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import axios from 'axios';
import {useSelector} from 'react-redux';

import {COLORS} from '../../config/colors';
import {STYLES} from '../../config/styles';
import {SERVER_URL} from '../../utils/constants/server-url.constant';

import {NFTItemType} from '../DiscoverScreen';
import NFTItem from '../../components/NFTItem';

const NFTPropertyScreen = () => {
  const wallet_address = useSelector((state: any) => state.wallet.address);

  const [listPropertyNFT, setListPropertyNFT] = useState<NFTItemType[]>([]);

  useEffect(() => {
    const fetchListProperty = async () => {
      try {
        const res = await axios.get(
          `${SERVER_URL}/nft/owned/${wallet_address}`,
        );
        console.log(JSON.stringify(res.data.data, null, 2));
        setListPropertyNFT(res.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchListProperty();
  }, [wallet_address]);

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={<Text style={styles.headerText}>Your NFT</Text>}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<View style={styles.footer} />}
        data={listPropertyNFT}
        keyExtractor={item => item.tokenId}
        renderItem={({item}) => (
          <NFTItem
            tokenId={item.tokenId}
            name={item.name}
            price={item.price}
            image={item.image}
            rarity={item.rarity}
            isSold={item.isSold}
            isAuction={item.isAuction}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background.primary,
    paddingVertical: 12,
  },
  headerText: {...STYLES.text.WorkSansH4, paddingHorizontal: 16},
  footer: {height: 70},
});

export default NFTPropertyScreen;
