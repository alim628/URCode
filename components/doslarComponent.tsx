import { Component } from "react";
import { Image, StyleSheet, SafeAreaView, FlatList,TextInput} from "react-native";
import { Text, View } from "../components/Themed";
import Ionicons from "react-native-vector-icons/Ionicons";
export class DoslarComponent extends Component {
  DATA = [
    { isim: 'Alim', rasim: './../../assets/baxsurat/Alim.jpg' }
  ]
  renderItem = ({ item }) => (
    <View style={styles.container}>
      <View style={styles.dos}>
        <Image
          style={styles.baxsurat}
          source={item.rasim}
        ></Image>
        <View>
          <Text>{item.isim}</Text>
          {this.props.tipi === 'parag' ? <Text style={styles.hat}>{item.isim}</Text> : ''}
        </View>
      </View>
    </View>
  );

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {this.props.tipi === 'doslar' ?
          <View style={styles.yegidos}>
            <View style={styles.dos}>
              <View style={styles.yegidosIconView} >
                <Ionicons style={styles.yegidosIcon} name="person-add" color={'#fff'} />
              </View>
              <View>
                <Text>{'yegi dos'}</Text>
              </View>
            </View>
          </View>
          : ''}
        <FlatList
          data={this.props.DATACom}
          renderItem={this.renderItem}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  yegidos: {
    height: 'max-content'
  },
  yegidosIconView: {
    height: 50,
    width: 50,
    marginRight: 10,
    borderRadius: 10,
    backgroundColor: "#ffcf49",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  yegidosIcon: {
    fontSize: 25
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
});
