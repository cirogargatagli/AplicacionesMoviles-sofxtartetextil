import { getArticulos } from "./api/indumentariaApi.js";

getArticulos()
    .done((data) => {
        var divArticulos = document.getElementById("articulos")
        data.forEach(articulo => {
            let divArticulo = document.createElement("div")
            divArticulo.className = "articulo";
            let img = document.createElement("img")
            let descripcion = document.createElement("p")
            descripcion.className = "descripcion"
            let precio = document.createElement("p")
            precio.className = "precio"

            img.src = articulo.img;
            descripcion.innerHTML = articulo.descripcion;
            precio.innerHTML = precio.innerHTML;

            divArticulo.append(img, descripcion, precio)
            divArticulos.append(divArticulo)
        });

    })
    .fail(() => {
        alert("Ocurrió un error al obtener los artículos.")
    })