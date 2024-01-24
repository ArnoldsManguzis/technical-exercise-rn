import { StyleSheet, Text, View } from "react-native";
import * as dayjs from "dayjs";

interface StreakProps {
    streak?: string[];
}
const Streak = ({ streak }: StreakProps) => {
    return (
        <View style={styles.container}>
            {streak &&
                streak.length > 0 &&
                streak.map((day) => {
                    return <Text>{day}</Text>;
                })}
        </View>
    );
};

export default Streak;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        width: "100%",
        height: 25,
    },
});
