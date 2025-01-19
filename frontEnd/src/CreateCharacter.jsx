import React, { useState } from "react";
import axios from "axios"; // Import axios to send HTTP requests

function CreateCharacter() {
  const [preStats, setPreStats] = useState(10);
  const [str, setStr] = useState(0);
  const [agi, setAgi] = useState(0);
  const [int, setInt] = useState(0);
  const [name, setName] = useState(""); 
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [role, setRole] = useState(""); 
  const [roleError, setRoleError] = useState(""); // State to track role selection error
  const [statError, setStatError] = useState(""); // State to track stat allocation error

  const increaseStat = (stat, setStat) => {
    if (preStats > 0) {  // Ensure stats are only increased if preStats > 0
      setStat(stat + 1);
      setPreStats(preStats - 1);
    }
  };

  const decreaseStat = (stat, setStat) => {
    if (stat > 0) {  // Ensure stats are only decreased if the stat is greater than 0
      setStat(stat - 1);
      setPreStats(preStats + 1);
    }
  };

  const handleCreateCharacter = async () => {
    // Check if the user has selected a role
    if (!role) {
      setRoleError("Please select a character role.");
      return;
    } else {
      setRoleError(""); // Clear role error
    }

    // Ensure all free stats have been allocated
    if (preStats > 0) {
      setStatError("Please allocate all your stats before submitting.");
      return;
    } else {
      setStatError(""); // Clear stat error
    }

    try {
      const response = await axios.post("http://localhost:3001/api/register", {
        name,
        email,
        password,
        role, 
        stats: {
          strength: str,
          agility: agi,
          intelligence: int,
        },
      });

      console.log(response.data);
      alert("Character has been successfully created!");
      
      // Reset form state after successful submission
      setName("");
      setEmail("");
      setPassword("");
      setRole("");
      setStr(0);
      setAgi(0);
      setInt(0);
      setPreStats(10);
      setRoleError("");
      setStatError("");
    } catch (error) {
      console.error("Error creating character:", error);
    }
  };

  return (
    <div className="container">
      <h1 className="title">Create Character</h1>

      <div className="radio-group">
        <input 
          type="radio" 
          id="Mage" 
          name="characters" 
          value="Mage" 
          checked={role === "Mage"} 
          onChange={(e) => setRole(e.target.value)}
        />
        <label htmlFor="Mage">Mage</label>

        <input 
          type="radio" 
          id="Assassin" 
          name="characters" 
          value="Assassin" 
          checked={role === "Assassin"} 
          onChange={(e) => setRole(e.target.value)}
        />
        <label htmlFor="Assassin">Assassin</label>

        <input 
          type="radio" 
          id="Fighter" 
          name="characters" 
          value="Fighter" 
          checked={role === "Fighter"} 
          onChange={(e) => setRole(e.target.value)}
        />
        <label htmlFor="Fighter">Fighter</label>

        <input 
          type="radio" 
          id="Support" 
          name="characters" 
          value="Support" 
          checked={role === "Support"} 
          onChange={(e) => setRole(e.target.value)}
        />
        <label htmlFor="Support">Support</label>
      </div>
      <p style={{ color: "red" }} className="error">{roleError}</p>

      <h3 className="Reminder">Choose the role that aligns with your playstyle.</h3>

      <div className="form-container">
        <label>Username</label>
        <input
          type="text"
          placeholder="Enter Username (In-Game Name)"
          required
          value={name}
          onChange={(e) => setName(e.target.value)} 
        />
        <label>Email</label>
        <input
        type="email"
        placeholder="Enter Email Address"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)} 
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Enter Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
        />

        {/* Stats Section */}
        <div className="stats-container">
          <h1>FREE STATS: {preStats}</h1>

          <div className="Strength">
            <h1>STR</h1>
            <div className="stat-buttons">
              <button className="stat-button" onClick={() => decreaseStat(str, setStr)}>-</button>
              <span>{str}</span>
              <button className="stat-button" onClick={() => increaseStat(str, setStr)}>+</button>
            </div>
          </div>

          <div className="Agility">
            <h1>AGI</h1>
            <div className="stat-buttons">
              <button className="stat-button" onClick={() => decreaseStat(agi, setAgi)}>-</button>
              <span>{agi}</span>
              <button className="stat-button" onClick={() => increaseStat(agi, setAgi)}>+</button>
            </div>
          </div>

          <div className="intelligence">
            <h1>INT</h1>
            <div className="stat-buttons">
              <button className="stat-button" onClick={() => decreaseStat(int, setInt)}>-</button>
              <span>{int}</span>
              <button className="stat-button" onClick={() => increaseStat(int, setInt)}>+</button>
            </div>
          </div>

         <p style={{ color: "red" }} className="error">{statError}</p>
          <h3 className="Reminder">Select the stats that best suit your chosen role.</h3>
        </div>

        {/* Confirm Character Button */}
        <button 
          type="button" 
          onClick={handleCreateCharacter}
        >
          CONFIRM CHARACTER
        </button>
      </div>
    </div>
  );
}

export default CreateCharacter;
