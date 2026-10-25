require('dotenv').config();
const { postgres } = require('@postgres/sql'); // or whatever postgres client your project uses

console.log("Attempting to connect with URL:", process.env.POSTGRES_URL);

// If you are using Vercel Postgres / Neon (@vercel/postgres or postgres package):
const { sql } = require('@vercel/postgres'); // adjust based on your project imports

async function test() {
  try {
    const result = await sql`SELECT NOW();`;
    console.log("Connection successful!", result);
  } catch (err) {
    console.error("Connection failed explicitly:", err);
  }
}
test();