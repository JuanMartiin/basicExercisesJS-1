let jokes = document.getElementById("jokes");


async function login(url, data) {
  const response = await fetch(url, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
  });
  return response.json();
}

for(let i = 0; i<10; i++){
  let p = document.createElement('p');
  let p2 = document.createElement('p');
  p.className = "pregunta";
  p2.className = "respuesta";
  fetch('https://official-joke-api.appspot.com/random_joke')
    .then(response => response.json())
    .then(data => {
        p.innerHTML = data.setup;
        p2.innerHTML = data.punchline;
        jokes.appendChild(p);
        jokes.appendChild(p2);
    })
};
