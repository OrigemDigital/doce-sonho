// Cardápio da Doce Sonho — edite aqui para adicionar produto/sabor novo, sem mexer no HTML.

const NUMERO_WHATSAPP = "5588997984717";
const HORARIO_ABERTURA = 7;
const HORARIO_FECHAMENTO = 21;

const PRODUTOS = [
  {
    id: "bolo-pote",
    nome: "Bolo de Pote",
    descricao: "Bolo de pote cremoso, em camadas, servido fresquinho.",
    precoBase: 12.00,
    foto: "images/bolo-pote.jpg",
    sabores: [
      { nome: "Chocolate", preco: 12.00, foto: "images/bolo-pote-chocolate.jpg" },
      { nome: "Ninho", preco: 12.00, foto: "images/bolo-pote-ninho.jpg" },
      { nome: "Ninho com Geleia de Morango", preco: 12.00, foto: "images/bolo-pote-morango.jpg" }
    ]
  },
  {
    id: "brownie",
    nome: "Brownie",
    descricao: "Brownie denso, feito com muito chocolate.",
    preco: 7.00,
    foto: "images/galeria7.jpg",
    sabores: null
  },
  {
    id: "brownie-pote",
    nome: "Brownie no Pote",
    descricao: "Brownie cremoso servido no pote, com calda de chocolate.",
    preco: 7.00,
    foto: "images/brownie-pote.jpg",
    sabores: null
  },
  {
    id: "dindin-gourmet",
    nome: "Dindin Gourmet",
    descricao: "Dindin gourmet cremoso, embalado e lacrado à mão.",
    precoBase: 4.00,
    foto: "images/galeriad.jpg",
    sabores: [
      { nome: "Ninho com Nutella", preco: 4.00, foto: "images/dindin-ninho-nutella.jpg" },
      { nome: "Morango com Nutella", preco: 4.00, foto: "images/galeria3.jpg" },
      { nome: "Chocolate Cremoso", preco: 4.00, foto: "images/dindin-chocolate.jpg" },
      { nome: "Coco com Chocolate", preco: 4.00, foto: "images/galeria5.jpg" },
      { nome: "Pudim", preco: 5.00, foto: "images/dindin-pudim.jpg" },
      { nome: "KitKat", preco: 5.00, foto: "images/dindin-kitkat.jpg" }
    ]
  },
  {
    id: "trufas",
    nome: "Trufas",
    descricao: "Trufas artesanais em diversos sabores.",
    preco: 3.00,
    foto: "images/trufas.jpg",
    saboresLista: ["Chocolate", "Dois Amores", "Açaí", "Amendoim", "Beijinho", "Ninho"]
  }
];
