import { createStackNavigator } from "@react-navigation/stack";

import FullScreenImage from "../screens/FullScreenImage/FullScreenImage";
import SettingsScreen from "../screens/UnusedScreens/Settings/SettingsScreen";

const Stack = createStackNavigator()

const StackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Settings"
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen
                name="Settings"
                component={SettingsScreen}
            />
            <Stack.Screen
                name="FullImage"
                component={FullScreenImage}
            />
        </Stack.Navigator>
    )
}

export default StackNavigator