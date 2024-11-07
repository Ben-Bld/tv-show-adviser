import axios from "axios";
import { BASE_URL, API_KEY_PARAM } from "../config";

export class TVShowAPI {

  static async fetchPopulars() {
try { 
    const response = await axios.get(
      `${BASE_URL}tv/popular${API_KEY_PARAM}`
    );
    return response.data.results;
  }catch(error)
  { alert("erreur durant la recherche des séries populaires.")}
   
  
}
   

  static async fetchRecommendations(tvShowId) {
    try { 
    const response = await axios.get(
      `${BASE_URL}tv/${tvShowId}/recommendations${API_KEY_PARAM}`
    );
    return response.data.results;
}catch(error)
{ alert("erreur durant la recherche des séries recommandées." + error.message)}
 
  }

  static async fetchByTitle(title) {
    try { 
    const response = await axios.get(
      `${BASE_URL}search/tv${API_KEY_PARAM}&query=${title}`
    );
    return response.data.results;
}catch(error)
{ alert("erreur durant la recherche de la série.")}
 
  }
}