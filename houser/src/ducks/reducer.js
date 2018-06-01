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

export default function reducer(state = initialState, action ) {

    console.log(action.type,action.payload)
    switch (action.type){

        case ADD_HOUSE: 
            let {name, address, city, st, zip } = action.payload;
            return Object.assign({}, state, {name: name, address: address, city: city, st: st, zip: zip})

        default:
            return state;
    }

}

export function addHouse(house){
    console.log("hit")
    return {
        type: ADD_HOUSE,
        payload: house
    }
}