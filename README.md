
# Espaço das Letras - API 📚

Bem-vindos ao Espaço das Letras, o seu novo destino literário online. Nós somos uma pequena livraria/sebo apaixonada por livros e pela cidade de Curitiba, e estamos aqui para compartilhar histórias e conhecimento de forma acessível e conveniente. 

* [Repositório FrontEnd do Projeto](https://github.com/Letiti4/React-Module5)
* [Deploy da API no Render](https://backend-api-p7ni.onrender.com)

## Descrição 🧾

Nesse projeto foi criado uma API Rest para uma livraria, desenvolvido em Node.js com framework Express. A integração com o MongoDB, utilizando a biblioteca Mongoose, permite o armazenamento e recuperação de dados de forma otimizada.

## Requisitos 🗝️

Antes de começar, certifique-se de que as seguintes tecnologias estejam devidamente instaladas em sua máquina:

* [VS Code](https://code.visualstudio.com/download)
* [Thunder Client](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client)

* [Node.js](https://nodejs.org/en)

* [MongoDB](https://www.mongodb.com/pt-br)

## Banco de Dados 📊

Essas são as entidades do nosso banco de dados:

* Clientes
* Livros 

## Dependências ⛓️ 

```bash
   cors: "^2.8.5"
```

```bash
   expres": "^4.18.2"
```

```bash
   path: "^0.12.7"
```

```bash
   dotenv: "^16.3.1"
```

```bash
   url: "^0.11.2"
```

```bash
   mongoose: "^7.5.3"
```


## Instalação 🔌

Abra seu terminal e execute os comandos a seguir:

* **Clone o projeto:**

```bash
  git clone https://github.com/JulieneCarneiro/BackEnd_API.git
```

* **Entrando na pasta:**

```bash
  cd BackEnd_API
```

* **Abra o VS Code:**

```bash
  code . 
```
No terminal do VS Code: 

* **Instale as dependências:**

```bash
  npm install
```

* **Configure o .env para conectar com o seu MongoDB no Atlas**

Segue um exemplo de configuração: [Link](https://github.com/motdotla/dotenv)

```bash
  USER_DB=local
  DATABSE=local
  PASSWORD=local
  CLUSTER=local    
```

* **Inicie o servidor:**

```bash
  npm start
```

## Exemplos de respostas 🗃️



***POST - Rota:***

```bash
 http://localhost:3000/livros
```
A rota post insere um livro.

Entrada

Copie o código json abaixo e insira no body da requisição http:

```
  {      "titulo": "A garota do mar",
    "preco": "R$42,90",
    "autor": "Molly Knox Ostertag",
    "generos": "Romance",
    "editora": "Galera",
    "idioma": "Português",
    "estado": "Novo",
    "descricao": "É uma encantadora graphic novel que conta a história de Morgan, uma garota que descobre um mundo mágico sob o mar. Enquanto explora esse reino subaquático, Morgan se depara com uma comunidade de sereias e se envolve em aventuras emocionantes. Ostertag habilmente aborda temas de amizade, aceitação e autodescoberta, criando uma narrativa visualmente envolvente e ricamente ilustrada. A protagonista, com seus dilemas e triunfos, cativa os leitores, enquanto a autora tece uma trama que combina elementos mágicos com mensagens poderosas sobre pertencimento e coragem. A Garota do Mar é uma obra envolvente que ressoa tanto com jovens leitores quanto com os que apreciam uma narrativa encantadora e visualmente estimulante.",
    "capa": "https://m.media-amazon.com/images/I/818KGgapfiL._SY522_.jpg"
  }


``` 
Saída

```
"Sucesso no registro!"

```

<!-- localhost:3000/livros -->
***GET - Rota:*** 

```bash
 http://localhost:3000/
```

A rota get lista os livros.

Entrada

```
Apenas digite a rota com o comando GET na URL
```
Saída

```
  {
    "_id": "653c494f1c288ad2181a0e78",
    "titulo": "Harry Potter e a Pedra Filosofal",
    "preco": "R$44,90",
    "autor": "J.K. Rowling",
    "generos": "Fantasia",
    "editora": "Rocco",
    "idioma": "Português",
    "estado": "Novo",
    "descricao": "Harry Potter e a Pedra Filosofal é o primeiro livro da aclamada série de J.K. Rowling. A história segue um jovem bruxo, Harry Potter, enquanto ele descobre seu passado mágico e embarca em uma jornada épica em Hogwarts, a escola de magia. O livro é uma emocionante aventura repleta de amizade, magia e desafios, e se tornou um clássico da literatura infantojuvenil.",
    "capa": "https://m.media-amazon.com/images/I/61jgm6ooXzL._AC_UF1000,1000_QL80_.jpg",
    "__v": 0
  },
  {
    "_id": "653c498c1c288ad2181a0e7b",
    "titulo": "Cem Anos de Solidão",
    "preco": "R$49,90",
    "autor": "Gabriel García Márquez",
    "generos": "Realismo Mágico",
    "editora": "Editorial Sudamericana",
    "idioma": "Espanhol",
    "estado": "Novo",
    "descricao": "Cem Anos de Solidão é uma obra-prima do realismo mágico escrita por Gabriel García Márquez. O romance narra a história da família Buendía em Macondo ao longo de várias gerações. Com uma prosa envolvente e elementos mágicos, o livro explora temas de solidão, amor e destino, deixando uma marca indelével na literatura latino-americana.",
    "capa": "https://m.media-amazon.com/images/I/51cfxI-51mL.jpg",
    "__v": 0
  },
  {
    "_id": "653c49c51c288ad2181a0e7d",
    "titulo": "1984",
    "preco": "R$24,90",
    "autor": "George Orwell",
    "generos": "Distopia",
    "editora": "Companhia das Letras",
    "idioma": "Inglês",
    "estado": "Usado",
    "descricao": "1984, escrito por George Orwell, é um clássico da literatura de distopia. A história se passa em um mundo totalitário controlado pelo Partido, onde a liberdade individual é suprimida e a manipulação da verdade é constante. O livro segue Winston Smith, um homem que desafia o sistema opressor em busca da verdade e da liberdade.",
    "capa": "https://m.media-amazon.com/images/I/61HtBosDhwL._AC_UF1000,1000_QL80_.jpg",
    "__v": 0
  }...
}
```


***PATCH - Rota:***

```bash
 http://localhost:3000/livros/2
```

A rota patch modifica algum livro.

É importante destacar que no banco de dados, o livro com o ID 2 é exibido da seguinte forma:

```
  {
    "ID": 2,
    "TITULO": "A deusa do desamor",
    "PRECO": 26.9,
    "AUTOR": 2,
    "GENERO": "ROMANCE",
    "EDITORA": 2,
    "IDIOMA": "Portugues"
  }

```
Entrada

Copie o código json abaixo e insira no body da requisição http:

```
  {
    "TITULO": "OFERTA: A deusa do desamor",
    "PRECO": 20.0,
    "AUTOR": 2,
    "GENERO": "ROMANCE",
    "EDITORA": 2,
    "IDIOMA": "Portugues"
  }
```

Saída
```
"Livro alterado com sucesso!"
```


***PUT - Rota:***

```bash
  http://localhost:3000/clientes/3
```

A rota put modifica um cliente.

É importante destacar que no banco de dados, o cliente com o ID 3 é exibido da seguinte forma::
```
  {
    "ID": 3,
    "NOME": "Joelma Kalipiçon",
    "EMAIL": "jojokali@yahoo.com",
    "TELEFONE": "41 99356-1478",
    "ENDERECO": "Rua Jose Arruda, 398 - Bairro: Solidão"
  }
```

Entrada

Copie o código json abaixo e insira no body da requisição http:

```
  {
    "NOME": "JoelmaKalipiçon123",
    "EMAIL": "jojokali@yahoo.com",
    "TELEFONE": "41 99356-1478",
    "ENDERECO": "Rua Jose Arruda, 398 - Bairro: Solidão"
  }
```

Saída

```
`Cliente atualizado com sucesso`
```


***DELETE - Rota:***

```bash
  http://localhost:3000/clientes/3
```

A rota delete remove um autor.

É importante destacar que no banco de dados, os autores são exibidos da seguinte forma::
```
[
  {
    "ID": 1,
    "NOME": "Carlos Duhigg",
    "PAIS": "Brasil",
    "LIVROS": 1
  },
  {
    "ID": 2,
    "NOME": "Julia ZZagonel",
    "PAIS": "Brasil",
    "LIVROS": 2
  },
  {
    "ID": 3,
    "NOME": "Emma Liord",
    "PAIS": "Estados Unidos",
    "LIVROS": 3
  }...
]
``` 


Entrada

Digite a URL com o comando DELETE passando o ID do livro que você deseja excluir:

```bash
  http://localhost:3000/autores/1
```

Saída

```

"Autor deletado com sucesso!"

```
## Referências 📌

 - [Express](https://expressjs.com/pt-br/)
 - [MongoDb](https://www.mongodb.com/docs/)
 - [Node.js](https://nodejs.org/en)
- [Thunder Client](https://www.thunderclient.com/)

## Autores 🖊️

- **Juliene Carneiro** - [GitHub](https://github.com/JulieneCarneiro) - [LinkedIn](https://www.linkedin.com/in/juliene-s-carneiro/)

- **Laís Muller** -  [GitHub](https://github.com/laismullerrr) - [LinkedIn](https://www.linkedin.com/in/laismulleraliski/)

- **Thiago de Souza** -  [GitHub](https://github.com/Thzzao) - [LinkedIn](https://www.linkedin.com/in/thiagojdss/) 

- **Leticia Oliveira** -  [GitHub](https://github.com/Letiti4) - [LinkedIn](https://www.linkedin.com/in/leticia-oliveira-1955301b8/) 
 


