import {useQuery} from "react-query"
import swapiService from "../services/SwapiService"

const useGetStarWarsPerson = (identifier) => {
    const result = useQuery(`star-wars-person-${identifier}`, () => swapiService.getStarWarsPerson(identifier),
        { refetchOnWindowFocus: false, retry: 1 });

    return {
        ...result,
        starWarsPerson: result?.data // already available under data
    };
};

export default useGetStarWarsPerson;