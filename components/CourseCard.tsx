import { Link } from "expo-router";
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
const { width } = Dimensions.get('window');
// export type CourseCardProps = {
//   title: number;
//   instructor: any;
// };

export const CourseCard = (course: any) => {

    return (
        <Link href={{ pathname:'/courses/[id]', params: course.course.id}} style={{marginBottom: 15}}>
            <View style={styles.courseCard} key={course.course.id}>
                <Image 
                    source={require('@/assets/images/course_details.png')} // Replace with your back icon image
                    style={styles.courseImage}
                />
                <View style={styles.courseDetails}>
                    <Text style={styles.courseTitle}>{course.course.title}</Text>
                    <Text style={styles.instructor}>By {course.course.instructor}</Text>
                    <Text style={styles.duration}>{course.course.duration} Mins Done</Text>
                    <View style={styles.progressBar}>
                        <View
                            style={{
                                ...styles.progress,
                                width: `${(course.course.duration / 120) * 100}%`, // Calculate width as a percentage of 120 mins
                            }}
                        />
                    </View>
                </View>
            </View>
        </Link>
    );
};

const styles = StyleSheet.create({
    courseCard: {
        backgroundColor: '#F2E1F3',
        borderRadius: 10,
        padding: 15,
        shadowColor: '#D9D9D9',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1,
        elevation: 3,
        display: "flex",
        flexDirection: "row",
        width: width*0.9
    },
    courseImage: {
        width: ((width*0.9) / 100)*30, // Adjust size as needed
        height: 100,// Adjust size as needed
        borderRadius: 10,
        resizeMode: 'cover'
    },
    courseDetails: {
        width: ((width*0.9)/100)*50,
        marginLeft: 20,
        display: 'flex'
    },
    courseTitle: {
        fontSize: 18,
        fontWeight: '700',
        marginBottom: 3
    },
    instructor: {
        color: '#555',
    },
    duration: {
        marginVertical: 10,
        color: '#888',
        alignSelf: 'flex-end'
    },
    progressBar: {
        height: 10,
        backgroundColor: '#D9D9D9',
        borderRadius: 5,
    },
    progress: {
        height: '100%',
        backgroundColor: '#9E08AB',
        borderRadius: 10
    },
});