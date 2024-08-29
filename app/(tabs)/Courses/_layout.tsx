import React from "react";
import { Stack } from "expo-router";

const CoursesLayout = () => {
    return (
        <Stack>
            <Stack.Screen
                name="index"
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="[id]"
                options={{
                    headerShown: false,
                }}
            />
        </Stack>
    );
};

export default CoursesLayout;