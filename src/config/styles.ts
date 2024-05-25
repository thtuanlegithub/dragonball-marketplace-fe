import { StyleSheet } from "react-native";
import { FONTS } from "./fonts";
import { COLORS } from "./colors";

export const STYLES = {
  text: {
    SpaceMonoH1: {
      ...FONTS.SpaceMonoBold,
      fontSize: 67,
      color: COLORS.text.primary,
    },
    SpaceMonoH2: {
      ...FONTS.SpaceMonoBold,
      fontSize: 51,
      color: COLORS.text.primary,
    },
    SpaceMonoH3: {
      ...FONTS.SpaceMonoBold,
      fontSize: 38,
      color: COLORS.text.primary,
    },
    SpaceMonoH4: {
      ...FONTS.SpaceMonoBold,
      fontSize: 28,
      color: COLORS.text.primary,
    },
    SpaceMonoH5: {
      ...FONTS.SpaceMonoBold,
      fontSize: 22,
      color: COLORS.text.primary,
    },
    SpaceMonoBase: {
      ...FONTS.SpaceMonoRegular,
      fontSize: 16,
      color: COLORS.text.primary,
    },
    SpaceMonoCaption: {
      ...FONTS.SpaceMonoRegular,
      fontSize: 12,
      color: COLORS.text.primary,
    },
    WorkSansH1: {
      ...FONTS.WorkSansBold,
      fontSize: 67,
      color: COLORS.text.primary,
    },
    WorkSansH2: {
      ...FONTS.WorkSansBold,
      fontSize: 51,
      color: COLORS.text.primary,
    },
    WorkSansH3: {
      ...FONTS.WorkSansBold,
      fontSize: 38,
      color: COLORS.text.primary,
    },
    WorkSansH4: {
      ...FONTS.WorkSansBold,
      fontSize: 28,
      color: COLORS.text.primary,
    },
    WorkSansH5: {
      ...FONTS.WorkSansSemiBold,
      fontSize: 22,
      color: COLORS.text.primary,
    },
    WorkSansBase: {
      ...FONTS.WorkSansRegular,
      fontSize: 16,
      color: COLORS.text.primary,
    },
    WorkSansCaption: {
      ...FONTS.WorkSansRegular,
      fontSize: 12,
      color: COLORS.text.primary,
    },
  },
}