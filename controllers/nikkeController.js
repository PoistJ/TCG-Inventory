const db = require("../db/nikkequeries");

const links = [
  {
    href: "/",
    text: "Home",
  },
  {
    href: "/nikke/new",
    text: "Add Card",
  },
];

const tcg = "nikke";

const dbHeaders = ["Card", "Cost", "Rarity", "Quantity"];

async function fetchCard() {
  const url = "";
}

exports.getNikke = async (req, res) => {
  const collection = await db.getInventory();
  res.render("inventory", {
    title: "Nikke: Union Arena Inventory",
    links: links,
    collection: collection,
    headers: dbHeaders,
    tcg: tcg,
  });
};

exports.createNikkeGet = async (req, res) => {
  res.render("addCardForm", {
    title: "Add Card",
    links: [{ href: "/nikke", text: "Back" }],
    rarity: ["C", "UC", "R", "SR"],
  });
};

exports.createNikkePost = async (req, res) => {
  db.insertCard(
    req.body.card_name,
    req.body.card_cost,
    req.body.card_rarity,
    req.body.card_quantity,
  );
  res.redirect("/nikke");
};

exports.cardGet = async (req, res) => {
  const card = await db.getCard(req.params.id);
  res.render("card", {
    card: card,
    links: [{ href: "/nikke", text: "Back" }],
    tcg,
  });
};

exports.updateGet = async (req, res) => {
  const card = await db.getCard(req.params.id);
  res.render("update", {
    card: card,
    links: [{ href: `/nikke/${req.params.id}`, text: "Back" }],
    tcg: tcg,
  });
};

exports.updatePost = async (req, res) => {
  db.updateCard(
    req.body.card_name,
    req.body.card_cost,
    req.body.card_rarity,
    req.body.card_quantity,
    req.body.card_id,
  );
  res.redirect("/nikke");
};

exports.deletePost = async (req, res) => {
  db.deleteCard(req.params.id);
  res.redirect("/nikke");
};
