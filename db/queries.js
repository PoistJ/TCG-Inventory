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

async function getCard(id) {
  const { rows } = await pool.query("SELECT * FROM mtg WHERE card_id = ($1)", [
    id,
  ]);
  return rows[0];
}

module.exports = {
  getMTG,
  insertMTG,
  getCard,
};
