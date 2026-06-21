import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native"


interface IRVIEW {
    id: number,
    title: string,
    star: number
}
const styles = StyleSheet.create({
    reviewItem: {
        backgroundColor: "aqua",
        margin: 15, 
        padding: 15
    }
})
const HomeScreen = () => {
    const navigation: NavigationProp<RootStackParamList> = useNavigation();
    const [reviews, setReviews] = useState<IRVIEW[]>([
        {id: 1, title: "react-native", star: 5},
        {id: 2, title: "almo", star: 5},
    ]);
    return (
        <View>
            <Text>Danh sách chương trình: </Text>
            {/* <View>
                <Button title="VIew detail" onPress={() => navigation.navigate("review-detail")}/>
            </View> */}
            <View>
                    <FlatList data={reviews}  keyExtractor={item => item.id +""} renderItem={({item}) => {
                        return (
                            <TouchableOpacity onPress={() => navigation.navigate("review-detail", item)}>
                                <View style={styles.reviewItem}>
                                    <Text>{item.title}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }} />
            </View>
        </View>
    )
}
export default HomeScreen;