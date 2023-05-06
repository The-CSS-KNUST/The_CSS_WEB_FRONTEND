import React from "react";
import "../css/Second_section.css";
import "./Activity_card";
import Activity_card from "./Activity_card";

function Second_section(){
    return(
        <div className="s_s">
               <div className="header">
                   <h4>Activities</h4>
                   <button>VIEW ALL</button>
                </div>
                <Activity_card />
               
        </div>
     
    );
}

export default Second_section;