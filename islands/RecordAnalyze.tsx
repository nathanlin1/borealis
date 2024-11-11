import React, { useState, useEffect } from 'react';
import { View, Button, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { AudioRecorder, AudioUtils } from 'react-native-audio';
import images  from "../constants/images"

export default function RecordAnalyzeButton() {
  const [isRecording, setIsRecording] = useState(false);
  const [audioPath, setAudioPath] = useState<string>('');
  const [currentMetering, setCurrentMetering] = useState<number>(0);  // Store current metering
  const [currentPeakMetering, setCurrentPeakMetering] = useState<number>(0);  // Store current peak metering
  const [decibels, setDecibels] = useState<number>(0); 

  useEffect(() => {
    // Request permission for recording
    AudioRecorder.requestAuthorization();

    AudioRecorder.onProgress = (data: any) => {
      if (data.currentMetering !== undefined) {
        setCurrentMetering(data.currentMetering);  // Update current metering
      }
      if (data.currentPeakMetering !== undefined) {
        setCurrentPeakMetering(data.currentPeakMetering);  // Update current peak metering
      }
      setDecibels(data.currentMetering + 60)
    };
  }, []);

  const startRecording = async () => {
    try {
      // Define the path where you want to save the audio file
      const path = AudioUtils.DocumentDirectoryPath + '/recorded_audio.aac'; // Custom path

      // Initialize the recorder with the file path and enable metering
      await AudioRecorder.prepareRecordingAtPath(path, {
        SampleRate: 22050,
        Channels: 1,
        AudioQuality: 'High',
        AudioEncoding: 'aac',
        MeteringEnabled: true,  // Enable audio metering
      });

      await AudioRecorder.startRecording();
      setIsRecording(true);
    } catch (error) {
      console.error('Error starting recording', error);
    }
  };

  const stopRecording = async () => {
    try {
      await AudioRecorder.stopRecording();
      setIsRecording(false);
      setDecibels(0)
    } catch (error) {
      console.error('Error stopping recording', error);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' , position: 'absolute', bottom: 180}}>
    <Text style={{ paddingBottom: 100, fontSize: 40 }}>
      Decibels: {Math.floor(decibels)}
    </Text>
    <TouchableOpacity onPress={isRecording ? stopRecording : startRecording}>
      <Image
      source={
          isRecording 
          ? images.pause
          : images.play
      }
      style={{
          width: 225, 
          height: 225,
      }}
    /> 
    </TouchableOpacity>             
  </View>
  );
}