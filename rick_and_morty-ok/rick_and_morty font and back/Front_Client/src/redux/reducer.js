import { ADD_FAV, FILTER, FILTER2, ORDER, REMOVE_FAV } from "./actions-types";

const initialState = {
    myFavorites: [],
    allCharacter: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAV:
            return {...state, 
                myFavorites: [...state.allCharacter, action.payload],
                allCharacter: [...state.allCharacter, action.payload]
             };

        case FILTER:
            let copyFilter = state.allCharacter.filter( character => character.gender === action.payload );

            if (action.payload === "")  return {...state, myFavorites: state.allCharacter};
            else 
            return { ...state, myFavorites: copyFilter};

            case FILTER2:
                let copyFilter2 = state.allCharacter.filter( character => character.species === action.payload );
    
                if (action.payload === "")  return {...state, myFavorites: state.allCharacter};
                else 
                return { ...state, myFavorites: copyFilter2};

            
        case ORDER:
            let orderCharacter = [...state.allCharacter];

            orderCharacter.sort((a, b) => {
                if (action.payload === "A") {
                    if (a.id < b.id) return -1;
                    if (b.id < a.id) return 1;
                    return 0;
                } else {
                    if (a.id < b.id) return 1;
                    if (b.id < a.id) return -1;
                    return 0;
                }
            });

            console.log("caso order", orderCharacter);
            return {...state, myFavorites: [...orderCharacter]};

        case REMOVE_FAV:
            // let deleteCharacter = state.myFavorites.filter(
            //     character => character.id !== Number(action.payload)
            // );
            // return { ...state, myFavorites: deleteCharacter};
            const restFavorites = state.myFavorites.filter(fav =>fav.id !== action.payload)
            return {
                ...state,
                myFavorites: restFavorites,
                allCharacter: restFavorites
            }

        default:
            return state;
    }
};

export default reducer;
