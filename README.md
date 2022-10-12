<h1 align="center">
📄<br>Cliente e Servidor SOAP para simulação de restaurante
</h1>

<h3>
Esse é um projeto simples desenvolvido com Python e NodeJS que visa simular a interação entre cliente e servidor utilizando bibliotecas SOAP.
</h3>
</br>
<h3>
De um lado temos um servidor em Python que possui endpoints para requisição de um pedido e de um cardápio. Do outro lado temos um cliente que realiza a requisição do cardápio e envia argumentos para solicitação do pedido
</h3>
</br>

## Sumário

--- 
### 1. Instalação
### 2. Features
### 3. Execução
### 4. Resultados
---
</br>

## 1. ☕ Instalação

Executar os seguintes comandos para instalar as dependências Python:

```
  pip install -r requirements.txt
```

Executar os seguintes comandos para instalar as dependências Node:

```
  npm install
```
</br>

## 2. 🍕 Features:

- Server (RestaurantService) - server_restaurant.py
          - Enviar cardápio (cardapio())
          - Receber pedido (pedido())

- Client (RestaurantService) - index.js
          - Visualizar cardápio (cardapio())
          - Enviar pedido (pedido())

</br>

## 3. 🍜 Execução

Executar o seguinte comando para rodar o servidor Python:

```
  python .\server_restaurant.py    
```

Executar o seguinte comando para rodar o cliente Node:

```
  npm start
```
</br>

## 4. 🎉 Resultados
---
### 1. Server

````
INFO:spyne.application:Initializing application {sistemas.restaurant}Application...
DEBUG:spyne.interface._base:populating __main__.RestaurantService types...
DEBUG:spyne.interface._base:  enumerating classes for method 'cardapio'
DEBUG:spyne.interface._base:    adding class "<class 'spyne.model.complex.cardapio'>" for '{sistemas.restaurant}cardapio' 
org/2001/XMLSchema}nonNegativeInteger'DEBUG:spyne.interface._base:    adding class "<class 'spyne.model.complex.pedidoResponse'>" for '{sistemas.restaurant}pedidoResponse'
DEBUG:spyne.interface._base:    adding pedidoResponse.pedidoResult = <class 'spyne.model.complex.Iterable'>DEBUG:spyne.interface._base:populating '__main__.RestaurantService' routes...
DEBUG:spyne.interface._base:  adding method RestaurantService.cardapio to match '{sistemas.restaurant}cardapio' tag.      
DEBUG:spyne.interface._base:  adding method RestaurantService.pedido to match '{sistemas.restaurant}pedido' tag.DEBUG:spyne.interface._base:From this point on, you're not supposed to make any changes to the class and method structure of the exposed services.
DEBUG:spyne.interface.xml_schema:generating schema for targetNamespace='sistemas.restaurant', prefix: 'tns' in dir 'C:\\Users\\{username}\\AppData\\Local\\Temp\\spynek_2h31to'
DEBUG:spyne.interface.xml_schema:writing 'C:\\Users\\{username}\\AppData\\Local\\Temp\\spynek_2h31to\\tns.xsd' for ns sistemas.restaurantDEBUG:spyne.interface.xml_schema:Schema built. Removed 'C:\\Users\\{username}\\AppData\\Local\\Temp\\spynek_2h31to'
DEBUG:spyne.util.appreg:Registering <spyne.application.Application object at 0x000001FBC67428C0> as ('sistemas.restaurant', 'Application')
INFO:root:listening to http://127.0.0.1:8000
INFO:root:wsdl is at: http://localhost:8000/?wsdl
````
</br>

---

### 2. Client

#### Menu principal

````
Seja bem vindo(a)!


Aqui estão nossas opções:
[1] - Ver o cardápio
[2] - Realizar um pedido
[0] - Sair

Digite o número de sua opção:
````

#### Ver o cardápio

````
Aqui está nosso cardápio:


Cardápio: {
  string: [
    'Pizza',
    'Lasanha',
    'Batata frita',
    'Hamburguer',
    'Xis podrão',
    'Xis calota',
    'Cachorro quente'
  ]
}
````

#### Realizar um pedido com sucesso

````
Qual item gostaria de pedir? Xis podrão
Qual a quantidade do item? 2

Obrigado por pedir com a gente! Ficamos muito felizes! Aqui está o resultado do seu pedido:


Pedido: {
  string: [ 'Pedido realizado com sucesso! Item: Xis podrão - Quantidade: 2' ]
}
````

#### Realizar um pedido sem sucesso

````
Qual item gostaria de pedir? Macarronada
Qual a quantidade do item? 4

Obrigado por pedir com a gente! Ficamos muito felizes! Aqui está o resultado do seu pedido:


Pedido: { string: [ 'Esse item não está no cardápio' ] }
````
