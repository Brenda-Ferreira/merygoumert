function enviarCarrinho(listamarmita) {
    var l = listamarmita.length;
    var pedido = "";
    for (var i = 0; i < l; i++) {


        pedido += listamarmita[i] + ", ";

    }
    console.log(pedido);
}