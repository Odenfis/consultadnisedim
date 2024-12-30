
let boton = document.getElementById("boton");

boton.addEventListener("click", traerDatos)

function traerDatos(){
    let dni = document.getElementById("dni").value;
    fetch("https://apiperu.dev/api/dni/" + dni + "?api_token=43e9d1dcc330b35c134ab5d25fb6990e97b175d5b17e65047aa7c3d9df2a7d30")
    .then((datos)=>datos.json())
    .then((datos)=>{
        //console.log(datos)
        document.getElementById("doc").value = datos.data.numero
        document.getElementById("nombre").value = datos.data.nombres
        document.getElementById("apellido").value = datos.data.apellido_paterno + " " + datos.data.apellido_materno
        document.getElementById("cui").value = datos.data.codigo_verificacion
    })
}
