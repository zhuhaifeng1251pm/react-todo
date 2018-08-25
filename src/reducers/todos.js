const inistialState=[
    {
     id:'123',
     todoText:'123123',
     isCompleted:false   
    },
    {
        id:'456',
        todoText:'qweqweqweq',
        isCompleted:true
    },
    {
        id:'789',
        todoText:'qweqwe12312qweq',
        isCompleted:false
    }
]
const todos=(state=inistialState,action)=>{
    switch(action.type){
        case 'ADD_TO_EVENT':return [...state,{id:action.id,todoText:action.todoText,isCompleted:false}]
        case 'CHANGE_ISCOMPLETED':console.log(action.id); return state.map( todo => todo.id === action.id? { ...todo, isCompleted: !todo.isCompleted }: todo)
         
        case 'DELETE_EVENT':return state.filter(todo=>todo.id !==action.id)
        case 'CLEAR_COMPLETED':return state.filter(todo=>todo.isCompleted===false)
        default :return state
    }
}
export default todos