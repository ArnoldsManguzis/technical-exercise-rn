import { StyleSheet, Text, View } from "react-native";
import dayjs from "dayjs";
import { LinearGradient } from "expo-linear-gradient";

interface StreakProps {
    streak?: string[];
}
const Streak = ({ streak }: StreakProps) => {
    return (
        <View style={styles.container}>
            {streak &&
                streak.length > 0 &&
                streak.map((day) => {
                    return (
                        <View style={{ alignItems: "center", padding: 5 }}>
                            <Text>{dayjs(day).format("dd").slice(0, 1)}</Text>
                            <LinearGradient
                                colors={["#E32EED", "#F76938"]}
                                style={{
                                    height: 32,
                                    width: 32,
                                    borderRadius: 32,
                                    backgroundColor: "red",
                                }}
                            ></LinearGradient>
                        </View>
                    );
                })}
        </View>
    );
};

export default Streak;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flexDirection: "row",
    },
});
