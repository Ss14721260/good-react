import React from "react";
function Button(props) {
    const Bgchange = () =>{
        console.log(document.querySelector('body'));
        
    }
    return (
        <button className="border-l-8-red-solid rounded-2xl" onClick={Bgchange}>{props.color}</button>
    );
}
export default Button;