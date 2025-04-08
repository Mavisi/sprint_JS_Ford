//class contato

class contato {
  constructor(nome, sobrenome, email, cpf, telefone, contato) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.email = email;
    this.cpf = cpf;
    this.telefone = telefone;
    this.contato = contato;
  }
}
 
function Post(form) {
   
    const aLei = document.getElementById("lgpd");
    if (!aLei.checked) {
      alert("Você precisa aceitar os termos de uso e a política de privacidade para enviar seus dados.");
      return;
    }
    

    let data = new contato(
    form.elements.namedItem("nome").value,
    form.elements.namedItem("sobrenome").value,
    form.elements.namedItem("email").value,
    form.elements.namedItem("cpf").value,
    form.elements.namedItem("telefone").value,
    form.elements.namedItem("contato").value
  );

  // Valida CPF e Telefone
  //   if (cpf.length < 11) {
  //     alert("ATENÇÃO, CPF FORA DO PADRÃO. Formato esperado: 000.000.000-00");
  //     return;
  //   }

  // if (telefone.length != 11) {
  //     alert("TELEFONE DIGITADO NÃO EXISTE. Formato esperado: (00) 00000-0000");
  //     return;
  // }

  localStorage.setItem("formulario", JSON.stringify(data)); // aqui ele vai salvar o objeto no localStorage
  //o json.stringify vai transformar o objeto em uma string

  let mostrar = JSON.parse(localStorage.getItem("formulario"));
  console.log(mostrar);

  Enviar(data.nome); // chama a função que mostra o alert
}

// máscaras de CPF e telefone ao digitar
document.addEventListener("DOMContentLoaded", function () {
  const mascaraCpf = document.getElementById("cpf");
  const mascaraTel = document.getElementById("telefone");

  mascaraCpf.addEventListener("input", function (e) {
    let value = e.target.value.replace(/\D/g, "");

    value = value.replace(/(\d{3})(\d)/, "$1.$2");// aqui ele vai colocar o ponto
    value = value.replace(/(\d{3})(\d)/, "$1.$2"); // aqui ele vai colocar o outro ponto 
    value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2"); // aqui ele vai colocar o traço
    e.target.value = value; // aqui ele vai colocar o valor no input
  });


  mascaraTel.addEventListener("input", function (e) {
    let value = e.target.value.replace(/\D/g, ""); // aqui ele vai tirar tudo que não for número
    value = value.replace(/^(\d{2})(\d)/g, "($1) $2"); // aqui ele vai colocar o parênteses
    value = value.replace(/(\d{5})(\d)/, "$1-$2"); // aqui ele vai colocar o traço
    e.target.value = value;
  });
});


function Enviar(nome) {

  const mascCpf = document.getElementById("cpf").value;
  const mascTel =  document.getElementById("telefone").value;
  const telNumeros = mascTel.replace(/\D/g, ''); // remove tudo que não é número


  if (mascCpf.length != 14) {
    alert("ATENÇÃO, CPF FORA DO PADRÃO. Formato esperado: 000.000.000-00");
    return;
  }
    if (telNumeros.length !== 11) {
      alert("TELEFONE DIGITADO NÃO EXISTE. Formato esperado: (00) 00000-0000");
      return;
    }

  var nome = document.getElementById("name");

  if (nome) {
    alert(
      "Obrigado sr(a) " +
        nome.value +
        " os seus dados foram encaminhados com sucesso"
    );
    console.log();
  }

  form.reset(); // limpa r o meu formulário

  
}
