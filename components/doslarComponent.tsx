import React from 'react';
import { Image, StyleSheet, SafeAreaView, FlatList, TextInput } from "react-native";
import { Text, View } from "../components/Themed";
import Ionicons from "react-native-vector-icons/Ionicons";
import * as lodash from "lodash"
export class DoslarComponent extends React.Component {
  AsliData = this.props.DATACom;
  Data = this.props.DATACom;
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
  indiganda(inzdiganMazmun) {
    if (inzdiganMazmun) {
      this.Data = lodash.filter(this.AsliData, function (a) {
        return a.isim.toLowerCase().includes(inzdiganMazmun.toLowerCase()) ? true : false;
      })
    } else {
      this.Data = this.AsliData;
    }
    this.forceUpdate();
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.izdaxView}>
          <Ionicons style={styles.izdaxIcon} name="search" />
          <TextInput
            style={styles.izdaxHat}
            placeholder="izdimakqi bolgan mazmunni kirguzig"
            placeholderTextColor="#8e8e8f"
            onChangeText={text => this.indiganda(text)}
          >

          </TextInput>
        </View>

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
          data={this.Data}
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
  izdaxView: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingRight: 10,
    paddingLeft: 10,
    margin: 10,
    height: 30,
    borderRadius: 10,

  },
  izdaxIcon: {
    fontSize: 15
  },
  izdaxHat: {
    fontSize: 15,
    width: '100%',
    paddingRight: 10,
    paddingLeft: 10
  }
});
