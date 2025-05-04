import axios from 'axios'
import { Notifier, NotifierComponents } from 'react-native-notifier'
import Config from 'react-native-config'

const api = axios.create({
  baseURL: Config.API_URL,
  headers: {
    'x-apisports-key': Config.API_KEY
  }
})

/**
 * Récupère les ligues de football via l'API Football.
 *
 * @returns {Promise<Object>} Les données des ligues
 */
const getLeagues = async () => {
  try {
    const response = await api.get('/competitions')
    return response.data
  } catch (error) {
    console.error('Erreur lors de la récupération des ligues :', error)
    Notifier.showNotification({
      title: "Une erreur s'est produite",
      description: `Erreur réseau, vérifiez votre connexion internet\n${error.message}`,
      Component: NotifierComponents.Alert,
      componentProps: {
        alertType: 'error'
      }
    })
  }
}

export { getLeagues }
