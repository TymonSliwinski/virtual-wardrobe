import { Pressable, StyleSheet, TouchableOpacity } from 'react-native';

import Button from '../components/Button';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import Hat from '../assets/images/hat.svg'
import Jacket from '../assets/images/jacket.svg'
import Shirt from '../assets/images/shirt.svg'
import Pants from '../assets/images/pants.svg'
import Shoes from '../assets/images/shoes.svg'

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <View style={styles.wardrobe}>
          <Pressable
            onPress={() => console.log("hat")}
            style={({ pressed }) => ({
              ...styles.svg,
              marginLeft: 20,
              opacity: pressed ? 0.5 : 1,
            })}>
            <Hat width={60} height={60} fill={"black"} />
          </Pressable>
          
          <Pressable
            onPress={() => console.log("hat")}
            style={({ pressed }) => ({
              ...styles.svg,
              opacity: pressed ? 0.5 : 1,
            })}>
            <Jacket width={100} height={100}  fill={"black"} />
          </Pressable>
          
          <Pressable
            onPress={() => console.log("hat")}
            style={({ pressed }) => ({
              ...styles.svg,
              opacity: pressed ? 0.5 : 1,
            })}>
            <Shirt width={100} height={100} stroke={"black"} fill={"black"} />
          </Pressable>
          
          <Pressable
            onPress={() => console.log("hat")}
            style={({ pressed }) => ({
              ...styles.svg,
              opacity: pressed ? 0.5 : 1,
            })}>
            <Pants width={100} height={100} fill={"black"} />
          </Pressable>
          
          <Pressable
            onPress={() => console.log("hat")}
            style={({ pressed }) => ({
              ...styles.svg,
              marginLeft: 15,
              opacity: pressed ? 0.5 : 1,
            })}>
            <Shoes width={80} height={80} stroke={"black"} fill={"black"} />
          </Pressable>
          
          
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    height: "auto",
    flexDirection: "row",
    alignContent: "stretch"
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: "column",
    alignContent: "space-around"
  },
  wardrobe: {
    flex: 4,
    marginTop: 50,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  svg: {
    width: "30%",
    marginTop: 20,
  }
});
