const initialState = {
    name: 'Default House',
    address: '1 Default Street',
    city: 'Default City',
    state: 'DE',
    zip: '12345',
    imgURL: 'default URL',
    mortgage: 750,
    rent: 1250
}

// const  = '';

export default function reducer(state = initialState, action ) {

    switch (action.type){

        // case : 
        //     return Object.assign({}, state, {: })

        default:
        return state;
    }

}

// export function (){
//     return {
//         type: ,
//         payload: 
//     }
// }