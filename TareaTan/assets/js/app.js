//En su mayoría no comprendí mucho de qué debía ejecutar el código

const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;

//Al nombrar las ID, me marcó los nombres de Scott Tolinski y https://tolin.ski/ Denver, CO

const $n = document.querySelector('#name'); 
const $b = document.querySelector('#blog');
const $l = document.querySelector('#location');

//Mandé a llamar varias funciones para tratar de ver cuál me funcionaba, de acuerdo a la documentación, para estos casos de traer información asincrona, funciona con async y await.

async function displayUser(username) {
  // Aquí tuve problemas porque no sé en dónde debía marcar el cargando
  $n.textContent= 'cargando...';
  try {
    const response = await fetch(`${usersEndpoint}/${username}`);
  // Descargué el npm para tener a json
    const data = await response.json();
    console.log(data);
  // al momento de querer llamar a otros datos, me marcaba error en las demás
    $n.textContent = `${data.name}`;
    $b.textContent = `${data.blog}`;
    $l.textContent = `${data.location}`;

  } catch (err) {
    handleError(err);
  }
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`;
}

displayUser('stolinski');
