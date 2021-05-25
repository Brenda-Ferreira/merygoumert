window.onload = function() {
    document.querySelector(".menuMobile").addEventListener("click", function() { // ao clicar
        if (document.querySelector(".menu .nav .ul").style.display == 'flex') { // QUER DIZER QUE ELE ESTA APARECENDO
            // se ele estive aparecendo
            document.querySelector(".menu .nav .ul").style.display = 'none';
            // ele irá sumir 
        } else {
            // se não 
            document.querySelector(".menu .nav .ul").style.display = 'flex';
            // ele vai aparecer 
        }
    });
};