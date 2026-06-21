import { Button, Text, View } from "react-native"

const HomeScreen = (props: any) => {
    const {navigation} = props;
    return (
        <View>
            <Text>Home</Text>
            <View>
                <Button title="VIew detail" onPress={() => navigation.navigate("review-detail")}/>
            </View>
        </View>
    )
}
export default HomeScreen;