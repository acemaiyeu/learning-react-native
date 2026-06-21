import { Button, StyleSheet, Text, View } from "react-native"
import { OPENSAN_REGULAR } from "../../utils/const";
import { NavigationProp, useNavigation } from "@react-navigation/native";

const styles = StyleSheet.create({
    review: {
        fontSize: 30,
        fontFamily: OPENSAN_REGULAR
    }
})
const DetailScreen = () => {
    const navigation: NavigationProp<RootStackParamList> = useNavigation();
    return (
        <View>
            <Text style={styles.review}>Detail google</Text>
            <Button title="Go home" onPress={() => navigation.navigate("home")}/>
        </View>
    )
}
export default DetailScreen;