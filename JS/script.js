const musicas = [
  {
    nome: "Vincent – Don McLean",
    descricao: "Inspirada no pintor Van Gogh",
    imagem: "https://live.staticflickr.com/4140/4830790769_c83db8cfed.jpg",
    link: "https://www.youtube.com/watch?v=4wrNFDxCRzU" // FUNCIONANDO
  },
  {
    nome: "Mona Lisa – Nat King Cole",
    descricao: "Referência à obra de Da Vinci",
    imagem: "https://live.staticflickr.com/7158/6814444991_08d82de57e.jpg",
    link: "https://www.youtube.com/watch?v=EG-A_qTAKEI" // FUNCIONANDO
  },
  {
    nome: "Salvador Dalí – Mecano",
    descricao: "Homenagem ao pintor surrealista Salvador Dalí",
    imagem: "https://live.staticflickr.com/8421/7698778016_51fc4da530_b.jpg",
    link: "https://www.youtube.com/watch?v=Q6T97kHjKiY" // FUNCIONANDO
  },
  {
    nome: "Pablo Picasso – Modern Lovers",
    descricao: "Sobre o artista Pablo Picasso",
    imagem: "https://live.staticflickr.com/65535/50623723006_6736e657d1_b.jpg",
    link: "https://www.youtube.com/watch?v=Kc2iLAubras" // FUNCIONANDO
  },
  {
    nome: "Art is Hard – Cursive",
    descricao: "Crítica à indústria da arte e sua comercialização",
    imagem: "https://live.staticflickr.com/323/19809738712_443067ccc2_b.jpg",
    link: "https://www.youtube.com/watch?v=71wFUYUbtjs" // FUNCIONANDO
  }
];

const container = document.getElementById("lista-musicas");

musicas.forEach(musica => {
  const item = document.createElement("div");
  item.className = "musica-item";

  const img = document.createElement("img");
  img.src = musica.imagem;
  img.alt = musica.nome;
  img.onclick = () => window.open(musica.link, "_blank");

  const info = document.createElement("div");
  info.className = "musica-info";

  const titulo = document.createElement("h3");
  titulo.textContent = musica.nome;

  const desc = document.createElement("p");
  desc.textContent = musica.descricao;

  info.appendChild(titulo);
  info.appendChild(desc);
  item.appendChild(img);
  item.appendChild(info);
  container.appendChild(item);
});
