var fetch = require("node-fetch");

async function main() {
  const r = await fetch(
    "https://api.meetup.com/Cleveland-React/events/276483110",
  );

  const x = await r.json();

  console.log(x);
}

main();
