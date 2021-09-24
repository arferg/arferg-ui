import axios from "axios";

export default class ComposeService {

    static getStarWarsPerson(identifier){
        return axios.get(`https://swapi.dev/api/people/${identifier}`);
    }

}