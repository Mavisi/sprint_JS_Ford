
//car
let carArr = [];

class Car {
   
    constructor(nome, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, image){
       this.nome=nome;
       this.preco=preco;
       this.alturaCacamba=alturaCacamba;
       this.alturaVeiculo=alturaVeiculo;
       this.alturaSolo=alturaSolo
       this.capacidadeCarga=capacidadeCarga;
       this.motor=motor;
       this.potencia=potencia;
       this.volumeCacamba=volumeCacamba;
       this.roda=roda;
       this.image=image;
    }
} 

// search on array if exist carClass returning 1 if not return -1
function GetCarArrPosition(arr, carClass) {
    for(let i = 0; i < arr.length; i++){ // aqui ele vai percorrer o array de carros
        if(arr[i].nome  === carClass.nome)// aqui ele vai comparar o nome do carro que eu quero adicionar com o nome do carro que já está no array
            return i; // aqui ele vai retornar a posição do carro que eu quero adicionar 
    }
    return -1;// se ele não encontrar o carro no array ele vai retornar -1
}

function SetCarToCompare(el, carClass) {
    if (!(carClass instanceof Car)) {
        throw "You need to set a Car class."; 
    }

    if (el.checked) { // o meu usuario marcou o botão 
        if (carArr.length >= 2) {
            alert("Você só podera comparar dois carros por vez.");
            el.checked = false;
            return;

        }
        carArr.push(carClass);
    } else { // se meu usuario desmarcou o botão
        const posicao = GetCarArrPosition(carArr, carClass);// aqui ele vai procurar o nome do carro dentro do array
        if (posicao >= 0) { // se ele achar o nome do carro com a função anterior vai retornar um numero 0 ou maior
            carArr.splice(posicao, 1); // vamos pegar a posição desse elemento dentro do array e excluir a quantidade que queremos
                                    // neste caso, apenas 1

        }


    }
}

function ShowCompare() { // Mostra a tabela de comparação

    if (carArr.length < 2) {
        alert("Precisa marcar 2 carros para iniciar a comparação.");
        return;
    }

    UpdateCompareTable();
    document.getElementById("compare").style.display = "block";
}

function HideCompare() { // Oculta a tabela de comparação

    document.getElementById("compare").style.display = "none";
}

function UpdateCompareTable() { // Atualiza a tabela com os dados dos dois carros selecionados

    for (let i = 0; i < 2; i++) { // aqui ele vai percorrer o array de carros e vai preencher a tabela com os dados
       
        const car = carArr[i]; // aqui ele vai pegar o carro na posição i do array
        document.getElementById(`compare_image_${i}`).innerHTML = `<img src="${car.image}" >`;
       
        document.getElementById(`compare_modelo_${i}`).innerText = car.nome;
       
        document.getElementById(`compare_alturacacamba_${i}`).innerText = car.alturaCacamba + " mm";
       
        document.getElementById(`compare_alturaveiculo_${i}`).innerText = car.alturaVeiculo + " mm";
        
        document.getElementById(`compare_alturasolo_${i}`).innerText = car.alturaSolo + " mm";
       
        document.getElementById(`compare_capacidadecarga_${i}`).innerText = car.capacidadeCarga + " Kg";
       
        document.getElementById(`compare_motor_${i}`).innerText = car.motor + " litros";
       
        document.getElementById(`compare_potencia_${i}`).innerText = car.potencia + " cv";
       
        document.getElementById(`compare_volumecacamba_${i}`).innerText = car.volumeCacamba + " L";
        
        document.getElementById(`compare_roda_${i}`).innerText = car.roda;
        
        document.getElementById(`compare_preco_${i}`).innerText = "R$ " + car.preco.toLocaleString('pt-BR');
 
    }
}