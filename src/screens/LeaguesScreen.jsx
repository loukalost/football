import { View } from 'react-native'
import LeaguesList from '../components/leagues/LeaguesList'
import { useEffect } from 'react'
import { useIsFocused } from '@react-navigation/native'
import useLeagues from '../hooks/useLeagues'

function LeaguesScreen () {
  const { leagues, refresh } = useLeagues()
  const isFocused = useIsFocused()

  useEffect(() => {
    refresh()
  }, [isFocused])

  return (
    <View>
      <LeaguesList
        leagues={leagues}
        onRefresh={refresh}
      />
    </View>
  )
}

export default LeaguesScreen
