import { StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

export default function HomeTabScreen({
    navigation,
}: RootTabScreenProps<"HomeTab">) {
    return <View style={styles.container} />;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "left",
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: "80%",
    },
});
