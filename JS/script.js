const musicas = [
    {
        nome: "🎨 Vincent – Don McLean",
        descricao: "(inspirada no pintor Van Gogh)",
        link: "https://www.youtube.com/watch?v=oxHnRfhDmrk"
    },
    {
        nome: "🖼️ Picasso Baby – Jay-Z",
        descricao: "(referência ao artista Pablo Picasso)",
        link: "https://www.youtube.com/watch?v=xMG2oNqBy-Y"
    },
    {
        nome: "🎭 Mona Lisa – Nat King Cole",
        descricao: "(referência à obra de Da Vinci)",
        link: "https://www.youtube.com/watch?v=EG-A_qTAKEI"
    },
    {
        nome: "🎶 Andy Warhol – David Bowie",
        descricao: "(sobre o artista pop Andy Warhol)",
        link: "https://www.youtube.com/watch?v=Fi0gX4V4Zy4"
    },
    {
        nome: "🖌️ Art Deco – Lana Del Rey",
        descricao: "(referência ao movimento artístico)",
        link: "https://www.youtube.com/watch?v=rFqpjkN_U6c"
    }
];

const lista = document.getElementById("lista-musicas");

musicas.forEach(musica => {
    const item = document.createElement("li");
    item.innerHTML = `${musica.nome} <br><small>${musica.descricao}</small><br>`;
    
    const botao = document.createElement("button");
    botao.textContent = "▶️ Ouvir";
    botao.onclick = () => window.open(musica.link, '_blank');
    
    item.appendChild(botao);
    lista.appendChild(item);
});
