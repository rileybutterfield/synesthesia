/**
 * ACTION TYPES
 */
 const GET_NEW_COLOR = 'GET_NEW_COLOR'

 /**
  * INITIAL STATE
  */
 const initialState = {currentColor: ''}

 /**
  * ACTION CREATORS
  */
 export const getNewColor = color => ({
   type: GET_NEW_COLOR,
   color
 })

 /**
  * REDUCER
  */
 export default function(state = initialState, action) {
   switch (action.type) {
     case GET_NEW_COLOR:
       return {...state, currentColor: action.color}
     default:
       return state
   }
 }
