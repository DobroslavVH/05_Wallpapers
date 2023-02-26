import {
    wallpapersUrl
} from "./url";


const request = async (url: string) => {
    const response = await fetch(url)
        .then((response) => response.json())
        .catch((error) => console.log(error))
    return response
}

const getWallpapers = async () => {
    const result = await request(wallpapersUrl)
    return result
}

export {
    request,
    getWallpapers
}