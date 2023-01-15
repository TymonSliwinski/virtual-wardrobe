import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { UserContext } from '../userContext';
import SelectDropdown from 'react-native-select-dropdown';
import { storage } from '../firebase';
import { ref, uploadBytes } from 'firebase/storage'
import {decode, encode} from 'base-64'
import { Buffer } from 'buffer';

if (!global.btoa) {  global.btoa = encode }

if (!global.atob) { global.atob = decode }

const categories = ["hat", "jacket", "shirt", "pants", "shoes"];

function base64StringToBlob(base64Data: String, contentType: String) {
    const base64 = base64Data //.replace(/^data:image\/(png|jpeg);base64,/, "");
    const buffer = Buffer.from(base64, "base64");

    return new Blob([buffer], { type: 'image/jpeg' })
}

export default function PhotoUpload(props: {image: Object}) {
    const { userValue } = useContext(UserContext);
    const [category, setCategory] = useState("");

    if (!userValue) {
        console.log("User unauthenticated");
        return null
    }

    let storagePath = `${userValue.uid}/`;

    const onSelect = (selectedItem: String, index: Number) => {
        setCategory(selectedItem);
    }

    const upload = (img: Object) => {
        if (!category) {
            console.log("No category selected");
            return;
        }

        storagePath += category + "/";
        
        let path = img.uri.split("/");
        const name = path[path.length - 1];
        storagePath += name;
        
        const storageRef = ref(storage, storagePath);
        uploadBytes(storageRef, base64StringToBlob(img.base64, '')).then(() => {console.log("file uploaded successfully")});
    }

    return (
        <View style={styles.container}>
            <Text>Upload Photo</Text>
            <SelectDropdown
                data={categories}
                onSelect={onSelect}
                buttonTextAfterSelection={(selectedItem, index) => {
                    return selectedItem
                }}
                rowTextForSelection={(item, index) => {
                    return "<icon>" + item;
                }}
                buttonStyle={styles.buttonStyle}
            />
            
            <TouchableOpacity style={styles.uploadButton} onPress={() => {upload(props.image)}}>
                <Text>Upload</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 25,
        height: '50%',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonStyle: {
        width: '80%',
        height: 50,
        margin: 10,
        backgroundColor: '#FFF',
        paddingHorizontal: 0,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#444',
    },
    uploadButton: {
        backgroundColor: '#0782F9',
        width: '60%',
        margin: 10,
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    }
});