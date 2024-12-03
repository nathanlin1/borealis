import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Auth from '../islands/Auth';
import { Redirect } from 'expo-router';

const Index = () => {

  return <Redirect href="/home"/>

  return (
    <LinearGradient
      colors={['#01efac', '#2082a6', '#524096', '#5f2a84']}
      className="flex-1 justify-center items-center"
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <SafeAreaView className="flex-1 justify-center p-5">
        {/* Header Section */}
        <View className="flex-2 justify-center items-center mb-8">
          <Text className="text-white text-4xl font-bold">
            Borealis Voice Control
          </Text>
          <Text className="text-white text-lg mt-2 text-center">
            Control your world with your voice
          </Text>
        </View>

        {/* Buttons Section */}
        <View className="flex-1 justify-center items-center">
          <Auth />
        </View>

        {/* Footer Section */}
        <View className="flex-1 justify-end items-center pb-5">
          <Text className="text-gray-300 text-base">
            © 2024 Borealis Inc. All rights reserved.
          </Text>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

export default Index;