import { Image, StyleSheet, SafeAreaView, FlatList } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import {DoslarComponent} from "../../components/doslarComponent"

export default function ParagScreen() {
  let DATA = [
    { isim: 'Alim', rasim: './../../assets/baxsurat/Alim.jpg' },
    { isim: 'URCode', rasim: './../../assets/baxsurat/URCode黄.png' },
    { isim: 'URCode', rasim: './../../assets/baxsurat/URCode黑.png' },
    { isim: '抖音', rasim: './../../assets/baxsurat/抖音.png' },
  ]
  return (
    <DoslarComponent DATACom={DATA}></DoslarComponent>
  );
}


