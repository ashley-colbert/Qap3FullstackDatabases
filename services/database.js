const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'HappyRestaurant',
  password: 'Tanner2087',
  port: 5434,
});

async function connectToDatabase() {
  try {
    await pool.connect();
    console.log('Connected to PostgreSQL database!');
  } catch (err) {
    console.error('Error connecting to the database:', err);
  }
}

connectToDatabase();

module.exports = pool;