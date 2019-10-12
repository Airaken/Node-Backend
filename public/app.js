//Inicializador del elemento Slider
$("#rangoPrecio").ionRangeSlider({
    type: "double",
    grid: false,
    min: 0,
    max: 100000,
    from: 1000,
    to: 20000,
    prefix: "$"
})

function setSearch() {
    let busqueda = $('#checkPersonalizada')
    busqueda.on('change', (e) => {
        if (this.customSearch == false) {
            this.customSearch = true
        } else {
            this.customSearch = false
        }
        $('#personalizada').toggleClass('invisible')
    })
}

setSearch()

$("#buscar").on('click', () => {
    $("#rangoPrecio").val();

    if (false) {

    }
    $.ajax({
        url: "/todos",
        success: function(result) {
            if (result.ok) {
                mostrarBienes(result);
            } else {
                alert(result.err);
            }
        }
    });
})

function mostrarBienes(result) {
    result.bienes.forEach(element => {
        $('.lista').append(`<div class="card horizontal">
<div class="card-image">
  <img src="img/home.jpg">
</div>
<div class="card-stacked">
  <div class="card-content">
    <div>
      <b>Direccion: </b><p>${element.Direccion}</p>
    </div>
    <div>
      <b>Ciudad: </b><p>${element.Ciudad}</p>
    </div>
    <div>
      <b>Telefono: </b><p>${element.Telefono}</p>
    </div>
    <div>
      <b>Código postal: </b><p>${element.Codigo_Postal}</p>
    </div>
    <div>
      <b>Precio: </b><p>${element.Precio}</p>
    </div>
    <div>
      <b>Tipo: </b><p>${element.Tipo}</p>
    </div>
  </div>
  <div class="card-action right-align">
    <a href="#">Ver más</a>
  </div>
</div>
</div>`)
    });
}