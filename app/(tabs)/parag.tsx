import { Image, StyleSheet, SafeAreaView, FlatList } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";

export default function ParagScreen() {
  const DATA = [
    { isim: 'Alim', rasim: './../../assets/baxsurat/微信图片_20230315215134.jpg' },
    { isim: 'Ahmat', rasim: './../../assets/baxsurat/微信图片_20230315215134.jpg' },
    { isim: 'Samat', rasim: './../../assets/baxsurat/微信图片_20230315215134.jpg' },
    { isim: 'Adil', rasim: './../../assets/baxsurat/微信图片_20230315215134.jpg' },
    { isim: 'Alim', rasim: './../../assets/baxsurat/微信图片_20230315215134.jpg' },
    { isim: 'Alim', rasim: './../../assets/baxsurat/微信图片_20230315215134.jpg' },
    { isim: 'Alim', rasim: './../../assets/baxsurat/微信图片_20230315215134.jpg' },
    { isim: 'Alim', rasim: './../../assets/baxsurat/微信图片_20230315215134.jpg' },
    { isim: 'Alim', rasim: './../../assets/baxsurat/微信图片_20230315215134.jpg' },
    { isim: 'Alim', rasim: './../../assets/baxsurat/微信图片_20230315215134.jpg' },
    { isim: 'Alim', rasim: './../../assets/baxsurat/微信图片_20230315215134.jpg' },
    { isim: 'Alim', rasim: './../../assets/baxsurat/微信图片_20230315215134.jpg' },
    { isim: 'Alim', rasim: './../../assets/baxsurat/微信图片_20230315215134.jpg' },
    { isim: 'Alim', rasim: './../../assets/baxsurat/微信图片_20230315215134.jpg' },
    { isim: 'Alim', rasim: './../../assets/baxsurat/微信图片_20230315215134.jpg' },
    { isim: 'Alim', rasim: './../../assets/baxsurat/微信图片_20230315215134.jpg' },
    { isim: 'Alim', rasim: './../../assets/baxsurat/微信图片_20230315215134.jpg' },
    { isim: 'Alim', rasim: './../../assets/baxsurat/微信图片_20230315215134.jpg' },
    { isim: 'Alim', rasim: './../../assets/baxsurat/微信图片_20230315215134.jpg' },
    { isim: 'Alim', rasim: './../../assets/baxsurat/微信图片_20230315215134.jpg' },
    { isim: 'Alim', rasim: './../../assets/baxsurat/微信图片_20230315215134.jpg' },
    { isim: 'Alim', rasim: './../../assets/baxsurat/微信图片_20230315215134.jpg' },
    { isim: 'Alim', rasim: './../../assets/baxsurat/微信图片_20230315215134.jpg' },
    { isim: 'Alim', rasim: './../../assets/baxsurat/微信图片_20230315215134.jpg' },
    { isim: 'Alim', rasim: './../../assets/baxsurat/微信图片_20230315215134.jpg' },
    { isim: 'Alim', rasim: './../../assets/baxsurat/微信图片_20230315215134.jpg' },
    { isim: 'Alim', rasim: './../../assets/baxsurat/微信图片_20230315215134.jpg' },
  ]
  const renderItem = ({ item }) => (
    <View style={styles.container}>
      <View style={styles.dos}>
        <Image
          style={styles.baxsurat}
          source={item.rasim}
        ></Image>
        <View>
          <Text>{item.isim}</Text>
          <Text style={styles.hat}>{item.isim}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  baxsurat: {
    height: 50,
    width: 50,
    marginRight: 10,
    borderRadius: 10
  },
  dos: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    marginLeft: 10,
    marginTop: 10
  },
  hat:{
    fontSize:4,
    color:'#56585d'
  }
});
