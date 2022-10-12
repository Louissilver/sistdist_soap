"use strict";

var soap = require('strong-soap').soap;
var url = 'http://localhost:8000/?wsdl';
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const timeout = 1000
let item = ''
let quantidade = ''

console.log('Seja bem vindo(a)!');

const main = function () {
  rl.question('\n\nAqui estão nossas opções:\n[1] - Ver o cardápio\n[2] - Realizar um pedido\n[0] - Sair\n\nDigite o número de sua opção: ', function (opcao) {
    if (opcao == '1') {
      App(item, quantidade, opcao)
    } else if (opcao == '2') {
      rl.question('Qual item gostaria de pedir? ', function (nomeDoItem) {
        item = nomeDoItem;
        rl.question('Qual a quantidade do item? ', function (quantidadeDoItem) {
          quantidade = quantidadeDoItem;
          App(item, quantidade, opcao)
          setTimeout(main, timeout)
        })
      })
    } else if (opcao == '0') {
      console.log('\n\nAgradecemos por ser nosso cliente! Volte sempre!\n\n')
      return rl.close();
    }
    else {
      console.log('Essa opção não está disponível.')
    }
    setTimeout(main, timeout)
  })
}


const App = (nomeDoItem, quantidadeDoItem, opcao) => {
  var requestArgs = {
    item: nomeDoItem,
    quantidade: quantidadeDoItem
  };
  var options = {};
  soap.createClient(url, options, function (err, client) {
    if (opcao == '1') {
      var cardapio = client['cardapio'];
      cardapio(function (err, result, envelope, soapHeader) {
        console.log('Aqui está nosso cardápio:\n\n')
        console.log('Cardápio:', result.cardapioResult);
      });
    } else if (opcao == '2') {
      var pedido = client['pedido'];
      pedido(requestArgs, function (err, result, envelope, soapHeader) {
        console.log('\nObrigado por pedir com a gente! Ficamos muito felizes! Aqui está o resultado do seu pedido:\n\n')
        console.log('Pedido:', result.pedidoResult);
      });
    } else {
      console.log('A opção escolhida não foi encontrada.')
    }
  });
}

main();
