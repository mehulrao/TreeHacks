import { StyleSheet } from "react-native";
import * as React from "react";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import { Appearance } from "react-native";
import { Button } from "@react-native-material/core";

export default function AddTabScreen({
    navigation,
}: RootTabScreenProps<"AddTab">) {
    return (
        <div>
            <Button
                title="Click Me"
                style={{ alignSelf: "center", marginTop: 40 }}
            />
        </div>
    );
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
    separator: {
        marginVertical: 30,
        height: 1,
        width: "80%",
    },
});
