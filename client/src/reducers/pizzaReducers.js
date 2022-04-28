/* eslint-disable no-duplicate-case */
export const getAllPizzasReducer=(state={} , action)=>{

    switch(action.type)
    {
        case 'GET_PIZZAS_REQUEST' : return{
            ...state
        }
        case 'GET_PIZZAS_REQUEST' : return{
            pizzas : action.payload
        }
        case 'GET_PIZZAS_REQUEST' : return{
            error : action.payload
        }
        default : return state
    } 
}
    