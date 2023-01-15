import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, ImageBackground } from 'react-native';
import { Camera } from 'expo-camera';
import PhotoUpload from './photoUpload';
import Modal from 'react-native-modal';

const WINDOW_HEIGHT = Dimensions.get("window").height;
const captureSize = Math.floor(WINDOW_HEIGHT * 0.09);

export default function CameraLens() {
  const [hasPermission, setHasPermission] = useState(null);
  const [flashMode, setFlashMode] = useState("off");
  const [isPreview, setIsPreview] = useState(false);
  const [capturedImage, setCapturedImage] = useState<any>(null)
  const [isModalVisible, setIsModalVisible] = useState(false);
  const cameraRef = useRef();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleModal = () => setIsModalVisible(() => !isModalVisible);

  const takePicture = async () => {
    const options = { quality: 0.5, base64: true, skipProcessing: true };
    const data = await cameraRef.current.takePictureAsync(options);
    const source = data.uri;
    if (source) {
      await cameraRef.current.pausePreview();
      setIsPreview(true);
      setCapturedImage(data)
      console.log("picture source", source);
    }
  }

  const toggleFlashMode = () => {
    if (flashMode === "on") {
      setFlashMode("off")
    } else if (flashMode === "off") {
      setFlashMode("on")
    } else {
      setFlashMode("auto")
    }
  }

  const savePicture = () => {
    if (!capturedImage) return;

    handleModal();
  }

  const retakePicture = () => {
    setCapturedImage(null)
    setIsPreview(false)
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

  const CameraPreview = ({ photo, savePicture, retakePicture }: any) => {
    return (
      <View
        style={{
          backgroundColor: 'transparent',
          flex: 1,
          width: '100%',
          height: '100%'
        }}
      >
        <ImageBackground
          source={{ uri: photo && photo.uri }}
          style={{
            flex: 1
          }}
        />
        <View style={styles.control}>
          <View style={{
            flex: 1,
            alignItems: 'flex-start',
            marginLeft: 24,
          }}>
            <TouchableOpacity onPress={retakePicture} >
              <Text style={styles.text}>"Re-take"</Text>
            </TouchableOpacity>
          </View>
          <View style={{
            flex: 1,
            alignItems: 'flex-end',
            marginRight: 24,
          }}>
            <TouchableOpacity onPress={savePicture} >
              <Text style={styles.text}>"Save"</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      {isPreview && capturedImage ? (
        <>
          <CameraPreview photo={capturedImage} savePicture={savePicture} retakePicture={retakePicture} />
          <Modal style={styles.modal} isVisible={isModalVisible}>
            <PhotoUpload image={capturedImage} />
            <TouchableOpacity style={styles.closeModal} onPress={handleModal}>
              <Text>Cancel</Text>
            </TouchableOpacity>
          </Modal>
        </>
      ) : (
        <>
          <Camera
            ref={cameraRef}
            style={styles.container}
            // flashMode={flashMode}
            onMountError={(error) => {
              console.log("camera error", error);
            }}
          />
          <View style={styles.buttonContainer}>
            {!isPreview && renderCaptureControl()}
          </View>
        </>
      )}
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
  capture: {
    backgroundColor: "#f5f6f5",
    height: captureSize,
    width: captureSize,
    borderRadius: Math.floor(captureSize / 2),
    marginHorizontal: 31,
  },
  text: {
    fontSize: 24,
    color: 'white',
  },
  control: {
    position: "absolute",
    flexDirection: "row",
    bottom: 38,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  modal: {
    alignContent: "center",
    justifyContent: "center",
    opacity: 0.65,
  },
  closeModal: {
    backgroundColor: 'grey',
    width: '60%',
    margin: 10,
    top: '-15%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',

  }
});