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
       let colorWord = action.color.toUpperCase()
       let library = {0: true, 1: true, 2: true, 3: true, 4: true, 5: true, 6: true, 7: true, 8: true, 9: true, "A": true, "B": true, "C": true, "D": true, "E": true, "F": true}
       while(colorWord.length % 3 !== 0  || colorWord.length < 6){
          colorWord += "0"
       }
       let first = colorWord.slice(0, colorWord.length/3).slice(0, 2)
       let second = colorWord.slice(colorWord.length / 3, (colorWord.length / 3) * 2).slice(0, 2)
       let third = colorWord.slice((colorWord.length / 3) * 2).slice(0, 2)
       let newColor = first + second + third
       let finalColor = "#"
       for(let i = 0; i < newColor.length; i++){
         let current = newColor[i]
         if(!library[current]){
          finalColor += 0
         } else {
           finalColor += current
         }
       }
       return {...state, currentColor: finalColor}
     default:
       return state
   }
 }
