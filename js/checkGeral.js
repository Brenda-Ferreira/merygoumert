


                                        function checkGeral(maximo, form, selecao) {
                                            var CheckMaximo = maximo;
                                            var formSelecionado = form;
                                            var selecaoForm = selecao;
                                            maximo=0;

                                            var Marcados = 1;
                                            var objCheck = document.forms[formSelecionado].elements[selecaoForm];
                                            
                                            
                                            for (var iLoop = 0; iLoop<objCheck.length; iLoop++) {
                                                
                                                if (Marcados <= CheckMaximo) {
                                                    if (objCheck[iLoop].checked) {
                                                        Marcados++;
                                                    }
                                                        
                                                        for (var i=0; i<objCheck.length; i++) {
                                                            objCheck[i].disabled = false;
                                                        }	
                                                //Caso contrário, desabilitar o checkbox;
	                                            //Nesse caso, é necessário percorrer todas as opções novamente, desabilitando as não checadas;
                                                } else {
                                                    for (var i=0; i<objCheck.length; i++) {
                                                        if(objCheck[i].checked == false) {
                                                            objCheck[i].disabled = true;
                                                        }	
                                                    }
                                                }
                                            }                        
                                            };
