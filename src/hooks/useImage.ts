import { getWallpapers } from "../constants/api"

const useImage = async () => {

    let imagesUrl: any = []

    const response = await getWallpapers()
        .then((res) => {

            let arrLength = res.data.children.length

            for (let index = 0; index < arrLength; index++) {

                let tempImage = res.data.children[index].data.url_overridden_by_dest

                let endOfString = tempImage?.substring(tempImage.length - 4, tempImage.length)

                if (tempImage !== undefined && (endOfString === '.jpg' || endOfString === '.png')) {
                    imagesUrl.push(tempImage)
                }
            }
        })
    return imagesUrl
}

export default useImage