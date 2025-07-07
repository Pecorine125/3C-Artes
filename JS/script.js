// Controle do tema claro/escuro com persistência localStorage
const btnTema = document.getElementById('temaToggle');
const temaSalvo = localStorage.getItem('tema');

if (temaSalvo) {
  document.body.classList.add(temaSalvo);
} else {
  // Tema padrão: claro
  document.body.classList.add('light');
}

btnTema.addEventListener('click', () => {
  if (document.body.classList.contains('light')) {
    document.body.classList.replace('light', 'dark');
    localStorage.setItem('tema', 'dark');
  } else {
    document.body.classList.replace('dark', 'light');
    localStorage.setItem('tema', 'light');
  }
});

// Dados das músicas
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
  }
];

const container = document.getElementById("lista-musicas");

// Renderiza as músicas na página
musicas.forEach(musica => {
  const item = document.createElement("div");
  item.className = "musica-item";

  const img = document.createElement("img");
  img.src = musica.imagem;
  img.alt = `Imagem relacionada a ${musica.nome}`;
  img.onclick = () => window.open(musica.link, "_blank");

  const info = document.createElement("div");
  info.className = "musica-info";

  const titulo = document.createElement("h3");
  titulo.textContent = musica.nome;

  const desc = document.createElement("p");
  desc.textContent = musica.descricao;

  const btnPlay = document.createElement("button");
  btnPlay.textContent = "Play ▶";
  btnPlay.className = "btn play-btn";
  btnPlay.setAttribute("aria-label", `Tocar música: ${musica.nome}`);
  btnPlay.onclick = (e) => {
    e.stopPropagation();
    window.open(musica.link, "_blank");
  };

  info.appendChild(titulo);
  info.appendChild(desc);
  info.appendChild(btnPlay);

  item.appendChild(img);
  item.appendChild(info);

  container.appendChild(item);
});