import { Link } from "expo-router";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';

const Home = () => {

        const [isPlaying, setIsPlaying] = useState(true);
        const togglePlayPause = () => {
            setIsPlaying(!isPlaying); // Toggle between playing and paused
            }     
    
    return (
        <LinearGradient 
        colors={['#01efac', '#2082a6', '#524096', '#5f2a84']}
        className="flex-1 justify-center items-center"
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        >
        {/* Audio Visualizer being implemented*/}
        <Text>
            Audio Visualizer
        </Text>
        {/* Decibels View being implementation*/}
        <Text>
            0 Decibels
        </Text>
        {/* Play/Pause Button */}
        <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' , position: 'absolute', bottom: 180}}>
            <TouchableOpacity onPress={togglePlayPause}>
            <Image
            source={
                isPlaying 
                ? require('../components/Play_Button.png')
                : require('../components/Pause_Button.png')
            }
            style={{
                width: 225, 
                height: 225,
            }}
            /> 
            </TouchableOpacity>             
            
        </View>
        {/* Settings Button */}
        <View style={{ position: 'absolute', bottom: 50 }}>
            <Link href="/settings">
            <Image
                source={require('../components/Settings_Button.png')}               
                style={{width: 50, height: 50}}
            />
            </Link>
        </View>

        </LinearGradient>
    )
}

export default Home