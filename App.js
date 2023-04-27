import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";

export default function App() {
  const [image, setImage] = useState(null);
  const PicImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (result) {
      setImage(result.assets[0].uri);
    }
  };
  console.log(image);
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={{ width: 200, height: 200 }}
          source={{
            uri: image,
          }}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          PicImage();
        }}
        style={styles.btn}
      >
        <Text style={styles.btnText}>Pic an image</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  btn: {
    backgroundColor: "gray",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 40,
  },
  btnText: {
    fontSize: 20,
    color: "green",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
