import { Pressable, StyleSheet, TouchableOpacity } from 'react-native';

import Button from '../components/Button';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Pants from '../assets/images/pants.svg'
import SomeShirt from '../assets/images/someShirt.svg'
import '@fortawesome/fontawesome-svg-core'
import { faArrowsDownToPeople, faBasketball, faHatCowboy, faHatHard, faHatWizard, faShirt, faShoePrints, faTShirt } from "@fortawesome/free-solid-svg-icons"

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <View style={styles.wardrobe}>
          <Pressable
            onPress={() => console.log("hat")}
            style={({ pressed }) => ({
              opacity: pressed ? 0.5 : 1,
            })}>
            <FontAwesomeIcon
              icon={faHatCowboy}
              style={styles.clothes}
              size={60}
            />
          </Pressable>
          <Pressable
            onPress={() => console.log("hat")}
            style={({ pressed }) => ({
              opacity: pressed ? 0.5 : 1,
            })}>
            <FontAwesomeIcon
              icon={faShirt}
              style={styles.clothes}
              size={60}
            />
          </Pressable>
          <Pressable
            onPress={() => console.log("hat")}
            style={({ pressed }) => ({
              opacity: pressed ? 0.5 : 1,
            })}>
            <FontAwesomeIcon
              icon={faHatHard}
              style={styles.clothes}
              size={60}
            />
          </Pressable>
          <Pressable
            onPress={() => console.log("hat")}
            style={({ pressed }) => ({
              opacity: pressed ? 0.5 : 1,
            })}>
          </Pressable>
          <Pressable
            onPress={() => console.log("hat")}
            style={({ pressed }) => ({
              opacity: pressed ? 0.5 : 1,
            })}>
            <FontAwesomeIcon
              icon={faHatWizard}
              style={styles.clothes}
              size={60}
            />
          </Pressable>
          <Pants width={100} height={100} style={styles.clothes} />
          <SomeShirt width={100} height={100} style={styles.clothes} />
          
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
  clothes: {
    marginLeft: 20,
    marginTop: 20,
  },
});
