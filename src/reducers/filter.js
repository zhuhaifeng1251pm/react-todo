const inistialState ='all'

const filter=(state=inistialState,action)=>{
    switch(action.type){
        case 'SHOW_ALL': state=action.str
        return state
        default:return state
    }
}
export default filter