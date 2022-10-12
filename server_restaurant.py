import logging

from spyne import Application, rpc, ServiceBase, Iterable, UnsignedInteger, \
    String

from spyne.protocol.json import JsonDocument
from spyne.protocol.http import HttpRpc
from spyne.server.wsgi import WsgiApplication
from spyne.protocol.soap import Soap11

cardapio = ['Pizza', 'Lasanha', 'Batata frita', 'Hamburguer', 'Xis podrão', 'Xis calota', 'Cachorro quente']


class RestaurantService(ServiceBase):
    @rpc(_returns=Iterable(String))
    def cardapio(ctx):
        global cardapio
        for i in range(len(cardapio)):
            yield f'{cardapio[i]}'

    @rpc(String, UnsignedInteger, _returns=Iterable(String))
    def pedido(ctx, item, quantidade):
        global cardapio
        if item not in cardapio:
            yield 'Esse item não está no cardápio'
        else:
            yield f'Pedido realizado com sucesso! Item: {item} - Quantidade: {quantidade}'


if __name__ == '__main__':
    from wsgiref.simple_server import make_server
    logging.basicConfig(level=logging.DEBUG)
    application = Application([RestaurantService],
                              tns='sistemas.restaurant',
                              in_protocol=Soap11(validator='lxml'),
                              out_protocol=Soap11()
                              )
    wsgi_application = WsgiApplication(application)
    server = make_server('127.0.0.1', 8000, wsgi_application)
    logging.info("listening to http://127.0.0.1:8000")
    logging.info("wsdl is at: http://localhost:8000/?wsdl")
    server.serve_forever()
