const initialState = {
    name: '',
    address: '',
    city: '',
    st: '',
    zip: '',
    imgURL: '',
    mortgage: 0,
    rent: 0
}

const ADD_HOUSE = 'ADD_HOUSE';
const ADD_IMG_URL = 'ADD_IMG_URL';
const ADD_MORT_RENT = 'ADD_MORT_RENT';
const CANCEL = 'CANCEL';

export default function reducer(state = initialState, action ) {

    switch (action.type){

        case ADD_HOUSE: 
            return Object.assign({}, state, 
                {name: action.payload.name, 
                address: action.payload.address, 
                city: action.payload.city, 
                st: action.payload.st, 
                zip: action.payload.zip})

        case ADD_IMG_URL:
            return Object.assign({}, state, {imgURL: action.payload}) 

        case ADD_MORT_RENT:
            let {mortgage, rent} = action.payload;
            return Object.assign({}, state, {mortgage: mortgage, rent: rent})

        case CANCEL:
            return Object.assign({}, state, 
                {name: action.payload.name, 
                address: action.payload.address, 
                city: action.payload.city, 
                st: action.payload.st, 
                zip: action.payload.zip, 
                imgURL: action.payload.imgURL, 
                mortgage: action.payload.mortgage, 
                rent: action.payload.rent})

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

export function cancel(){
    return{
        type: CANCEL,
        payload: initialState
    }
}