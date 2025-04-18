import { useEffect, useReducer } from "react";
import useAuth from "../hooks/useAuth";
import request from "../utils/requester";

//const baseUrl = 'http://localhost:3030/data/comments';
const baseUrl = 'https://softuni-practice-server-f4y1.onrender.com/data/comments';


function commentsReducer(state, action) {

    switch (action.type) {
        case 'ADD_COMMENT':
            return [...state, action.payload]
        case 'GET_ALL':
            return action.payload;
        default:
            return state;
    }
};

export const useComments = (coffeeId) => {
    const { accessToken } = useAuth();
    // const [comments, setComments] = useState([]);
    const [comments, dispatch] = useReducer(commentsReducer, [])

    useEffect(() => {
        const searchParams = new URLSearchParams({
            where: `coffeeId="${coffeeId}"`,
            load: `author=_ownerId:users`,
        });

        const options = {
            headers: {
                'X-Authorization': accessToken,
            }
        }

        request.get(`${baseUrl}?${searchParams.toString()}`, null, options)
            .then(result => dispatch({ type: 'GET_ALL', payload: result }))
    }, [coffeeId, accessToken]); // TODO Fix this

    return {
        comments,
        addComment: (commentData) => dispatch({ type: 'ADD_COMMENT', payload: commentData })
    }
}

export const useCreateComment = () => {
    const { request } = useAuth();

    const create = (coffeeId, comment) => {
        const commentData = {
            coffeeId,
            comment,
        };

        return request.post(baseUrl, commentData);
    }

    return {
        create,
    }
}