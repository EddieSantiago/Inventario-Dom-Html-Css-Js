//Botones

let button_insertar = document.getElementById('insertar');
let button_buscar = document.getElementById('buscar');
let button_modificar = document.getElementById('modificar');
let button_excel = document.getElementById('excel');
codigo = 0;
let codigo_eliminado = 0;

button_insertar.onclick = function(){
    //Inputs

    let nombre = document.getElementById('nombre').value;
    let marca = document.getElementById('marca').value;
    let precio = document.getElementById('precio').value;
    let cantidad = document.getElementById('cantidad').value;

    //Validamos los campos
    
    if (nombre == "") {
        alert("Ingrese el Nombre");
    }else if (marca == "") {
        alert("Ingrese la Marca");
    }else if (precio == "") {
        alert("Ingrese el Precio");
    }else if (cantidad == "") {
        alert("Ingrese la Cantidad");
    }else{

    let respuesta = prompt("¿Desea Insertar el Algun Dato Eliminado?, 0. Si, 1.No")

    if (respuesta == "0") {
        //Vemos si quiere añadir elemento eliminado
        //Si no se ha eliminado nada manda alert
        if (codigo_eliminado == 0) {
            alert("No se ha eliminado nada")
        }else{
            //Si no inserta el elemento a la tabla con el indice eliminado
        let tabla = document.getElementById('tabla');
    let fila = tabla.insertRow(tabla.rows.lenght);

    let celda1 = fila.insertCell(0);
    let celda2 = fila.insertCell(1);
    let celda3 = fila.insertCell(2);
    let celda4 = fila.insertCell(3);
    let celda5 = fila.insertCell(4);
    let celda6 = fila.insertCell(5);

    celda1.innerText = codigo_eliminado + 1;
    celda2.innerText = nombre;
    celda3.innerText = marca;
    celda4.innerText = precio;
    celda5.innerText = cantidad;
    celda5.innerText = cantidad;

    celda6.innerHTML = '<td><button onclick="eliminarFila(this)">Eliminar</button></td>';
    }
}else{

    //Si no se quiere añadir elemento con indice eliminado

    //Añadimos el producto a la tabla
    codigo+= 1;
    let tabla = document.getElementById('tabla');
    let fila = tabla.insertRow(tabla.rows.lenght);

    let celda1 = fila.insertCell(0);
    let celda2 = fila.insertCell(1);
    let celda3 = fila.insertCell(2);
    let celda4 = fila.insertCell(3);
    let celda5 = fila.insertCell(4);
    let celda6 = fila.insertCell(5);

    celda1.innerText = codigo;
    celda2.innerText = nombre;
    celda3.innerText = marca;
    celda4.innerText = precio;
    celda5.innerText = cantidad;
    celda5.innerText = cantidad;

    celda6.innerHTML = '<td><button onclick="eliminarFila(this)">Eliminar</button></td>';

    document.getElementById('codigo').value = codigo + 1;
}
}
}

//Funcion Eliminar Fila

function eliminarFila(celda) {
    let row = celda.parentNode.parentNode;

    //Con rowIndex sabemos el indice que se elimino
    codigo_eliminado = row.rowIndex - 1;


    row.parentNode.removeChild(row);
}


let codigo_producto = "";

//Onclick Buscar

button_buscar.onclick = function() {

    codigo_producto = parseInt(prompt("Ingrese el Codigo del producto que desea modificar"));

    if (codigo_producto >= 1 && codigo_producto <= codigo) {
        alert("Codigo Permitido");

        let nombre_buscar = document.getElementById('tabla').rows[codigo_producto].cells[1].innerText;
        let marca_buscar = document.getElementById('tabla').rows[codigo_producto].cells[2].innerText;
        let precio_buscar = document.getElementById('tabla').rows[codigo_producto].cells[3].innerText;
        let cantidad_buscar = document.getElementById('tabla').rows[codigo_producto].cells[4].innerText;

        alert("Producto Encontrado Correctamente");

        document.getElementById('codigo').value = codigo_producto;
        document.getElementById('nombre').value = nombre_buscar;
        document.getElementById('marca').value = marca_buscar;
        document.getElementById('precio').value = precio_buscar;
        document.getElementById('cantidad').value = cantidad_buscar;

    }else{
        alert("El codigo no ha sido creado todavia")
    }

}

//Onclick Modificar

button_modificar.onclick = function() {

    if (codigo_producto == "") {
        alert("Primero realice la busqueda")
    }else{
    
    let nombre_modificado = document.getElementById('nombre').value;
    let marca_modificado = document.getElementById('marca').value;
    let precio_modificado = document.getElementById('precio').value;
    let cantidad_modificado = document.getElementById('cantidad').value;

    //Actualizamos datos en la tabla
    let nombre_buscar = document.getElementById('tabla').rows[codigo_producto].cells[1].innerText = nombre_modificado;
    let marca_buscar = document.getElementById('tabla').rows[codigo_producto].cells[2].innerText = marca_modificado;
    let precio_buscar = document.getElementById('tabla').rows[codigo_producto].cells[3].innerText = precio_modificado;
    let cantidad_buscar = document.getElementById('tabla').rows[codigo_producto].cells[4].innerText = cantidad_modificado;

}
}



button_excel.onclick = function() {
    if (codigo == 0) {
        alert("Inserte primero Datos");
    }else{
        let nombreArchivo = prompt("Inserte el Nombre del Archivo Excel")
        const table2Excel = new Table2Excel();
          table2Excel.export(document.getElementById("tabla"), nombreArchivo);
    }
}