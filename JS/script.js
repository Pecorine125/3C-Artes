const musicas = [
    "🎨 Vincent – Don McLean (inspirada no pintor Van Gogh)",
    "🖼️ Picasso Baby – Jay-Z (referência direta ao artista Pablo Picasso)",
    "🎭 Mona Lisa – Nat King Cole (referência à obra de Da Vinci)",
    "🎶 Andy Warhol – David Bowie (sobre o artista pop Andy Warhol)",
    "🖌️ Art Deco – Lana Del Rey (referência ao movimento artístico)"
];

const lista = document.getElementById("lista-musicas");

musicas.forEach(musica => {
    const item = document.createElement("li");
    item.textContent = musica;
    lista.appendChild(item);
});
