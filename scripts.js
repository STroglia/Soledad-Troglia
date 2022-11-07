const valorTicket= 200;

let descuentoEstudiante = 0.8;
let descuentoTrainee = 0.5;
let descuentoJunior = 0.15;

const cantidad = document.getElementById('cantidad');
const categoria = document.getElementById('categoria');
const botonResumen = document.getElementById('resumen')
const botonBorrar = document.getElementById('borrar')
const pagar = document.getElementById('pagar')

function totalPagar() {
    let totalValor = (cantidad.value) * valorTicket;
    if (categoriaSelect.value == 1){
        totalValor = totalValor - (totalValor * descuentoEstudiante);
    }
    else if (categoriaSelect.value == 2){
        totalValor = totalValor - (totalValor * descuentoTrainee);
    }
    else if (categoriaSelect.value == 3){
        totalValor = totalValor - (totalValor * descuentoJunior);
    } 
    else{
        totalValor = totalValor;
    }

    pagar.innerHTML = `Total a pagar: ${totalValor}`;
}

botonResumen.addEventListener('click', totalPagar);

botonBorrar.addEventListener('click', ()=>{
    pagar.innerHTML = `Total a pagar: `
});