import { ADD_FAV, FILTER, FILTER2, ORDER, REMOVE_FAV } from './actions-types'

export const addFav = (character) => {
    return {
        type: ADD_FAV,
        payload: character
    }
}

export const removeFav = (id) => {
    return {
        type: REMOVE_FAV,
        payload: id
    }
}

export const filterCards = (gender) => {
    return {
        type: FILTER,
        payload: gender
    }
}

export const filterCards2 = (species) => {
    return {
        type: FILTER2,
        payload: species
    }
}

export const orderCards = (order)=> {
    return {
        type: ORDER,
        payload: order
    }
}

