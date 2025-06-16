// Lista de URLs de imagens
const imgArray = [
    "https://s1.static.brasilescola.uol.com.br/be/2024/08/arte-moderna.jpg",
    "https://s3.static.brasilescola.uol.com.br/be/2024/08/mona-lisa.jpg",
    "https://static.todamateria.com.br/upload/ab/st/abstracionismo-0-cke.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAhQ31GKG_QtT47WtBWbtUCZG3NCt2Bk6Epw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCHoeWzkjC8C6AlzI441iKYeaLHJYmLWYR3A&s",
    "https://cdn.prod.website-files.com/60ff690cd7b0537edb99a29a/61f4494b36535cfd07b98bd7_Conceito-de-arte.webp",
    "https://www.colegiodosjesuitas.com.br/wp-content/uploads/2021/08/Artigo_Site_Dia-das-Artes.jpg",
    "https://static.significados.com.br/foto/tipos-de-arte-og.jpg",
    "https://static.todamateria.com.br/upload/ti/po/tipos-de-arte-og.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/6/6d/Art_rupestre_Chimiachas.jpg",
    "https://live.staticflickr.com/42/121113763_7041560733_b.jpg",
    "https://live.staticflickr.com/5559/14666392888_5358a55527_b.jpg",
    "https://live.staticflickr.com/3876/14872845933_0d6152c9b2_b.jpg",
];

let currentIndex = 0;

// Função que altera a imagem
function changeImage() {
    currentIndex = (currentIndex + 1) % imgArray.length; // Muda para a próxima imagem
    document.getElementById("image").src = imgArray[currentIndex]; // Altera o src da imagem
}

// Adiciona o evento de click ao body ou imagem
document.body.addEventListener("click", changeImage);
