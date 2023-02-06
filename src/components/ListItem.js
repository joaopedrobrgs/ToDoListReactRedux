import React from "react";
import Card from "./Card";
import {useDispatch} from 'react-redux'
import { deleteItem, changeDone } from "../reducers/listSlice";

function ListItem(props) {

    const dispatch = useDispatch();

    return (
        <li key={props.item.id}>
            <Card className={props.item.done ? "done item" : "item"}>
                {props.item.text}
                <div>
                    <button onClick={() => dispatch(changeDone(props.item.id))}>
                        <i className={props.item.done ? "bi bi-bookmark-check-fill" : "bi bi-bookmark-check"}></i>
                    </button>
                    <button onClick={() => dispatch(deleteItem(props.item.id))}><i className="bi bi-trash"></i></button>
                </div>
            </Card>
        </li>
    )
    
}


export default ListItem;