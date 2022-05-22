import React from 'react';
import CameraLens from '../components/CameraLens';
import { useIsFocused } from '@react-navigation/native';

export default function TabThreeScreen() {
  const isFocused = useIsFocused();
  if (isFocused) {
    return <CameraLens />
  } else {
    return null
  }
}