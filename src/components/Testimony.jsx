import React from "react";


function Testimony({name,country,history,phrase,divOrder,darkText='',img}) {
    return (
        <div className={`${divOrder} eachdiv`}>
            <div className="userdetails">
                <div className="imgbox">
                    <img src={img} alt="" />
                </div>
                <div className="detbox">
                    <p className="name darkText">{name}</p>
                    <p className="designation darkText">{country}</p>
                </div>
            </div>
            <div className={`review ${darkText}`}>
                <h4>{phrase}</h4>
                <p>{history}</p>
            </div>
        </div>
    );
}

export default Testimony;