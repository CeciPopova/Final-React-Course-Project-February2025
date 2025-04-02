import { useState } from "react";
import request from "../utils/requester"
import { useEffect } from "react";
import useAuth from "../hooks/useAuth";

//const baseUrl = 'http://localhost:3030/data/coffees';
const baseUrl = 'https://softuni-practice-server-f4y1.onrender.com/data/coffees';


export const useCoffees = (page = 1, pageSize = 3) => {
    const [coffees, setCoffees] = useState([]);

    useEffect(() => {
        const offset = (page - 1) * pageSize;
        const url = `${baseUrl}?offset=${offset}&pageSize=${pageSize}`;

        request.get(url)
            .then(data => {
                setCoffees(data);
            })
            .catch((error) => {
                console.error('Error fetching coffees:', error);
            });
    }, [page, pageSize]);

    return {
        coffees,

    };
};


// export const useCoffees = () => {
//     const [coffees, setCoffees] = useState([]);
//     //console.log("API URL:", import.meta.env.VITE_API_URL);

//     useEffect(() => {
//         request.get(baseUrl)
//             .then(data => {
//                 setCoffees(data);
//             });
//     }, []);


//     return {
//         coffees,
//     }
// }


export const useCoffee = (coffeeId) => {
    const [coffee, setCoffee] = useState({});

    useEffect(() => {
        if (!coffeeId) return; // Prevent running if coffeeId is missing

        request.get(`${baseUrl}/${coffeeId}`)
            .then(setCoffee)
            .catch((err) => console.error("❌ Error fetching coffee:", err));
    }, [coffeeId]);


    return {
        coffee,
        setCoffee
    }
}


export const useCreateCoffee = () => {

    const { request } = useAuth();

    const create = (coffeeData) => {
        return request.post(baseUrl, coffeeData);
    }

    return {
        create,
    }
}

export const useEditCoffee = () => {
    const { request } = useAuth();

    const edit = (coffeeId, coffeeData) =>
        request.put(`${baseUrl}/${coffeeId}`, { ...coffeeData, _id: coffeeId });

    return {
        edit,
    }
}

export const useDeleteCoffee = () => {
    const { request } = useAuth();

    const deleteCoffee = (coffeeId) =>
        request.del(`${baseUrl}/${coffeeId}`);

    return {
        deleteCoffee,
    }

}

export const useLatestCoffees = () => {
    const [latestCoffees, setLatestCoffees] = useState([]);


    useEffect(() => {

        const searchParams = new URLSearchParams({
            sortBy: '_createdOn desc',
            pageSize: 2,
        })

        request.get(`${baseUrl}?${searchParams.toString()}`)
            .then(setLatestCoffees)
    }, [])

    return {
        latestCoffees
    }
}
