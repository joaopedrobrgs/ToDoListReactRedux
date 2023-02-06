import React from "react";

// function Card (props){
//     return(
//         <div className={props.className ? `${props.className} card` : 'card'}>
//             {props.children}
//         </div>
//     )
// }

function Card(props) {
    return (
        <div
            className={props.className ? `${props.className} card` : 'card'}
            style={{
                padding: props.padding, 
                backgroundColor: props.backgroundColor, 
                color: props.color, 
                fontSize: props.fontSize,
                fontFamily: props.fontFamily,
                textDecoration: props.textDecoration
            }}
        >
            {props.children}
        </div >
    )
}

export default Card;