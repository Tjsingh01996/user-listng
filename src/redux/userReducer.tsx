import { reducerAction } from "../constants/constant"


const { DELETE_USER ,ADD_USER } = reducerAction


 export type userInitType =  {
     users: any[],
     reset:boolean,
     loading:boolean,

}
export const deleteUser = (id:number) => ({
    type: DELETE_USER,
    payload: id
})

export const addUser = (data:any) => ({
    type: ADD_USER,
    payload: data
})

export let initialState: userInitType =  {
    users: [],
    reset: true,
    loading:false
}

type ActionType =  {
    type: string,
    payload:any 
}

export const userReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case DELETE_USER:
            console.log(action.payload)
            return { ...state, users: state.users.filter((data:any)=>  data.id != action.payload )  }

        case ADD_USER:
            return { ...state, users: action.payload }

        case reducerAction.RESET_ACTION:
            return { ...state, reset: action.payload } 

        case reducerAction.RESET_ACTION:
            return { ...state, loadi: action.payload }   
        
        case reducerAction.LOADING:
            return { ...state, loading: action.payload }   
       
        default:
            return state
    }
}


