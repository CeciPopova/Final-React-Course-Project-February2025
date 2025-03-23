async function request(method, url, data, options = {}) {

    if (method !== 'GET') {
        options.method = method;
    }

    if (data) {
        options = {
            ...options,
            headers: {
                ...options.headers,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }
    }

    const response = await fetch(url, options);
    const responseContentType = response.headers.get('Content-Type');
    if (!responseContentType) {
        return;
    }

    const result = await response.json();

    return result;
}

export default {
    get: request.bind(null, 'GET'),
    post: request.bind(null, 'POST'),
    put: request.bind(null, 'PUT'),
    del: request.bind(null, 'DELETE'),
    baseRequest: request,
}


// export const get = (url, data) => requester('GET', url, data);
// export const post = (url, data) => requester('POST', url, data);
// export const put = (url, data) => requester('PUT', url, data);
// export const del = (url, data) => requester('DELETE', url, data);