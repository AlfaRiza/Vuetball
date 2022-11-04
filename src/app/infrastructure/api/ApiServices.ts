import axios from 'axios'

export function ApiServices() {
    const getFetch = async (url, params) => {
        return await axios.get(
            `https://cors-hijacker.vercel.app/api?url=${encodeURIComponent(
                `${import.meta.env.VITE_APP_BASE_URL}/${url}`
            )}`,
            {
                headers: {
                "X-Auth-Token": import.meta.env.VITE_APP_TOKEN,
                },
                params: params
            }
        );
    }
    return {
        getFetch
    }
}