import {createContext, useState} from 'react';
const CardContext = createContext({
  isSame: -1,
  clickFlag: 0,
  idx: 0,
  check: () => {},
  doneCheck: () => {},
  animalCount: 0,
});
// const CardProvider = ({card})=>{
//     const[isSame, cardFlag] = useState('')
// }
export default CardContext;
