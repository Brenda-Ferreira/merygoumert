$(function (){
    var MAX_SELECT = 2; // Máximo de 'input' selecionados
    
    $('input.limited').on('change', function(){
      if( $(this).siblings(':checked').length >= MAX_SELECT ){
         this.checked = false;
      }
    });

    

    });


    $(function Dois(){
        var MAX_SELECTS = 2; // Máximo de 'input' selecionados
        
        $('.limitedD').on('change', function Dois(){
          if( $(this).siblings(':checked').length >= MAX_SELECTS ){
             this.checked = false;
          }
        });
    
        
    
        });






