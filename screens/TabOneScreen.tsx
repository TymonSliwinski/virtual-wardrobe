import { StyleSheet, TouchableOpacity } from 'react-native';

import Button from '../components/Button';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <View style={styles.wardrobe}>
          <Button 
          onPress={ () => console.log("pres") }
          iconName={"hat"}
          />
          <Button 
          onPress={ () => console.log("pres") }
          iconName={"shirt-outline"}
          />
          <Button 
          onPress={ () => console.log("pres") }
          iconName={"gear"}
          />
          <Button 
          onPress={ () => console.log("pres") }
          iconName={"gear"}
          />
          <Button 
          onPress={ () => console.log("pres") }
          iconName={"gear"}
          />
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
});
