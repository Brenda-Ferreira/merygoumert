var listamarmita = ['a'];

function checkGeral(maximo, form, selecao, marmitaitem) {
    var CheckMaximo = maximo;
    var formSelecionado = form;
    var selecaoForm = selecao;
    var marmitaitem = marmitaitem;
    maximo = 0;

    var Marcados = 1;
    var objCheck = document.forms[formSelecionado].elements[selecaoForm];
    var l = listamarmita.length;
    var adiciona = true;


    for (var i = 0; i < l; i++) {
        if (listamarmita[i] == marmitaitem) {
            var indice = i;
            adiciona = false;

        }
    }
    if (adiciona) {
        listamarmita.unshift(marmitaitem);
    } else {
        listamarmita.splice(indice, 1);
    }

    //listamarmita.unshift(marmitaitem);

    /*  if (objCheck[i].checked == false) {
        objCheck[i].disabled = true;
        var indice = listamarmita.indexOf(marmitaitem);
        listamarmita.splice(indice, 1);

    } else {
        listamarmita.unshift(marmitaitem);
    }
*/
    for (var iLoop = 0; iLoop < objCheck.length; iLoop++) {

        if (Marcados <= CheckMaximo) {
            if (objCheck[iLoop].checked) {
                Marcados++;
            }

            for (var i = 0; i < objCheck.length; i++) {
                objCheck[i].disabled = false;
            }
            //Caso contrário, desabilitar o checkbox;
            //Nesse caso, é necessário percorrer todas as opções novamente, desabilitando as não checadas;
        } else {
            for (var i = 0; i < objCheck.length; i++) {
                if (objCheck[i].checked == false) {
                    objCheck[i].disabled = true;


                }
            }
        }

    }
    console.log(listamarmita);

};