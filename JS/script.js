const musicas = [
  {
    nome: "Vincent – Don McLean",
    descricao: "Inspirada no pintor Van Gogh",
    imagem: "https://upload.wikimedia.org/wikipedia/en/b/bd/Don_McLean_-_Vincent.png",
    link: "https://www.youtube.com/watch?v=4wrNFDxCRzU" // FUNCIONANDO
  },
  {
    nome: "Mona Lisa – Nat King Cole",
    descricao: "Referência à obra de Da Vinci",
    imagem: "https://upload.wikimedia.org/wikipedia/en/3/36/Nat_King_Cole_-_Mona_Lisa.jpg",
    link: "https://www.youtube.com/watch?v=EG-A_qTAKEI" // FUNCIONANDO
  },
  {
    nome: "Salvador Dalí – Mecano",
    descricao: "Homenagem ao pintor surrealista Salvador Dalí",
    imagem: "https://upload.wikimedia.org/wikipedia/en/f/fb/Mecano_-_Entre_el_cielo_y_el_suelo.png",
    link: "https://www.youtube.com/watch?v=Q6T97kHjKiY" // FUNCIONANDO
  },
  {
    nome: "Pablo Picasso – Modern Lovers",
    descricao: "Sobre o artista Pablo Picasso",
    imagem: "https://upload.wikimedia.org/wikipedia/en/8/81/The_Modern_Lovers_album_cover.jpg",
    link: "https://www.youtube.com/watch?v=Kc2iLAubras" // FUNCIONANDO
  },
  {
    nome: "Art is Hard – Cursive",
    descricao: "Crítica à indústria da arte e sua comercialização",
    imagem: "https://upload.wikimedia.org/wikipedia/en/4/49/Cursive_-_The_Ugly_Organ.jpg",
    link: "https://www.youtube.com/watch?v=wix_6ZGpiU0" // FUNCIONANDO
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
