const displayToys = (toy) => {
  console.log(toy)
  const charBox = document.querySelector("#collection");
  const charCard = document.createElement("div")
  const charName = document.createElement("h2");
  const charImg = document.createElement("img");
  const delButton = document.createElement("button");

  charName.innerText = toy.name;
  charImg.src = toy.image;
  delButton.innerText = "Delete";

  charImg.className = "avatar";
  delButton.className = "btn";
  charCard.className = "card";

  charCard.append(charName,charImg,delButton);
  charBox.append(charCard);
}

const getToys = async () => {
  const res = await fetch('http://localhost:3000/toys');
  const data = await res.json();
  data.forEach(toy => displayToys(toy));
}

const postToy = async (e) => {
  e.preventDefault();
  console.log(e);
  const toyName = e.target[0].value;
  const toyURL = e.target[1].value;
  console.log(toyName,toyURL);

  const options = {
    method: 'POST',
    headers: {
      Accept: 'application.json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id: 4, 
      name: toyName,
      image: toyURL,
      likes: 4
    }),
  }

  const res = await fetch('http://localhost:3000/toys',options);

  console.log(res);
}

const main = () => {
  getToys();
  const toyForm = document.querySelector(".add-form");
  toyForm.addEventListener('submit', postToy);
}

main()