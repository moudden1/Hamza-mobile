/*const initialState = { favoritesSales: [] }

const toggleFavorite = (state = initialState, action) => {
    let nextState;
    switch(action.type) {
// one action to delete and to insert
        case 'TOGGLE_FAVORITE':
            const favoriteSaleIndex = state.favoritesSales.findIndex(item => item.id === action.value.id)
           // i forget what mr mehdi told me about {}
            // if i found the sale, i delete it from the favorite sales
           if(favoriteSaleIndex !== -1){
                nextState = {
                    ...state,
                    favoritesSales: state.favoritesSales.filter((item, index) => index !== favoriteSaleIndex)
                }
            }
            // if i don't, i insert the sale on favorite sales
            else{
                nextState = {
                    ...state,
                    favoritesSales: [...state.favoritesSales, action.value]
                }
            }
                        return nextState || state;
    
        default:
                    return state
    }
}

export default toggleFavorite*/