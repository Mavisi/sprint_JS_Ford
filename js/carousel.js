// Array que armazena os slides do carrossel
let carouselArr = [];

// Classe do carrossel
class Carousel {
    constructor(image, title, url) {
        this.image = image;
        this.title = title;
        this.url = url;
    }

    static Start(arr) {
        if (arr && arr.length > 0) {
            Carousel._sequence = 0;
            Carousel._size = arr.length;
            Carousel.Next(); // Inicializa a exibição do primeiro slide
            Carousel._interval = setInterval(() => { Carousel.Next(); }, 2000); // Troca automática a cada 2s
        } else {
            throw "Method Start needs an array variable.";
        }
    }

    static Next() {
        let item = carouselArr[Carousel._sequence];
        
        // Pegando os elementos HTML do carrossel
        let imgElement = document.getElementById("carousel-image");
        let titleElement = document.getElementById("carousel-title");
        

        if (item) {
            imgElement.src = item.image;
            imgElement.backgroundSize='cover';
            titleElement.innerText = item.title;
            titleElement.innerHTML=`<a href="${item.url}"> ${item.title} </a>`;
        }

        // Atualiza o índice para o próximo slide (loop circular)
        Carousel._sequence = (Carousel._sequence + 1) % Carousel._size;

    }
}