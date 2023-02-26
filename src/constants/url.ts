const MAIN_URL = 'https://www.reddit.com/r/'
const FOOTER = '.json?limit=50'
const END = ' '

const categories = {
    WALLPAPER: 'Wallpapers',
}

const wallpapersUrl = MAIN_URL + categories.WALLPAPER + FOOTER + END

export {
    MAIN_URL,
    FOOTER,
    END,
    categories,
    wallpapersUrl
}
