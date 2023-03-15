import { Image, StyleSheet } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";

export default function ParagScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.dos}>
        <Image
          style={styles.baxsurat}
          source={require("./../../assets/baxsurat/微信图片_20230315215134.jpg")}
        ></Image>
        <Text>Alim</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  baxsurat: {
    height: 50,
    width: 50,
    marginRight: 10,
  },
  dos: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
});
