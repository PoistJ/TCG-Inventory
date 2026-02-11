const pool = require("./pool");

async function getInventory() {
  const { rows } = await pool.query("SELECT * FROM mtg");
  return rows;
}

async function insertCard(card_name, cost, rarity, quantity) {
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

async function updateCard(card_name, cost, rarity, quantity, card_id) {
  await pool.query(
    "UPDATE mtg SET card_name = $1, cost = $2, rarity = $3, quantity = $4 WHERE card_id = $5",
    [card_name, cost, rarity, quantity, card_id],
  );
}

async function deleteCard(card_id) {
  await pool.query("DELETE FROM mtg WHERE card_id = $1", [card_id]);
}

module.exports = {
  getInventory,
  insertCard,
  getCard,
  updateCard,
  deleteCard,
};
