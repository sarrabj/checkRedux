import {ADD,DELETE,CHECK,EDIT} from './typeAction'

export const Add =(payload)=>{
    return{
        type:ADD,
        payload:payload
    }
}
export const Delete =(id)=>{
    return{
type:DELETE,
payload:id
    }
}
export const Check =(id)=>{
    return{
type:CHECK,
payload:id
    }
}
export const Edit =(id,texte)=>{
    return{
type:EDIT,
payload:{id,texte}
    }
}