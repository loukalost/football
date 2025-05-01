import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CoachsScreen from '../screens/CoachsScreen'

const Stack = createNativeStackNavigator()

function CoachsNavigator () {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Coachs' component={CoachsScreen} />
    </Stack.Navigator>
  )
}

export default CoachsNavigator
