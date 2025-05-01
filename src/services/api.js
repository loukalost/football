import axios from "axios";
import Config from "react-native-config";
import { Notifier, NotifierComponents } from "react-native-notifier";

// Configuration de l'instance axios pour l'API Football
const api = axios.create({
  baseURL: Config.API_URL,
  headers: {
    "x-rapidapi-key": "XxXxXxXxXxXxXxXxXxXxXxXx", // Remplacez par votre clé API
    "x-rapidapi-host": "v3.football.api-sports.io",
  },
});

const getAllProducts = async () => {
  try {
    const response = await api.get("/");
    return response.data;
  } catch (error) {
    console.error(error);
    Notifier.showNotification({
      title: "Une erreur erreur s'est produite",
      description: `Erreur réseau, vérifiez votre connexion internet\n${error}`,
      Component: NotifierComponents.Alert,
      componentProps: {
        alertType: "error",
      },
    });
  }
};

/**
 * Récupère les ligues de football via l'API Football.
 *
 * @returns {Promise<Object>} Les données des ligues
 */
const getLeagues = async () => {
  try {
    const response = await footballApi.get("/leagues");
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des ligues :", error);
    throw error; // Vous pouvez gérer l'erreur avec une notification si nécessaire
  }
};

export { getAllProducts, addProduct, deleteProduct, addProductWithImageApi, getLeagues };
