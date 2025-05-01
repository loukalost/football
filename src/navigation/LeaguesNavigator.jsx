import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LeaguesScreen from '../screens/LeaguesScreen'

const Stack = createNativeStackNavigator()

function LeaguesNavigator () {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Leagues' component={LeaguesScreen} />
    </Stack.Navigator>
  )
}

export default LeaguesNavigator
