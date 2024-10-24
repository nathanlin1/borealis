import { Link } from "expo-router";
import { View } from "react-native";

const Home = () => {
    return (
        <View>
            <Link href="/settings">Go to settings</Link>
        </View>
    )
}

export default Home