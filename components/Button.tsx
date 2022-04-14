import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

export default function Button(props: { onPress: any; iconName: any | undefined; }) {
  const { onPress, iconName } = props;
  const colorScheme = useColorScheme();
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Ionicons
                name={iconName}
                size={55}
                color={Colors[colorScheme].text} 
              />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 4,
    elevation: 3,
    width: "20%",
    height: "15%"
},
});