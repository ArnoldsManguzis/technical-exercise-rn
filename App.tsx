import { StyleSheet, Text, View } from "react-native";
import Streak from "./components/Streak";

export default function App() {
    return (
        <View style={styles.container}>
            <Streak
                streak={[
                    "2023-07-21T12:07:47+01:00",
                    "2023-07-22T12:07:47+01:00",
                    "2023-07-23T12:07:47+01:00",
                    "2023-07-24T12:07:47+01:00",
                    "2023-07-25T12:07:47+01:00",
                    "2023-07-26T12:07:47+01:00",
                    "2023-07-27T12:07:47+01:00",
                ]}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
