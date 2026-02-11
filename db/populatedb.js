const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS mtg (
    card_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    card_name VARCHAR (255),
    cost INT,
    rarity VARCHAR (255), 
    quantity INT
);

INSERT INTO mtg (card_name, cost, rarity, quantity) 
VALUES
  ('Black Lotus', 16000, 'mythic', 1),
  ('Tarmogoyf', 18, 'rare', 3),
  ('Jace the Mind Sculptor', 20, 'mythic', 6);
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: "postgresql://poistj:@localhost:5432/tcg_inv",
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
