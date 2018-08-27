import { DELETE_EVENT,CLEAR_COMPLETED,CHANGE_ISCOMPLETED,LOAD_POST,ADD_TO_EVENT } from "../constants/actionType";
const inistialState=[
    
]
const todos=(state=inistialState,action)=>{
    switch(action.type){
        case ADD_TO_EVENT:
        console.log(action)
        return [...state,action.data]
        case CHANGE_ISCOMPLETED:console.log(action); return state.map( todo => todo.id === action.id? { ...todo, isCompleted: action.isCompleted }: todo)
         
        case DELETE_EVENT:return state.filter(todo=>todo.id !==action.id)
        case CLEAR_COMPLETED:return state.filter(todo=>todo.isCompleted===false)
        case LOAD_POST: 
        return action.posts
        default :return state
    }
}
export default todos