import React, { useReducer } from "react"
import ImageContext from './index'
import ImageReducer, { INITIAL_STATE, ACTIONS } from './Reducer'

const ImageProvider = ({ children }: any) => {

    const [state, dispatch] = useReducer(ImageReducer, INITIAL_STATE)

    const setImages = (images: any) => {
        dispatch({
            type: ACTIONS.SET_IMAGES,
            payload: images
        })
    }

    const setChoosenImages = (image: any) => {
        dispatch({
            type: ACTIONS.SET_SELECTET_IMAGES,
            payload: image
        })
    }

    const removeChoosenImage = (removeImage: any) => {
        dispatch({
            type: ACTIONS.FILTER_SELECTED_IMAGES,
            payload: removeImage
        })
    }

    return (
        <ImageContext.Provider
            value={{
                ...state,
                setImages,
                setChoosenImages,
                removeChoosenImage
            }}
        >
            {children}
        </ImageContext.Provider>
    )
}

export default ImageProvider