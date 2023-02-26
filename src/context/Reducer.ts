export const INITIAL_STATE = {
    imageArray: [],
    filteredImageArray: []
}

export const ACTIONS = {
    SET_IMAGES: 'SET_IMAGES',
    SET_SELECTET_IMAGES: 'SET_SELECTET_IMAGES',
    FILTER_SELECTED_IMAGES: 'FILTER_SELECTED_IMAGES'
}

export default (state: any, action: any) => {
    const { type, payload } = action
    switch (type) {
        case ACTIONS.SET_IMAGES:
            return {
                ...state,
                imageArray: [...payload]
            }

        case ACTIONS.SET_SELECTET_IMAGES:
            return {
                ...state,
                filteredImageArray: [...state.filteredImageArray, payload]
            }

        case ACTIONS.FILTER_SELECTED_IMAGES:
            return {
                ...state,
                filteredImageArray: [...state.filteredImageArray.filter((item: any) => item.index !== payload.index)]
            }

        default:
            return state
    }
}