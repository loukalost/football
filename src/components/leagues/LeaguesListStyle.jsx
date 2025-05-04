import { StyleSheet } from 'react-native'

export const leaguesListStyle = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: 'column',
    gap: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    paddingTop: 10,
    paddingBottom: 10
  }
})

export const leaguesListItemStyle = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: '90%',
    margin: 'auto',
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 3,
    gap: 10
  },
  container: {
    flex: 1,
    width: '90%',
    margin: 'auto',
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    gap: 10
  },
  flagContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    width: 'auto'
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column'
  },
  content: {
    color: '#555'
  },
  noFlag: {
    fontSize: 12,
    color: '#888'
  }
})

export const leagueDetailStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  subtitle: {
    fontSize: 18,
    color: '#555',
    marginBottom: 20
  },
  description: {
    fontSize: 16,
    color: '#333'
  }
})
