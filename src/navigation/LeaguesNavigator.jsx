import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LeaguesScreen from '../screens/LeaguesScreen'
import LeagueDetailScreen from '../screens/LeagueDetailScreen'

const Stack = createNativeStackNavigator()

function LeaguesNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Leagues' component={LeaguesScreen} options={{ title: 'Leagues' }} />
      <Stack.Screen name='LeagueDetail' component={LeagueDetailScreen} options={{ title: 'League Detail' }} />
    </Stack.Navigator>
  )
}

export default LeaguesNavigator
