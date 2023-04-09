import { StyleSheet } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import {DoslarComponent} from "../../components/doslarComponent"
export default function DoslarScreen() {
  let DATA = [
    { isim: 'Alim', rasim: './../../assets/baxsurat/Alim.jpg' },
    { isim: 'URCode', rasim: './../../assets/baxsurat/URCode黄.png' },
    { isim: 'URCode', rasim: './../../assets/baxsurat/URCode黑.png' },
    { isim: '抖音', rasim: './../../assets/baxsurat/抖音.png' },
    { isim: '微软', rasim: './../../assets/baxsurat/微软.png' },
    { isim: '微信', rasim: './../../assets/baxsurat/微信.png' },
    { isim: '百度', rasim: './../../assets/baxsurat/百度.png' },
    { isim: '阿里巴巴', rasim: './../../assets/baxsurat/阿里巴巴.png' },
  ]
  return (
    <DoslarComponent DATACom={DATA} tipi={'doslar'}></DoslarComponent>
  );
}

