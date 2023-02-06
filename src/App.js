import React, { useState } from 'react';
import List from './components/List';
import ToDoForm from './components/ToDoForm';
import Modal from './components/Modal'
import './ToDoList.css';
import { useDispatch, useSelector } from 'react-redux';
import { showModal } from './reducers/modalSlice';

function App() {

    // console.log(useSelector((state) => {return state.list}))

    const dispatch = useDispatch();
    return (
        <div className='container'>
                <header className='header'>
                    <h1>To do list</h1>
                    <button onClick={() => dispatch(showModal())} className='addButton'>+</button>
                </header>
                <List></List>
                <Modal>
                    <ToDoForm></ToDoForm>
                </Modal>
        </div>
    )
}

export default App;