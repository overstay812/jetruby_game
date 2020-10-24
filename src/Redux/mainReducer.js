

const initialState = {
    tileArr: [
        { color: 'purple', id: 0, isActive: false, finished: false },
        { color: 'blue', id: 1, isActive: false, finished: false },
        { color: 'green', id: 2, isActive: false, finished: false },
        { color: 'brown', id: 3, isActive: false, finished: false },
        { color: 'red', id: 4, isActive: false, finished: false },
        { color: 'yellow', id: 5, isActive: false, finished: false },
        { color: 'gray', id: 6, isActive: false, finished: false },
        { color: 'pink', id: 7, isActive: false, finished: false },
        { color: 'green', id: 8, isActive: false, finished: false },
        { color: 'blue', id: 9, isActive: false, finished: false },
        { color: 'purple', id: 10, isActive: false, finished: false },
        { color: 'yellow', id: 11, isActive: false, finished: false },
        { color: 'gray', id: 12, isActive: false, finished: false },
        { color: 'pink', id: 13, isActive: false, finished: false },
        { color: 'brown', id: 14, isActive: false, finished: false },
        { color: 'red', id: 15, isActive: false, finished: false }
    ],
    firstTileColor: '',
    secondTileColor: '',

    firstTileIndex: null,
    secondTileIndex: null,

    roundCounter: 0
}

export const mainReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'GET_FIRS_TILE_COLOR':
            return {
                ...state, firstTileColor: action.payload.color,
            }
        case 'GET_SECOND_TILE_COLOR':
            return {
                ...state, secondTileColor: action.payload.color,

            }
        case 'GET_FIRS_TILE_INDEX':
            return {
                ...state, firstTileIndex: action.payload.index,
            }
        case 'GET_SECOND_TILE_INDEX':
            return {
                ...state, secondTileIndex: action.payload.index,

            }
        case 'GET_IS_ACTIVE_FIRST_TILE':

            let booleanFirstTile = action.payload.boolean
            return {
                ...state, tileArr: state.tileArr.map((item, index) => {
                    if (index === state.firstTileIndex) {
                        return { ...item, isActive: booleanFirstTile }
                    } else {
                        return item
                    }
                })
            }
        case 'GET_IS_ACTIVE_SECOND_TILE':

            let booleanSecondTile = action.payload.boolean
            return {
                ...state, tileArr: state.tileArr.map((item, index) => {
                    if (index === state.secondTileIndex) {
                        return { ...item, isActive: booleanSecondTile }
                    } else {
                        return item
                    }
                })
            }
        case 'GET_FINISHED_FIRST_TILE':
            return {
                ...state, tileArr: state.tileArr.map((item, index) => {
                    if (index === state.firstTileIndex) {
                        return { ...item, finished: true }
                    } else {
                        return item
                    }
                })
            }
        case 'GET_FINISHED_SECOND_TILE':
            return {
                ...state, tileArr: state.tileArr.map((item, index) => {
                    if (index === state.secondTileIndex) {
                        return { ...item, finished: true }
                    } else {
                        return item
                    }
                })
            }
        case 'START_ROUND_COUNTER':
            return {
                ...state, roundCounter: state.roundCounter + 1
            }
        default: return state
    }


}
