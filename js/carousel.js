
// Array para armazenar os itens do carrossel
let carouselArr = [];

// Classe Carousel
class Carousel {
    constructor(image,title,url){
        this.image=image;
        this.title=title;
        this.url=url;
    }
    static Start(arr) {
        if (arr && arr.length > 0) {
            Carousel._sequence = 0;
            Carousel._size = arr.length;
            carouselArr.date=arr; //pegar os dados de dentro do metodo estatico
            Carousel.Next(); // Inicializa o carrossel
            Carousel._interval = setInterval(() => { Carousel.Next(); }, 2000); // setar o tempo em que cada imagem aparece
        } else {
            throw "Method Start need a Array Variable.";
        }
    }

    static Next() {
        const carouselContainer = document.getElementById("carousel");
        const titleContainer = document.getElementById("carousel-title");

        if (!carouselContainer || !titleContainer) return;

        // Atualiza a imagem e o título
        let item = carouselArr[Carousel._sequence];
        carouselContainer.innerHTML = "";

        let img = document.createElement("img");
        img.src = item.image;
        img.style.opacity = "1";

        if (item.link !== "#") {
            let link = document.createElement("a");
            link.href = item.link;
            link.appendChild(img);
            carouselContainer.appendChild(link);
        } else {
            carouselContainer.appendChild(img);
        }
        titleContainer.textContent = item.title;
        // Avança para a próxima imagem
        Carousel._sequence = (Carousel._sequence + 1) % Carousel._size;
    }
}


// Inicializa o carrossel ao carregar a página
window.onload = function() {
    Carousel.Start(carouselArr);
};