import React, { useState } from "react";
import './App.css';
function CreateCharacter() {
    const [bgColor, setBgColor] = useState("#f4f4f9");

    const handleRadioChange = (event) => {
        const value = event.target.value;
        switch (value) {
            case "Mage":
                setBgColor("#b3d9ff"); 
                break;
            case "Assassin":
                setBgColor("#c7c8ca"); 
                break;
            case "Fighter":
                setBgColor("#ff2400"); 
                break;
            case "Support":
                setBgColor("#c1e899"); 
                break;
            default:
                setBgColor("#f4f4f9");
        }
    };

    return (
        <div className="container" style={{ backgroundColor: bgColor }}>
            <h1>Create Character</h1>
            <div className="radio-group">
                <input
                    type="radio"
                    id="Mage"
                    name="characters"
                    value="Mage"
                    onChange={handleRadioChange}
                />
                <label htmlFor="Mage">Mage</label>
                <input
                    type="radio"
                    id="Assassin"
                    name="characters"
                    value="Assassin"
                    onChange={handleRadioChange}
                />
                <label htmlFor="Assassin">Assassin</label>
                <input
                    type="radio"
                    id="Fighter"
                    name="characters"
                    value="Fighter"
                    onChange={handleRadioChange}
                />
                <label htmlFor="Fighter">Fighter</label>
                <input
                    type="radio"
                    id="Support"
                    name="characters"
                    value="Support"
                    onChange={handleRadioChange}
                />
                <label htmlFor="Support">Support</label>
            </div>

            <label>Username</label>
            <input
                type="text"
                placeholder="Enter Username (In-Game Name)"
                required
            />
            <label>Email</label>
            <input
                type="text"
                placeholder="Enter Email Address"
                required
            />
            <label>Password</label>
            <input
                type="text"
                placeholder="Enter Password"
                required
            />

            <button>CONFIRM CREATION</button>
        </div>
    );
}

export default CreateCharacter;
