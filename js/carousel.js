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
            Carousel._interval = setInterval(() => { Carousel.Next(); }, 2000);  // Troca automática a cada 2s
        } else {
            throw "Method Start needs an array variable."; // pode trocar essas mensagens?
        }
    }

    static Next() {   
        // let item = carouselArr[Carousel];  
        let item = carouselArr[Carousel._sequence]; // uso o indice pra saber qual o slide vem a seguir
        
        // Pegando os elementos HTML do carrossel
        let imagem = document.getElementById("carousel-image");
        let titulo = document.getElementById("carousel-title");
        

        if (item) { //aqui eu vou att os elementos da pagina
            imagem.src = item.image;
            
            titulo.innerText = item.title;
            titulo.innerHTML=`<a href="${item.url}"> ${item.title} </a>`; 
        }

        
        Carousel._sequence = (Carousel._sequence + 1) % Carousel._size; // Atualiza o índice para o próximo slide (loop circular)
    }
}