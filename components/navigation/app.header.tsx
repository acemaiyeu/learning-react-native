import { StyleSheet, Text, View } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";


const styles = StyleSheet.create({
    header_container: {
        flexDirection: "row",
        padding: 20,
        alignItems: "center",
        color: "gray",
        width: "100%",
        paddingTop: 30
    },
    header_text: {
        flex: 1,
        textAlign: "center"
    }
})

const AppHeader = () => {
    const navigation: any = useNavigation();
    return (
        <View style={styles.header_container}>
            <Ionicons name="menu-outline" size={24} color="black" onPress={() => navigation.openDrawer()}/>
            <Text style={styles.header_text}>SHOPEEFOOD</Text>
        </View>
    )
}
export default AppHeader;