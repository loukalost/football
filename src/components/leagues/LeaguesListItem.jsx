import { Image, Text, TouchableOpacity, View } from 'react-native'
import { leaguesListItemStyle as styles } from './LeaguesListStyle'
import { SvgUri } from 'react-native-svg'

function formatLeagueType (type) {
  if (!type) return ''
  return type
    .toLowerCase()
    .split('_')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

function LeaguesListItem ({ league }) {
  if (!league?.emblem) return null

  return (
    <TouchableOpacity style={styles.mainContainer}>
      <Image
        src={league?.emblem}
        style={{ width: 100, height: 100 }}
        alt={league.name}
        resizeMode='contain'
      />
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.content}>{league.name.toUpperCase()} • {formatLeagueType(league.type)}</Text>
        </View>
        <View style={styles.flagContainer}>
          <Text style={styles.content}>
            {league.area?.name}
          </Text>
          {league?.area?.flag && (
            <SvgUri
              uri={league.area.flag}
              width={20}
              height={20}
            />
          )}
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default LeaguesListItem
