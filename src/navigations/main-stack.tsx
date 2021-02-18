import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { Home, TravelDetail } from '../screens';

const Stack = createStackNavigator();

const options = {
    headerBackTitleVisible: false,
    cardStyleInterpolator: ({ current: { progress } }) => {
        return {
            cardStyle: {
                opacity: progress
            }
        };
    }
};

export const StackNavigation: React.FC<any> = () => {

    return (
        <Stack.Navigator headerMode='none'>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen
                name="Detail"
                component={TravelDetail}
                options={options}
            />
        </Stack.Navigator>
    )
}
