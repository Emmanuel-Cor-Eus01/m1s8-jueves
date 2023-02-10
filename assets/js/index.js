// console.log("Entro index.js");

// let btnDanger = document.getElementById("btnDanger");
// //aqui accedimos desde el html con onclick
// function imprimirHolaMundo(){
//     alert("Hola mundo");
// }
// // aqui creamos eñ listener mediante el element (por el getElementById)
// btnDanger.addEventListener("click", function (){
//     // Lo que sea que queramos hacer
//     alert("Hola mundo desde el boton Danger")
// });

document.addEventListener("DOMContentLoaded", ()=>{
    // todo el codigo de mi aplicacion
    const saveBtn = document.getElementById("saveBtn");
    const changeThemeBtn = document.getElementById("changeThemeBtn");
    const inputNAme = document.getElementById("inputNAme");
    const inputPuesto = document.getElementById("inputPuesto");
    let tableBody = document.getElementById("tableBody");
    function loadData(){
        //cargue informacion por default de mi aplicacion
        //console.log("Entro al load data");
        let data = JSON.parse(localStorage.getItem("data")) || [];
        data.forEach((empleado, index) => {
            let tr = document.createElement("tr");
            tr.innerHTML = `
            <td>${index + 1}</td>
            <td>${empleado.name}</td>
            <td>${empleado.puesto}</td>
            <td class="text-center">
              <button type="button" class="btn btn-warning btn-edit" data-index="${index}">Editar</button>
              <button type="button" class="btn btn-danger btn-delete" data-index="${index}">Eliminar</button>
            </td>
          `;
        tableBody.appendChild(tr);
        });
    }
    saveBtn.addEventListener("click", () =>{
        loadData();
        //alert("entro al boton save?")
        //este es el evento del boton guardar
        const name = inputName.value;
        const puesto = inputPuesto.value;
        console.log(name);
        console.log(puesto);
        let data = JSON.parse(localStorage.getItem("data")) || [];
        data.push({
            name: name,
            puesto: puesto
        });
        localStorage.setItem("data", JSON.stringify(data));
    });

});