
//class contato

class contato {
    
    constructor(nome,sobrenome,email,cpf,telefone, contato ){
        this.nome=nome;
        this.sobrenome=sobrenome;
        this.email=email;
        this.cpf=cpf;
        this.telefone=telefone;
        this.contato=contato;
    }
}

function Post(form) {

  let data = new contato(form.elements.namedItem("nome").value,
            form.elements.namedItem("sobrenome").value, 
            form.elements.namedItem("email").value, 
            form.elements.namedItem("cpf").value, 
            form.elements.namedItem("telefone").value, 
            form.elements.namedItem("contato").value);
  
    localStorage.setItem("formulario", JSON.stringify(data)); // salva no navegador/descobrir onde


    let mostrar=JSON.parse(localStorage.getItem("formulario"));
    console.log(mostrar);

    Enviar(data.nome); // chama a função que mostra o alert

    form.reset(); // limpar o meu formulário
}

function Enviar(nome) {
    var nome =  document.getElementById("name");

    if (nome) {
        alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso');
        console.log();
        event.preventDefault(); // obrigado acaua

    }

}

