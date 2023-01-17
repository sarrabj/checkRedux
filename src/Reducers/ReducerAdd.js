import { v4 as uuidv4 } from 'uuid';
import {ADD,CHECK,DELETE,EDIT} from "../Actions/typeAction"
const initialState=
  {
    TodoList:
    [
    {id: uuidv4(),
    texte:"Go To study",
    isDone:false
    },
    {id:uuidv4(),
    texte:"Do HomeWork",
    isDone:false
    },

  ]}

const ReducerAdd = (state=initialState,action) => {
 switch (action.type){
  case ADD : 
  return {
    ...state,
    TodoList:[...state.TodoList,action.payload]

  }
  case DELETE :
        return{
          ...state,
          TodoList:[...state.TodoList.filter(el=>el.id !== action.payload)  ]
        }
        case CHECK :
          return{
            ...state,
            TodoList: [...state.TodoList.map(el=>el.id ===action.payload?{...el,isDone:!el.isDone}:el
              )]}
            case EDIT :
              return{
                ...state,
                TodoList: [...state.TodoList.map((el)=>el.id === action.payload.id?{...el,texte:action.payload.texte}:el)]} 
                

  default:
    return state

 }


}

export default ReducerAdd