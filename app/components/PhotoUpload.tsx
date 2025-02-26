import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { FontAwesome5 } from '@expo/vector-icons';

interface PhotoUploadProps {
  onImageSelected: (uri: string) => void;
}

export const PhotoUpload = ({ onImageSelected }: PhotoUploadProps) => {
  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled && result.assets[0]) {
      onImageSelected(result.assets[0].uri);
    }
  };

  return (
    <Pressable style={styles.container} onPress={pickImage}>
      <FontAwesome5 name="camera" size={24} color="#6B4DE6" />
      <Text style={styles.text}>Upload a photo</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    padding: 16,
    borderRadius: 12,
    gap: 12,
  },
  text: {
    fontSize: 16,
    fontFamily: 'Inter_400Regular',
    color: '#2D3436',
  },
});