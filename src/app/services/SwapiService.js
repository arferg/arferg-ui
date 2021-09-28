import axios from "axios";

export default class SwapiService {

    static getStarWarsPerson(identifier){
        return axios.get(`https://swapi.dev/api/people/${identifier}`);
    }

}