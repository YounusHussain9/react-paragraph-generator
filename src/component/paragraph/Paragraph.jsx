import React from "react";
import { useState } from "react";
import './pera.css'


const Paragraph = ({ pera }) => {
    return (
    <div>
        {pera.map((d,id)=>{
        return (
            <p className="pera"><span className="count">{id+1})</span>{d}</p>
            )
        })}
    </div>
  );
};

export default Paragraph;
