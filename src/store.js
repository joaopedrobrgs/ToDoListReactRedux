import { configureStore } from '@reduxjs/toolkit'
import listReducer from './reducers/listSlice';
import modalReducer from './reducers/modalSlice';
import {saveState, loadState} from './storage/storageFunctions'

const store = configureStore({
    reducer: {
        list: listReducer,
        modal: modalReducer,
    },
    preloadedState: {
        list: loadState().list,
    }
});

// store.subscribe(()=>{console.log(store.getState())})
store.subscribe(()=>{saveState(store.getState())})

export default store;

    //o atributo "preloadedState" é utilizado para atribuirmos um valor aos estados quando
//a tela for carregada.
    //No nosso caso, nós temos uma função para salvar o valor de ambos os estados, "list" e 
//"modal", que é a função "saveState()": 
                // function saveState(state){
                //     localStorage.setItem('savedState', JSON.stringify(state));
                // }
    //E uma função para carregar desses estados que estão salvos no localStorage, que é a
//"loadState()":
                // function loadState(){
                //     const actualState = localStorage.getItem('savedState');
                //     if(actualState){
                //         return JSON.parse(actualState)
                //     }
                // }
    //Ela nos retornar um objeto com os valores salvos em cada estado:
                // {
                //     list: Array(4)
                //         0: {id: 0.7737548527089186, text: '123', done: true}
                //         1: {id: 0.841619132167184, text: 'add', done: false}
                //         2: {id: 0.34513093581037024, text: '123', done: true}
                //         3: {id: 0.6257199562013738, text: '123', done: false}
                //     modal: false
                // }
    //Como, nesse caso nós quremos apenas os valores que estão salvos na lista, e não o do
//modal, faremos assim:
                // preloadedState: {
                //     list: loadState().list,
                // }
    //Se quisessemos dos dois, fariamos assim:
                // preloadedState: loadState()