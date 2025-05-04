import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import LeaguesNavigator from './LeaguesNavigator'
import TabBar from './TabBar'

const Tabs = createBottomTabNavigator()

function MainNavigator () {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false
      }}
      tabBar={(props) => <TabBar {...props} />}
    >
      <Tabs.Screen name='Leagues' component={LeaguesNavigator} />
    </Tabs.Navigator>
  )
}

export default MainNavigator
