# 🚀 Projeto Sprint JavaScript 

Este projeto foi desenvolvido como parte de uma sprint prática de JavaScript, com foco em manipulação de elementos DOM, orientação a objetos e criação de uma experiência interativa para um site da Ford.

## 📚 Objetivos do Projeto

- Criar páginas web com manipulação de elementos e eventos usando JavaScript
- Utilizar princípios de **orientação a objetos** (classes, objetos, métodos)
- Implementar **herança e encapsulamento**
- Aplicar boas práticas de código limpo e modularidade

---

## 💡 Funcionalidades Implementadas

### ✅ Página Principal (Carrossel)
- Um carrossel automático de imagens implementado com a classe `Carousel`
- Troca de imagem e texto a cada 2 segundos
- Manipulação direta do DOM para alterar elementos visuais

### ✅ Página de Lançamentos
- Exibição de vídeo promocional
- Três imagens principais do veículo em destaque
- Tabela de modelos com checkbox para **comparação entre dois veículos**
- Implementação da classe `Car` e métodos como:
  - `GetCarArrPosition`
  - `SetCarToCompare`
  - `ShowCompare`, `HideCompare`
  - `UpdateCompareTable`
- Verificação de seleção e alerta caso apenas um modelo seja escolhido

### ✅ Página de Contato
- Formulário com campos: nome, sobrenome, email, CPF, telefone, tipo de contato e mensagem
- Máscaras dinâmicas para CPF (`000.000.000-00`) e telefone (`(00) 00000-0000`)
- Validação de preenchimento e formato de dados
- Armazenamento local com `localStorage`
- Animações visuais nos botões via CSS

---

## 🛠️ Estrutura de Pastas

```bash
sprint_JS_Ford/
├── css/
│   ├── form.css
│   ├── lancamento.css
│   ├── reset.css
│   ├── responsividade_*.css
│   └── style.css
├── js/
│   ├── carousel.js
│   ├── compare.js
│   └── form.js
├── img/
│   ├── imagens de veículos e logos
├── index.html
├── lancamento.html
├── contato.html
└── README.md

```
# 🧪 Tecnologias Utilizadas

- HTML5
- CSS3(Com responsividade)
- JavaScript(Vanilla JS)
# 🎯 Como Executar o Projeto
- Clone o repositório:
````
git clone git@github.com:Mavisi/sprint_JS_Ford.git
````
- Acesse a pasta:

````
cd sprint_JS_Ford
````
- Abra o arquivo index.html no seu navegador.

