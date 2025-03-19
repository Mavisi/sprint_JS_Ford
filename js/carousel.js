// Array para armazenar os itens do carrossel
let carouselArr = [];

// Classe Carousel
class Carousel {
    static Start(arr) {
        if (arr && arr.length > 0) {
            Carousel._sequence = 0;
            Carousel._size = arr.length;
            Carousel.Next(); // Inicializa o carrossel
            Carousel._interval = setInterval(() => { Carousel.Next(); }, 2000);
        } else {
            throw "O método Start precisa de um array válido.";
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

// Adiciona os itens ao carrossel
carouselArr.push({ image: "img/imagem_1.jpg", title: "Esta é a nova Ranger Ford 2022. Verifique novidades.", link: "lancamento.html" });
carouselArr.push({ image: "img/imagem_2.jpg", title: "Ford a nossa história", link: "#" });
carouselArr.push({ image: "img/imagem_3.jpg", title: "Nova Ford Bronco Sport 2022", link: "lancamento.html" });

// Inicializa o carrossel ao carregar a página
window.onload = function() {
    Carousel.Start(carouselArr);
};