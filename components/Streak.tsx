import { StyleSheet, Text, View } from "react-native";
import dayjs, { Dayjs } from "dayjs";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState } from "react";

const addDays = (date: string, days: number) => {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
};
interface StreakProps {
    streak: string[];
}
const Streak = ({ streak }: StreakProps) => {
    const [week, setWeek] = useState<
        { date: string; workoutComplete: boolean; currentDay: boolean }[]
    >([]);
    const [isPerfectWeek, setIsPerfectWeek] = useState(false);
    useEffect(() => {
        if (streak.length > 0) {
            const mod = streak.length % 7;
            if (streak.length % 7 === 0) {
                const newWeek = streak
                    .slice(streak.length - 7, streak.length)
                    .map((day) => {
                        return {
                            date: day,
                            workoutComplete: true,
                            currentDay: false,
                        };
                    });
                newWeek[newWeek.length - 1].currentDay = true;
                setWeek(newWeek);
                setIsPerfectWeek(true);
            } else {
                const newWeek = streak
                    .slice(streak.length - mod, streak.length)
                    .map((day) => {
                        return {
                            date: day,
                            workoutComplete: true,
                            currentDay: false,
                        };
                    });
                newWeek[newWeek.length - 1].currentDay = true;
                console.log(JSON.stringify(newWeek, null, " "));
                while (newWeek.length < 7) {
                    newWeek.push({
                        date: dayjs(
                            addDays(newWeek[newWeek.length - 1].date, 1)
                        ).toISOString(),
                        workoutComplete: false,
                        currentDay: false,
                    });
                }
                setWeek(newWeek);
                setIsPerfectWeek(false);
            }

            // setWeek(newWeek);
        }
    }, [streak]);

    return (
        <View style={styles.container}>
            {week &&
                week.length > 0 &&
                week.map((day) => {
                    return (
                        <View
                            key={day.date}
                            style={{
                                display: "flex",
                                gap: 8,
                                alignItems: "center",
                            }}
                        >
                            <Text>
                                {dayjs(day.date).format("dd").slice(0, 1)}
                            </Text>
                            <LinearGradient
                                colors={
                                    day.workoutComplete
                                        ? ["#E32EED", "#F76938"]
                                        : ["#F7F7F7"]
                                }
                                style={{
                                    height: 32,
                                    width: 32,
                                    borderRadius: 32,
                                    borderWidth: day.currentDay ? 2 : 0,
                                    borderColor: "white",
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
        backgroundColor: "cornflowerblue",
        flexDirection: "row",
        gap: 16,
    },
});
