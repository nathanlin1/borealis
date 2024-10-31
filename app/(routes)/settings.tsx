import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import { View, Text, Image, TouchableOpacity } from "react-native";
import images from "../../constants/images"

const Settings = () => {
    return (
        <LinearGradient
            colors={['#01efac', '#2082a6', '#524096', '#5f2a84']}
            className="flex-1 justify-center items-center"
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{ paddingBottom: 80 }} // Added padding to lift the buttons slightly
        >
            <TouchableOpacity className="w-64 h-12 bg-white/10 flex-row justify-between items-center px-4 mb-4 rounded-lg">
                <Text className="text-lg text-white">Account</Text>
                <Text className="text-lg text-white">Details &gt;</Text>
            </TouchableOpacity>

            <TouchableOpacity className="w-64 h-12 bg-white/10 flex-row justify-between items-center px-4 mb-4 rounded-lg">
                <Text className="text-lg text-white">Notifications</Text>
                <Text className="text-lg text-white">Details &gt;</Text>
            </TouchableOpacity>

            <TouchableOpacity className="w-64 h-12 bg-white/10 flex-row justify-between items-center px-4 rounded-lg">
                <Text className="text-lg text-white">Threshold</Text>
                <Text className="text-lg text-white">Details &gt;</Text>
            </TouchableOpacity>

            <View style={{ position: 'absolute', bottom: 50 }}>
                <Link href="/home">
                    <Image
                        source={images.settings}
                        style={{ width: 50, height: 50 }}
                    />
                </Link>
            </View>
        </LinearGradient>
    );
};

export default Settings;
