const musicas = [
  {
    nome: "Vincent – Don McLean",
    descricao: "Inspirada no pintor Van Gogh",
    imagem: "https://upload.wikimedia.org/wikipedia/en/b/bd/Don_McLean_-_Vincent.png",
    link: "https://www.youtube.com/watch?v=oxHnRfhDmrk"
  },
  {
    nome: "Picasso Baby – Jay-Z",
    descricao: "Referência ao artista Pablo Picasso",
    imagem: "https://upload.wikimedia.org/wikipedia/en/8/84/Jay-Z_Picasso_Baby.jpg",
    link: "https://www.youtube.com/watch?v=xMG2oNqBy-Y"
  },
  {
    nome: "Mona Lisa – Nat King Cole",
    descricao: "Referência à obra de Da Vinci",
    imagem: "https://upload.wikimedia.org/wikipedia/en/3/36/Nat_King_Cole_-_Mona_Lisa.jpg",
    link: "https://www.youtube.com/watch?v=EG-A_qTAKEI"
  },
  {
    nome: "Andy Warhol – David Bowie",
    descricao: "Sobre o artista pop Andy Warhol",
    imagem: "https://upload.wikimedia.org/wikipedia/en/b/b3/David_Bowie_-_Andy_Warhol.jpg",
    link: "https://www.youtube.com/watch?v=Fi0gX4V4Zy4"
  },
  {
    nome: "Art Deco – Lana Del Rey",
    descricao: "Referência ao movimento artístico",
    imagem: "https://upload.wikimedia.org/wikipedia/en/e/e0/Lana_Del_Rey_-_Honeymoon_%28Official_Album_Cover%29.png",
    link: "https://www.youtube.com/watch?v=rFqpjkN_U6c"
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
