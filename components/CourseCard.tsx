import { StyleSheet, Text, View } from "react-native";

// export type CourseCardProps = {
//   title: number;
//   instructor: any;
// };

export const CourseCard = (index: number, course: any) => {
    return (
        <View key={index} style={styles.courseCard}>
            <Text style={styles.courseTitle}>{course.title}</Text>
            <Text style={styles.instructor}>By {course.instructor}</Text>
            <Text style={styles.duration}>{course.duration} Mins Done</Text>
            <View style={styles.progressBar}>
                <View
                    style={{
                        ...styles.progress,
                        width: `${(course.duration / 120) * 100}%`, // Calculate width as a percentage of 120 mins
                    }}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    courseCard: {
        backgroundColor: '#f8f8f8',
        borderRadius: 10,
        padding: 15,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1,
        elevation: 3,
    },
    courseTitle: {
        fontSize: 18,
        fontWeight: '600',
    },
    instructor: {
        color: '#555',
    },
    duration: {
        marginVertical: 10,
        color: '#888',
    },
    progressBar: {
        height: 10,
        backgroundColor: '#e0e0e0',
        borderRadius: 5,
        overflow: 'hidden',
    },
    progress: {
        height: '100%',
        backgroundColor: '#6200ee',
    },
});