var total = $("#carrito");

var selecteds = []

$(document).ready(function () {
    $('.articulos').on('click', '.articulo', function () {
        let id = $(this).attr('id');
        if (selecteds.find(s => s == id)) {
            $(this).fadeTo("slow", 1);
            var valor = parseInt($(this).text().split("$")[1])
            total.text() ? total.text("$ " + (parseInt(total.text().split("$")[1]) - valor)) : total.text("$ " + valor)
            selecteds = selecteds.filter(s => s != id)
        }
        else {
            $(this).fadeTo("slow", 0.65);
            var valor = parseInt($(this).text().split("$")[1])
            total.text() ? total.text("$ " + (parseInt(total.text().split("$")[1]) + valor)) : total.text("$ " + valor)
            selecteds.push(id)
        }

    })
})