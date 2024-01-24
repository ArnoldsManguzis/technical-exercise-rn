import { Dimensions, StyleSheet, Text, View } from "react-native";
import dayjs, { Dayjs } from "dayjs";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState } from "react";
import Svg, { Path } from "react-native-svg";

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
            {/* <View
                style={{
                    position: "absolute",
                    width: "100%",
                    height: 32,
                    backgroundColor: "green",
                    zIndex: -1,
                    borderTopRightRadius: 32,
                    borderBottomRightRadius: 32,
                }}
            /> */}
            <View style={{ flexDirection: "column" }}>
                <View
                    style={{
                        flexDirection: "row",
                        gap: 16,
                        justifyContent: "space-around",
                        marginBottom: 8,
                    }}
                >
                    {week.length > 0 &&
                        week.map((day) => {
                            return (
                                <View
                                    key={day.date}
                                    style={{
                                        display: "flex",
                                        gap: 8,
                                        width: 32,
                                        // alignItems: "center",
                                    }}
                                >
                                    <Text style={{ textAlign: "center" }}>
                                        {dayjs(day.date)
                                            .format("dd")
                                            .slice(0, 1)}
                                    </Text>
                                </View>
                            );
                        })}
                </View>
                <View>
                    <View
                        style={{
                            width: "100%",
                            height: 32,
                            backgroundColor: "green",
                            zIndex: -1,
                            borderTopRightRadius: 32,
                            borderBottomRightRadius: 32,
                            position: "absolute",
                        }}
                    />
                    <View style={{ flexDirection: "row", gap: 16 }}>
                        {week.length > 0 &&
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
                                                borderWidth: day.currentDay
                                                    ? 2
                                                    : 0,
                                                borderColor: "white",
                                                backgroundColor: "red",
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}
                                        >
                                            {day.workoutComplete &&
                                                !isPerfectWeek && (
                                                    <Svg
                                                        width="17"
                                                        height="13"
                                                        viewBox="0 0 17 13"
                                                        fill="none"
                                                    >
                                                        <Path
                                                            d="M5.86 13C5.72288 12.9996 5.58732 12.9709 5.46174 12.9159C5.33616 12.8608 5.22324 12.7805 5.13 12.68L0.270002 7.51C0.0883286 7.31639 -0.00899321 7.05855 -0.000554071 6.79318C0.00788507 6.52782 0.121394 6.27668 0.315002 6.095C0.50861 5.91333 0.766458 5.81601 1.03182 5.82445C1.29719 5.83288 1.54833 5.94639 1.73 6.14L5.85 10.53L14.26 1.33C14.3453 1.22372 14.4515 1.13602 14.572 1.07227C14.6925 1.00851 14.8247 0.970066 14.9606 0.959281C15.0965 0.948497 15.2331 0.965604 15.3621 1.00955C15.4912 1.0535 15.6098 1.12336 15.7109 1.21485C15.8119 1.30633 15.8932 1.41751 15.9497 1.54154C16.0062 1.66558 16.0368 1.79986 16.0395 1.93614C16.0422 2.07242 16.0171 2.20781 15.9656 2.33401C15.9141 2.46021 15.8373 2.57455 15.74 2.67L6.6 12.67C6.50764 12.7724 6.39512 12.8545 6.26949 12.9113C6.14387 12.9681 6.00786 12.9983 5.87 13H5.86Z"
                                                            fill="#F7F7F7"
                                                        />
                                                    </Svg>
                                                )}
                                            {isPerfectWeek && (
                                                <Svg
                                                    width="20"
                                                    height="23"
                                                    viewBox="0 0 20 23"
                                                    fill="none"
                                                >
                                                    <Path
                                                        d="M6.75114 0.419632C6.75114 0.419632 9.44445 4.1063 9.99664 7.5809C10.7691 12.4433 8.30627 13.2988 8.30627 13.3149C8.30627 13.2988 5.489 12.7992 5.60169 8.35809C3.16024 9.7809 0.949814 12.3123 0.949814 15.103C0.949814 18.6142 3.50226 21.5942 7.04583 22.6551C5.72058 21.5837 4.70974 19.5163 5.04669 15.5926C6.94666 17.7016 8.65111 18.5221 9.99382 18.7625C14.1876 13.8023 12.5919 10.3632 12.5919 10.3632C18.5921 16.5647 14.9979 20.8609 12.8291 22.6201C15.8295 21.6569 17.9994 19.2382 18.7533 16.2938C19.7095 12.4267 19.1978 5.58074 6.75114 0.419632Z"
                                                        fill="#F7F7F7"
                                                    />
                                                </Svg>
                                            )}
                                        </LinearGradient>
                                    </View>
                                );
                            })}
                    </View>
                </View>
            </View>
        </View>
    );
};

export default Streak;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "cornflowerblue",
    },
});
