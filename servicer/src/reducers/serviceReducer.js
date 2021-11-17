export const getAllServiceReducer = (state = {services:[]}, action)=>{
    switch(action.type){
        case 'GET_SERVICES_REQUEST':
            return{
                ...state,
                loading:true,
            };
        case 'GET_SERVICES_SUCCESS':
            return{
                services : action.payload,
                loading:false
            };
        case 'GET_SERVICES_FAIL':
            return{
                error: action.payload,
                loading:false
            };
        default: 
            return state
    }
};