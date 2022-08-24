import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = (props) => {
    const { rgb, weight } = props.color;
    return (
        <>
            <article className="color" style={{ background: `rgb(${rgb})` }}>
                <p className="percent-value">{`${weight}%`}</p>
                <p className="color-value">{`${rgb}`}</p>
            </article>
        </>
    );
};

export default SingleColor;
