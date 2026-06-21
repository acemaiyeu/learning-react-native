import { Button, Text, View } from "react-native"

const HomeScreen = () => {
    return (
        <View>
            <Text>Home</Text>
            <View>
                <Button title="VIew detail" onPress={() => alert("me")}/>
            </View>
        </View>
    )
}
export default HomeScreen;