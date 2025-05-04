import { useCallback, useState } from 'react'
import { FlatList, RefreshControl, Text } from 'react-native'
import LeaguesListItem from './LeaguesListItem'
import { leaguesListStyle as styles } from './LeaguesListStyle'

function LeaguesList ({ leagues, onRefresh }) {
  const [refreshing, setRefreshing] = useState(false)

  const onRefreshList = useCallback(async () => {
    setRefreshing(true)
    await onRefresh()
    setRefreshing(false)
  }, [])

  if (!leagues.competitions || leagues.competitions.length < 1) return <Text>No leagues data</Text>

  const filteredLeagues = leagues.filter(league => league.emblem)

  return (
    <FlatList
      initialNumToRender={30}
      keyExtractor={(item) => item.id.toString()}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefreshList} />
      }
      data={filteredLeagues}
      renderItem={({ item }) => (
        <LeaguesListItem league={item} />
      )}
      contentContainerStyle={styles.container}
    />
  )
}

export default LeaguesList
