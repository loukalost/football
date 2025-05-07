import React from 'react'
import { View, Text } from 'react-native'
// import { SvgUri } from 'react-native-svg'
import { leagueDetailStyles as styles } from './LeaguesListStyle'

function LeagueDetail({ route }) {
  const { leagueId } = route.params

  if (!leagueId) return <Text>League not found</Text>

  console.log('League ID:', leagueId)

  return (
    <View style={styles.container}>
      <Text>{leagueId}</Text>
      {/* <Text style={styles.title}>{league.name}</Text>
      <Text style={styles.subtitle}>{league.area?.name}</Text>
      {league?.area?.flag && (
        <SvgUri uri={league.area.flag} width={100} height={100} />
      )}
      <Text style={styles.description}>
        Type: {league.type}
      </Text> */}
    </View>
  )
}

export default LeagueDetail
