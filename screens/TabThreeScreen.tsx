import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { Camera } from 'expo-camera';
const WINDOW_HEIGHT = Dimensions.get("window").height;
const captureSize = Math.floor(WINDOW_HEIGHT * 0.09);
export default function TabThreeScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [isFlashModeOn, setFlashMode] = useState(false);
  const [isPreview, setIsPreview] = useState(false);
  const cameraRef = useRef();

  useEffect(() => {console.log(cameraRef.current);
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    console.log(cameraRef);
    // if (cameraRef.current) {
      const options = { quality: 0.5, base64: true, skipProcessing: true };
      const data = await cameraRef.current.takePictureAsync(options);
      const source = data.uri;
      console.log(source);
      if (source) {
        await cameraRef.current.pausePreview();
        setIsPreview(true);
        console.log("picture source", source);
      }
    // }
  }

  const toggleFlashMode = () => {
    if (isFlashModeOn) {
      setFlashMode(Camera.Constants.FlashMode.Off)
    } else {
      setFlashMode(Camera.Constants.FlashMode.On)
    }
  }

  const renderCaptureControl = () => (
    <View style={styles.control}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={takePicture}
        style={styles.capture}
      />
    </View>
  );

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  
  return (
    <View style={styles.container}>
      <Camera
        ref={cameraRef}
        style={styles.container}
        flashMode={isFlashModeOn}
        onMountError={(error) => {
          console.log("cammera error", error);
        }}
      />
        <View style={styles.buttonContainer}>
          {!isPreview && renderCaptureControl()}
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
    camera: {
      flex: 1,
    },
    buttonContainer: {
      flex: 1,
      backgroundColor: 'transparent',
      flexDirection: 'row',
      margin: 20,
    },
    button: {
      flex: 0.1,
      alignSelf: 'flex-end',
      alignItems: 'center',
    },
    capture: {
      backgroundColor: "#f5f6f5",
      // borderRadius: 5,
      height: captureSize,
      width: captureSize,
      borderRadius: Math.floor(captureSize / 2),
      marginHorizontal: 31,
    },
    text: {
      fontSize: 18,
      color: 'white',
    },
  media: {
    ...StyleSheet.absoluteFillObject,
  },
  closeCross: {
    width: "68%",
    height: 1,
    backgroundColor: "black",
  },
  control: {
    position: "absolute",
    flexDirection: "row",
    bottom: 38,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  recordIndicatorContainer: {
    flexDirection: "row",
    position: "absolute",
    top: 25,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    opacity: 0.7,
  },
  recordTitle: {
    fontSize: 14,
    color: "#ffffff",
    textAlign: "center",
  },
});