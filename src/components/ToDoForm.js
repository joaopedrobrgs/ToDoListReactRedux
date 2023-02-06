import React, { useState }  from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../reducers/listSlice";
import { hideModal } from "../reducers/modalSlice";

function ToDoForm(props) {

    const [text, setText] = useState("");

    function handleChange(event) {
        let inputValue = event.target.value;
        setText(inputValue)
    }

    const dispatch = useDispatch();

    function onAddItem(event) {
        event.preventDefault();
        if (text) {
            dispatch(addItem(text));
            setText("");
            dispatch(hideModal())
        }
    }

    return (
        <form>
            <input onInput={handleChange} type='text' value={text}></input>
            <button onClick={onAddItem}>Add</button>
        </form>
    )
    
}

export default ToDoForm;