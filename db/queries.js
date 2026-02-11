const pool = require("./pool");

async function getMTG() {
  const { rows } = await pool.query("SELECT * FROM mtg");
  return rows;
}

async function insertMTG(card_name, cost, rarity, quantity) {
  await pool.query(
    "INSERT INTO mtg (card_name, cost, rarity, quantity) VALUES ($1, $2, $3, $4)",
    [card_name, cost, rarity, quantity],
  );
}

module.exports = {
  getMTG,
  insertMTG,
};
