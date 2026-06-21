import { Button, StyleSheet, Text, View } from "react-native"
import { OPENSAN_REGULAR } from "../../utils/const";
import { NavigationProp, RouteProp, useNavigation, useRoute } from "@react-navigation/native";

const styles = StyleSheet.create({
    review: {
        fontSize: 30,
        fontFamily: OPENSAN_REGULAR
    },
    reviewText: {
        fontSize: 25,
        fontFamily: OPENSAN_REGULAR,
        padding: 15
    },
})
const DetailScreen = () => {
    const navigation: NavigationProp<RootStackParamList> = useNavigation();
    const route: RouteProp<RootStackParamList, 'review-detail'> = useRoute();
    return (
        <View>
            <Text style={styles.reviewText}>ID: {route.params?.id}</Text>
            <Text style={styles.reviewText}>Tiêu đề: {route.params?.title}</Text>
            <Text style={styles.reviewText}>Rating: {route.params?.star}</Text>
            <Button title="Go home" onPress={() => navigation.navigate("home")}/>
        </View>
    )
}
export default DetailScreen;