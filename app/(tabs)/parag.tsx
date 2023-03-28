import { Image, StyleSheet, SafeAreaView, FlatList } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";

export default function ParagScreen() {
  const DATA = [
    { id: '123456789', isim: 'Alim', image: './../../assets/baxsurat/微信图片_20230315215134.jpg' },
    { id: '1256789', isim: 'Ahmat', image: './../../assets/baxsurat/微信图片_20230315215134.jpg' },
    { id: '12345689', isim: 'Samat', image: './../../assets/baxsurat/微信图片_20230315215134.jpg' },
    { id: '123456789', isim: 'Alim', image: './../../assets/baxsurat/微信图片_20230315215134.jpg' },
    { id: '123446789', isim: 'Ahmat', image: './../../assets/baxsurat/微信图片_20230315215134.jpg' },
    { id: '12345489', isim: 'Samat', image: './../../assets/baxsurat/微信图片_20230315215134.jpg' },
    { id: '123456789', isim: 'Alim', image: './../../assets/baxsurat/微信图片_20230315215134.jpg' },
    { id: '12345889', isim: 'Ahmat', image: './../../assets/baxsurat/微信图片_20230315215134.jpg' },
    { id: '123456789', isim: 'Samat', image: './../../assets/baxsurat/微信图片_20230315215134.jpg' },
    { id: '12376789', isim: 'Alim', image: './../../assets/baxsurat/微信图片_20230315215134.jpg' },
    { id: '12348789', isim: 'Ahmat', image: './../../assets/baxsurat/微信图片_20230315215134.jpg' },
    { id: '12+56789', isim: 'Samat', image: './../../assets/baxsurat/微信图片_20230315215134.jpg' },
    { id: '123456789', isim: 'Alim', image: './../../assets/baxsurat/微信图片_20230315215134.jpg' },
    { id: '12356789', isim: 'Ahmat', image: './../../assets/baxsurat/微信图片_20230315215134.jpg' },
    { id: '12345489', isim: 'Samat', image: './../../assets/baxsurat/微信图片_20230315215134.jpg' },
    { id: '123456789', isim: 'Alim', image: './../../assets/baxsurat/微信图片_20230315215134.jpg' },
    { id: '12345689', isim: 'Ahmat', image: './../../assets/baxsurat/微信图片_20230315215134.jpg' },
    { id: '123489', isim: 'Samat', image: './../../assets/baxsurat/微信图片_20230315215134.jpg' },
    { id: '12345089', isim: 'Samat', image: './../../assets/baxsurat/微信图片_20230315215134.jpg' },
    { id: '12344789', isim: 'Alim', image: './../../assets/baxsurat/微信图片_20230315215134.jpg' },
    { id: '12316789', isim: 'Ahmat', image: './../../assets/baxsurat/微信图片_20230315215134.jpg' },
    { id: '1230789', isim: 'Samat', image: './../../assets/baxsurat/微信图片_20230315215134.jpg' },
  ]
  const renderItem = ({ item }) => (
    <View style={styles.dos}>
      <Image
        style={styles.baxsurat}
        source={item.image}
      ></Image>
      <View>
        <Text>{item.isim}</Text>
        <Text style={styles.hat}>{item.isim}</Text>
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
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
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
