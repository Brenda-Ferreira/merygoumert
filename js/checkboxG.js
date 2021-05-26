

                                        function verificarG2() 
                                        {
                                            var CheckMaximo = 2;
                                            var Marcados = 1;
                                            var objCheck = document.forms['formGP'].elements['GP'];
                                            
                                            //Percorrendo os checks para ver quantos foram selecionados:
                                            for (var iLoop = 0; iLoop<objCheck.length; iLoop++) {
                                                //Se o número máximo de checkboxes ainda não tiver sido atingido, continua a verificação:
                                                if (Marcados <= CheckMaximo) {
                                                    if (objCheck[iLoop].checked) {
                                                        Marcados++;
                                                    }
                                                        //Habilitando todos os checkboxes, pois o máximo ainda não foi alcançado.
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

                                        function verificarG5() {
                                            var CheckMaximo = 5;
                                            var Marcados = 1;
                                            var objCheck = document.forms['formGS'].elements['GS'];
                                            
                                            //Percorrendo os checks para ver quantos foram selecionados:
                                            for (var iLoop = 0; iLoop<objCheck.length; iLoop++) {
                                                //Se o número máximo de checkboxes ainda não tiver sido atingido, continua a verificação:
                                                if (Marcados <= CheckMaximo) {
                                                    if (objCheck[iLoop].checked) {
                                                        Marcados++;
                                                    }
                                                        //Habilitando todos os checkboxes, pois o máximo ainda não foi alcançado.
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
