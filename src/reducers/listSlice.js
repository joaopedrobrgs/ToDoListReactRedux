import { createSlice } from "@reduxjs/toolkit"
import Item from "../components/Item";

// const initialState = {
//     value: [],
// }

export const listSlice = createSlice({
    name: 'list',
    initialState: [],
    reducers: {
        addItem: {
            reducer: (state, action) => {
                return [...state, JSON.parse(action.payload)]
            },
            prepare: (text) => {
                const item = new Item(text);
                return {
                    payload: JSON.stringify(item)
                }
            }
        },
        deleteItem: {
            reducer: (state, action) => {
                return state.filter((item) => {
                    return item.id != action.payload
                })
            },
            // prepare: (id) => {
            //     return {
            //         payload: id
            //     }
            // }
        },
        changeDone: {
            reducer: (state, action) => {
                //Nesse caso, não iremos utilizar o "return", pois estava dando o
            //seguinte erro: "Error: [Immer] An immer producer returned a new value 
            //and modified its draft. Either return a new value *or* modify the draft."
                //Aqui nossa intenção não é retornar um novo valor, e sim modificar
            //um valor existente, então não utilizaremos "return" no escopo maior da
            //função.
                state.map((item) => {
                    if (item.id == action.payload) {
                        item.done = !item.done
                    }
                    return item
                })
            },
            // prepare: (id) => {
            //     return {
            //         payload: id,
            //     }
            // }
        }
    }
})

    //Nesse nosso exemplo, não iremos precisar utilizar o "prepare" nem na ação
//"deleteItem" e nem não "changeDone", tendo em vista que em ambas o valor
//do payload será simplemente o que for passado entre parênteses quando a
//ação for executada. 
    ////Exemplo: " <button onClick={() => dispatch(changeDone(props.item.id))}> "

    //Se precisassemos fazer alguma modificação no valor que
//for passado entre parênteses, teriamos que utilizar o "prepare", assim
//como fizemos na ação "addItem".
    ////EXEMPLO:

    ////dispatch(addItem(text));

    //// prepare: (text) => {
    ////     const item = new Item(text);
    ////     return {
    ////         payload: JSON.stringify(item)
    ////     }
    //// }


export const { addItem, deleteItem, changeDone } = listSlice.actions;

export default listSlice.reducer;