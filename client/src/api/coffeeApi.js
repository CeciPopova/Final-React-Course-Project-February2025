import { useContext, useState } from "react";
import request from "../utils/requester"
import { UserContext } from "../contexts/UserContext";
import { useEffect } from "react";

const baseUrl = 'http://localhost:3030/data/coffees';

export const useCoffees = () => {
    const [coffees, setCoffees] = useState([]);

    useEffect(() => {
        request.get(baseUrl)
            .then(setCoffees)
    }, []);

    return {
        coffees,
    }
}

export const useCoffee = (coffeeId) => {
    const [coffee, setCoffee] = useState({});

    useEffect(() => {
        request.get(`${baseUrl}/${coffeeId}`)
            .then(setCoffee);
    }, [coffeeId])

    return {
        coffee,
    }
}

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