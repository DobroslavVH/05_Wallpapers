export const INITIAL_STATE = {
    imageArray: [],
    filteredImageArray: []
    // filteredImageArray: [
    //     { index: '0', item: "../assets/wheel.png" },
    //     { index: 1, item: '../assets/wheel.png' },
    //     { index: 2, item: '../assets/wheel.png' },
    //     { index: 3, item: '../assets/wheel.png' },
    //     { index: 4, item: '../assets/wheel.png' },
    //     { index: 5, item: '../assets/wheel.png' }
    // ]
}
//console.log('INITIAL_STATE', INITIAL_STATE)

export const ACTIONS = {
    SET_IMAGES: 'SET_IMAGES',
    SET_SELECTET_IMAGES: 'SET_SELECTET_IMAGES',
    FILTER_SELECTED_IMAGES: 'FILTER_SELECTED_IMAGES'
}

export default (state: any, action: any) => {

    const { type, payload } = action
    //console.log('payload', payload)
    //console.log('type', type)
    switch (type) {
        case ACTIONS.SET_IMAGES:
            return {
                ...state,
                //imageArray: [...state.imageArray, payload]
                imageArray: [...payload]
            }

        case ACTIONS.SET_SELECTET_IMAGES:
            return {
                ...state,
                filteredImageArray: [...state.filteredImageArray, payload]
            }

        case ACTIONS.FILTER_SELECTED_IMAGES:
            //console.log(payload)
            return {
                ...state,
                filteredImageArray: [...state.filteredImageArray.filter((item: any) => item.index !== payload.index)]
            }

        default:
            return state
    }
}