import React, { useState } from "react";

function CreateCharacter() {
     const [preStats, setPreStats] = useState(10);
        const [str, setStr] = useState(0);
        const [agi, setAgi] = useState(0);
        const [int, setInt] = useState(0);
    
        const increaseStat = (stat, setStat) => {
            if(preStats !== 0){
                setStat(stat + 1);
                setPreStats(preStats - 1)
            }
            
        };
    
        const decreaseStat = (stat, setStat) => {
            if (stat > 0) {
                setStat(stat - 1);
                setPreStats(preStats + 1)
            }
        };

    return (
        <div className="container" >
            <h1 className="title">Create Character</h1>
            <div className="radio-group">
                <input
                    type="radio"
                    id="Mage"
                    name="characters"
                    value="Mage"
                    
                />
                <label htmlFor="Mage">Mage</label>
                
                <input
                    type="radio"
                    id="Assassin"
                    name="characters"
                    value="Assassin"
                   
                />
                <label htmlFor="Assassin">Assassin</label>
                
                <input
                    type="radio"
                    id="Fighter"
                    name="characters"
                    value="Fighter"
                    
                />
                <label htmlFor="Fighter">Fighter</label>
                
                <input
                    type="radio"
                    id="Support"
                    name="characters"
                    value="Support"
                   
                />
                <label htmlFor="Support">Support</label>
            </div>
            <h3 className='Reminder'>Choose the role that aligns with your playstyle.</h3>

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
            <div className="stats-container">
            <h1>FREE STATS : {preStats}</h1>
            <div className='Strength'>
                <h1>STR</h1>
                <div className="stat-buttons">
                    <button className="stat-button" onClick={() => decreaseStat(str, setStr)}>-</button>
                    <span>{str}</span>
                    <button className="stat-button" onClick={() => increaseStat(str, setStr)}>+</button>
                </div>
            </div>

            <div className='Agility'>
                <h1>AGI</h1>
                <div className="stat-buttons">
                    <button className="stat-button" onClick={() => decreaseStat(agi, setAgi)}>-</button>
                    <span>{agi}</span>
                    <button className="stat-button" onClick={() => increaseStat(agi, setAgi)}>+</button>
                </div>
            </div>

            <div className='intelligence'>
                <h1>INT</h1>
                <div className="stat-buttons">
                    <button className="stat-button" onClick={() => decreaseStat(int, setInt)}>-</button>
                    <span>{int}</span>
                    <button className="stat-button" onClick={() => increaseStat(int, setInt)}>+</button>
                </div>
            </div>

            <h3 className='Reminder'>Select the stats that best suit your chosen role.</h3>
        </div>

            <button>CONFIRM CHARACTER</button>
        </div>
    );
}

export default CreateCharacter;
