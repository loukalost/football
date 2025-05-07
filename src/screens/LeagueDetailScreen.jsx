import { View } from 'react-native'
import { useEffect } from 'react'
import { useIsFocused } from '@react-navigation/native'
import useLeague from '../hooks/useLeague'
import LeagueDetail from '../components/leagues/LeagueDetail'

function LeagueDetailScreen({ route }) {
  const { code } = route.params
  const { league, refresh } = useLeague(code)
  const isFocused = useIsFocused()

  useEffect(() => {
    refresh()
  }, [isFocused])

  return (
    <View>
      <LeagueDetail league={league} onRefresh={refresh} />
    </View>
  )
}

export default LeagueDetailScreen
