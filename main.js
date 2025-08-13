let form = document.getElementById("form");
let search = document.getElementById("searchInput");
let select = document.getElementById("select");
let parent = document.getElementById("parent");

renderPokemons(pokemons);


function renderPokemons(data) {
  parent.innerHTML = '';

  data.forEach((item, index) => {
    let div = document.createElement('div');
    div.classList.add('pokemon-card');
    div.innerHTML = `
      <div class="raqam">
                  <div class="son">${item.num}</div>
                </div>
                <h1>${item.name}</h1>
                <div class="rasm">
                    <img src=${item.img} alt="">
                </div>
                <div class="poison">${item.type[0]}</div>
                <h2>Candy count: ${item.candy_count}</h2>
                <h2>${item.weight} kg</h2>
                <h2 class="fire"></h2>
                <div class="soat">${item.spawn_time}</div>
    `;
    parent.appendChild(div);
  });
};


select.addEventListener('change', function () {
  const selected = this.options[this.selectedIndex].text;

  let sortedPokemons = [...pokemons];

  if (selected === 'A-Z') {
    sortedPokemons.sort((a, b) => a.name.localeCompare(b.name));
  } else if (selected === 'Z-A') {
    sortedPokemons.sort((a, b) => b.name.localeCompare(a.name));
  }

  renderPokemons(sortedPokemons);
});

form.addEventListener('submit', function (e) {
  e.preventDefault();

  let query = search.value.trim().toLowerCase();
  let sortType = select.options[select.selectedIndex].text;

  let filtered = pokemons.filter(pokemon =>
    pokemon.name.toLowerCase().includes(query)
  );

  if (sortType === 'A-Z') {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortType === 'Z-A') {
    filtered.sort((a, b) => b.name.localeCompare(a.name));
  }

  renderPokemons(filtered);
});