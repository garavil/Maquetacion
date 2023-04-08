let datos = [];
function datosPersonas(){
    let nombre = document.getElementById('nombre')
    let origen = document.getElementById('origen')
    let destino = document.getElementById('destino')
    let noches = document.getElementById('noches')
    let date = document.getElementById('fecha')

    let persona = {
        nombre_completo : nombre.value,
        ciudad_origen : origen.value,
        ciudad_destino : destino.value,
        numero_noches : noches.value,
        fecha_salida : date.value
    }

    datos.push(persona)

}

function filtrarFav(){

    let tabla = document.getElementById("datos");
    // let elemento = document.querySelector(".table1");

    // if(elemento.classList.contains("table1"))
    // {
    //     elemento.classList.remove("table1")
    // }

    tabla.innerHTML = ''

    let tr1 = document.createElement('tr');
    let col1 = document.createElement('th');
    let col2 = document.createElement('th');
    let col3 = document.createElement('th');
    let col4 = document.createElement('th');
    let col5 = document.createElement('th');


    col1.textContent = 'Nombre completo';
    col2.textContent = 'Lugar de origen';
    col3.textContent = 'Lugar de destino';
    col4.textContent = 'Número de noches';
    col5.textContent = 'Fecha de salida';

    tr1.appendChild(col1);
    tr1.appendChild(col2);
    tr1.appendChild(col3);
    tr1.appendChild(col4);
    tr1.appendChild(col5);

    tabla.appendChild(tr1)

    tr1.classList.add('table')



    for(let i = 0; i < datos.length; i++){
        if(datos[i].ciudad_destino.toLowerCase() == 'canarias' || datos[i].ciudad_destino.toLowerCase() == 'galicia' ||datos[i].ciudad_destino.toLowerCase() == 'mallorca'){
        
        let trTemp = document.createElement('tr');

        let colTemp1 = document.createElement('th');
        let colTemp2 = document.createElement('th');
        let colTemp3 = document.createElement('th');
        let colTemp4 = document.createElement('th');
        let colTemp5 = document.createElement('th');


        colTemp1.textContent = datos[i].nombre_completo
        colTemp2.textContent = datos[i].ciudad_origen
        colTemp3.textContent = datos[i].ciudad_destino
        colTemp4.textContent = datos[i].numero_noches
        colTemp5.textContent = datos[i].fecha_salida


        trTemp.appendChild(colTemp1);
        trTemp.appendChild(colTemp2);
        trTemp.appendChild(colTemp3);
        trTemp.appendChild(colTemp4);
        trTemp.appendChild(colTemp5);


        tabla.appendChild(trTemp);
        trTemp.classList.add('table')
        }
    }
    
}
