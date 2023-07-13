// I wish you good luck and happy coding 🥰🤠🥳🥳💯💯

import { monsters } from "./monsters.js";

for (let monsterdiv of monsters) {
  showMonster(monsterdiv);
}

function showMonster(monsterdiv) {
  const monsterDiv = document.createElement("div");
  monsterDiv.className = "monster";

  const img = document.createElement("img");
  img.src = `https://robohash.org/${monsterdiv.id}?set=set2`;
  img.alt = monsterdiv.name;

  const mname = document.createElement("p");
  mname.className = "name";
  mname.innerText = monsterdiv.name;

  const email = document.createElement("p");
  email.className = "email";
  email.innerText = monsterdiv.email;

  monsterDiv.append(img, mname, email);

  document.querySelector(".monsters").append(monsterDiv);
}

notfound();
function notfound() {
  const notFoundDiv = document.createElement("div");
  notFoundDiv.className = "p-5 not-found";
  notFoundDiv.style.display = "none";

  const span = document.createElement("span");
  span.innerText = "404";

  const h1 = document.createElement("h1");
  h1.innerText = "🧟‍♂️ No Monster Found 🧟‍♂️";

  notFoundDiv.append(span, h1);

  document.querySelector(".monsters").append(notFoundDiv);
}

// filtering monster in name or email

document.querySelector("#search-monster").addEventListener("keyup", (e) => {
  const keyword = e.target.value.toLowerCase();
  const findMonster = document.querySelectorAll(".monster");

  let notFound = true;

  for (let monster of findMonster) {
    const name = monster.children[1].innerText.toLowerCase();
    const email = monster.children[2].innerText.toLowerCase();

    if (name.includes(keyword) || email.includes(keyword)) {
      monster.style.display = "block";
      notFound = false;
    } else {
      monster.style.display = "none";
    }
  }

  if (notFound) {
    document.querySelector(".not-found").style.display = "block";
  } else {
    document.querySelector(".not-found").style.display = "none";
  }
});
