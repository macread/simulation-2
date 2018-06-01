const initialState = {
    name: 'Default House',
    address: '1 Default Street',
    city: 'Default City',
    st: 'DE',
    zip: '12345',
    imgURL: 'default URL',
    mortgage: 750,
    rent: 1250
}

const ADD_HOUSE = 'ADD_HOUSE';
const ADD_IMG_URL = 'ADD_IMG_URL';
const ADD_MORT_RENT = 'ADD_MORT_RENT';

export default function reducer(state = initialState, action ) {

    switch (action.type){

        case ADD_HOUSE: 
            let {name, address, city, st, zip } = action.payload;
            return Object.assign({}, state, {name: name, address: address, city: city, st: st, zip: zip})

        case ADD_IMG_URL:
            return Object.assign({}, state, {imgURL: action.payload}) 

        case ADD_MORT_RENT:
            let {mortgage, rent} = action.payload;
            return Object.assign({}, state, {mortgage: mortgage, rent: rent})

        default:
            return state;
    }

}

export function addHouse(house){
    return {
        type: ADD_HOUSE,
        payload: house
    }
}

export function addIMG(imgURL){
    return {
        type: ADD_IMG_URL,
        payload: imgURL
    }
}

export function addMortRent(mortRent){
    return {
        type: ADD_MORT_RENT,
        payload: mortRent
    }
}