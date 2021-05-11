let cont = 0;
const valor = document.querySelector("#valor")
const btns = document.querySelectorAll(".btn")

btns.forEach(function (btn) {
    btn.addEventListener('click', function(e){
        const operador = e.target.getAttribute("data-operador");
        if(operador === 'diminuir'){
            cont --;
        }

        else if(operador === 'aumentar'){
            cont ++;
        }

        else{
            cont = 0;
        }

        if(cont > 0){
            valor.style.color = "green";
        }

        if(cont < 0){
            valor.style.color = "red";
        }

        if(cont === 0){
            valor.style.color = "black";
        }

        valor.textContent = cont;


    })
})