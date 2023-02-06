import React from "react";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { hideModal } from "../reducers/modalSlice";

function Modal(props){

    const modal = useSelector((state)=> {return state.modal})
    const dispatch = useDispatch();

    function onHideModal(event) {
        if (event.target.id == "modal") {
            dispatch(hideModal())
        }
    }

    return(
        <div id='modal' onClick={onHideModal} className={modal ? 'modal' : 'modal hide'}>
            <Card padding='20px' backgroundColor='white'>
                {props.children}
            </Card>
        </div>
    )
    
}

export default Modal;

