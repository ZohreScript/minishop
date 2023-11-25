import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faClose}  from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from "react";
import { json } from "react-router-dom";
const Welcome = () => {
    const[showWelcome,setShowwelcome]=useState();
    useEffect(()=>{
      const data =localStorage.getItem("show_app_intro");
    setShowwelcome(JSON.parse(data) ?? true);
    },[]
    )
    const onHideWelcome=()=>{
        setShowwelcome(false);
        localStorage.setItem("show_app_intro", JSON.stringify(false))
    }
    return ( 
        <React.Fragment>
        {showWelcome && ( <div className="container">
        <div className="bg-primary text-white my-3">
            <FontAwesomeIcon icon={faClose}
             style={{float:"right",margin:"5px"}}
             onClick={onHideWelcome}/>
            <div className="p-4">welcome</div>
        </div>
    </div>)}
     </React.Fragment>
     );
}
 
export default Welcome;