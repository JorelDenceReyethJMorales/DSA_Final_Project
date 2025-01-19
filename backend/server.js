const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bcrypt = require('bcrypt');

const app = express();
const PORT = 3001;


app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Denreldie10102004', 
  database: 'mydatabase'
});

db.connect(err => {
  if (err) throw err;
  console.log('Connected to MySQL database');
});

app.post('/api/register', async (req, res) => {
  const { name, email, password, role, stats } = req.body;

  if (!name || !email || !password || !role) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const sql = `
      INSERT INTO users (name, email, password, role, strength, agility, intelligence)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    const { strength, agility, intelligence } = stats;

    db.query(sql, [name, email, hashedPassword, role, strength, agility, intelligence], (err, result) => {
      if (err) {
        console.error('Error inserting data:', err);
        return res.status(500).json({ message: 'Database error' });
      }
      res.status(201).json({ message: 'User registered successfully' });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error during registration' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
