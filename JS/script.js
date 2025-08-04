// Controle do tema claro/escuro com persistência localStorage
const btnTema = document.getElementById('temaToggle'); // Seleciona o botão que troca o tema
const temaSalvo = localStorage.getItem('tema'); // Verifica se há um tema salvo no localStorage

// Verifica se já existe um tema salvo (claro ou escuro)
if (temaSalvo) {
  document.body.classList.add(temaSalvo); // Aplica o tema salvo na página
} else {
  // Se não houver tema salvo, define o tema padrão como "light" (claro)
  document.body.classList.add('light');
}

// Adiciona um ouvinte de eventos para o clique no botão de troca de tema
btnTema.addEventListener('click', () => {
  // Verifica se o tema atual é "light" (claro)
  if (document.body.classList.contains('light')) {
    // Se o tema for claro, troca para o tema "dark" (escuro)
    document.body.classList.replace('light', 'dark');
    localStorage.setItem('tema', 'dark'); // Salva o tema "dark" no localStorage
  } else {
    // Se o tema for "dark", troca para o tema "light" (claro)
    document.body.classList.replace('dark', 'light');
    localStorage.setItem('tema', 'light'); // Salva o tema "light" no localStorage
  }
});

// Dados das músicas (um array com objetos contendo informações sobre as músicas)
const musicas = [
  {
    nome: "Vincent – Don McLean",
    descricao: "Inspirada no pintor Van Gogh",
    imagem: "https://live.staticflickr.com/4140/4830790769_c83db8cfed.jpg",
    link: "https://www.youtube.com/watch?v=oxHnRfhDmrk"
  },
  {
    nome: "Mona Lisa – Nat King Cole",
    descricao: "Referência à obra de Da Vinci",
    imagem: "https://live.staticflickr.com/7158/6814444991_08d82de57e.jpg",
    link: "https://www.youtube.com/watch?v=EG-A_qTAKEI"
  },
  {
    nome: "Salvador Dalí – Mecano",
    descricao: "Homenagem ao pintor surrealista Salvador Dalí",
    imagem: "https://live.staticflickr.com/8421/7698778016_51fc4da530_b.jpg",
    link: "https://www.youtube.com/watch?v=Q6T97kHjKiY"
  },
  {
    nome: "Pablo Picasso – Modern Lovers",
    descricao: "Sobre o artista Pablo Picasso",
    imagem: "https://live.staticflickr.com/65535/50623723006_6736e657d1_b.jpg",
    link: "https://www.youtube.com/watch?v=Kc2iLAubras"
  },
  {
    nome: "Art is Hard – Cursive",
    descricao: "Crítica à indústria da arte e sua comercialização",
    imagem: "https://live.staticflickr.com/323/19809738712_443067ccc2_b.jpg",
    link: "https://www.youtube.com/watch?v=71wFUYUbtjs"
  },
  {
    nome: "Skillet-Monster",
    descricao: "A luta interna de uma pessoa com seus próprios demônios e desejos obscuros, usando a metáfora de um *monstro* que vive dentro dela",
    imagem: "https://i.ytimg.com/vi/MUdIKF4V4m8/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBFOZXsR7CVyggn6vshiKR5zUUe0w",
    link: "https://www.youtube.com/watch?v=MUdIKF4V4m8&list=RDMUdIKF4V4m8&start_radio=1"
  },
  {
    nome: "Persona 5: The Phantom X",
    descricao: "Mostra um novo grupo de Phantom Thieves em ação, com um novo protagonista chamado Wonder e sua Persona inicial, além de apresentar outros personagens como Luffy (a coruja guia) e Mérope (assistente de Igor na Velvet Room)",
    imagem: "https://i.ytimg.com/vi/L_PXUAL4zHQ/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLC_t2eAw7QdmFZIEIFBcwGJWzRC1A",
    link: "https://www.youtube.com/watch?v=L_PXUAL4zHQ"
  }
];

// Seleciona o container onde as músicas serão inseridas na página
const container = document.getElementById("lista-musicas");

// Renderiza as músicas na página
musicas.forEach(musica => {
  // Cria um item de música
  const item = document.createElement("div");
  item.className = "musica-item"; // Define a classe para o item

  // Cria a imagem da música
  const img = document.createElement("img");
  img.src = musica.imagem; // Define o caminho da imagem
  img.alt = `Imagem relacionada a ${musica.nome}`; // Define o texto alternativo da imagem
  img.onclick = () => window.open(musica.link, "_blank"); // Abre o link da música em uma nova aba ao clicar na imagem

  // Cria o container de informações da música
  const info = document.createElement("div");
  info.className = "musica-info"; // Define a classe para o container de informações

  // Cria o título da música
  const titulo = document.createElement("h3");
  titulo.textContent = musica.nome; // Define o texto do título

  // Cria a descrição da música
  const desc = document.createElement("p");
  desc.textContent = musica.descricao; // Define o texto da descrição

  // Cria o botão "Play" para a música
  const btnPlay = document.createElement("button");
  btnPlay.textContent = "Play ▶"; // Texto do botão
  btnPlay.className = "btn play-btn"; // Define a classe do botão
  btnPlay.setAttribute("aria-label", `Tocar música: ${musica.nome}`); // Define o atributo aria-label para acessibilidade
  btnPlay.onclick = (e) => {
    e.stopPropagation(); // Impede que o clique no botão também dispare o clique na imagem
    window.open(musica.link, "_blank"); // Abre o link da música em uma nova aba
  };

  // Adiciona o título, descrição e botão "Play" ao container de informações
  info.appendChild(titulo);
  info.appendChild(desc);
  info.appendChild(btnPlay);

  // Adiciona a imagem e o container de informações ao item de música
  item.appendChild(img);
  item.appendChild(info);

  // Adiciona o item de música ao container principal
  container.appendChild(item);
});
