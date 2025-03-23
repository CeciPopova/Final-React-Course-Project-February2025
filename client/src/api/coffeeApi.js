import { useContext } from "react";
import request from "../utils/requester"
import { UserContext } from "../contexts/UserContext";

const baseUrl = 'http://localhost:3030/data/coffees';


export const useCreateCoffee = () => {
    const { accessToken } = useContext(UserContext)

    const options = {
        headers: {
            'X-Authorization': accessToken
        }
    };

    const create = (coffeeData) => {
        return request.post(baseUrl, coffeeData, options);
    }

    return {
        create,
    }
}