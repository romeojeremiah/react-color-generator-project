import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
    const [color, setColor] = useState("");
    const [allColors, setAllColors] = useState([]);
    const [isError, setIsError] = useState(false);

    const handleColors = (e) => {
        setColor(e.target.value);
    };

    const getColors = (e) => {
        e.preventDefault();

        try {
            const inputColor = new Values(color);
            setAllColors(inputColor.all(10));

            setColor("");
        } catch (error) {
            if (error) {
                setIsError(true);
                setColor("");
            }
        }
    };

    return (
        <>
            {" "}
            <section className="container">
                <h3>color generator project</h3>
                <form onSubmit={getColors}>
                    <label htmlFor="color">Color: </label>
                    <input
                        id="color"
                        className={isError ? "error" : undefined}
                        type="text"
                        placeholder="#333"
                        value={color}
                        onChange={handleColors}
                    ></input>
                    <button className="btn" type="submit">
                        submit
                    </button>
                </form>
            </section>
            <section className="colors">
                {allColors.map((color, index) => {
                    return <SingleColor color={color} key={index} />;
                })}
            </section>
        </>
    );
}

export default App;
