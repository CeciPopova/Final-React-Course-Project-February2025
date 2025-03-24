import { useState } from "react";
import request from "../utils/requester"
import { useEffect } from "react";
import useAuth from "../hooks/useAuth";

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

    const {request} = useAuth();

    const create = (coffeeData) => {
        return request.post(baseUrl, coffeeData);
    }

    return {
        create,
    }
}

export const useEditCoffee = () => {
    const {request} = useAuth();

    const edit = (coffeeId, coffeeData) => 
        request.put(`${baseUrl}/${coffeeId}`, { ...coffeeData, _id: coffeeId });
    
    return {
        edit,
    }
}

export const useDeleteCoffee = () => {
    const {request} = useAuth();

    const deleteCoffee = (coffeeId) =>
         request.del(`${baseUrl}/${coffeeId}`);

    return {
        deleteCoffee,
    }

}

