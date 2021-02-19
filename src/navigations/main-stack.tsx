import React from 'react';
import {Home, TravelDetail} from '../screens';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';

const Stack = createSharedElementStackNavigator();

const options = {
  headerBackTitleVisible: false,
  cardStyleInterpolator: ({current: {progress}}: any) => {
    return {
      cardStyle: {
        opacity: progress,
      },
    };
  },
};

export const StackNavigation: React.FC<any> = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="Detail"
        component={TravelDetail}
        options={options}
        sharedElementsConfig={(route, otherRoute, showing) => {
          const {id} = route.params;
          return [
            {
              id: `item.${id}.photo`,
              animation: 'move',
              //   resize: 'clip'
              //   align: 'left-top'
            },
            {
              id: `title.${id}`,
              animation: 'fade',
            },
          ];
        }}
      />
    </Stack.Navigator>
  );
};
