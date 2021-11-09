const ic = document.getElementById("categoria1");
const eu = document.getElementById("eeuu");
const ch = document.getElementById("china");
const pf = document.getElementById("productofinal");
const pe = document.getElementById("productoenvio");
var value, value2;

$("#Select1").on("change", function () {
  value = $(this).val();
  sel = $("#Select1 :selected").text();
  console.log(value, sel);
});

$("#Select2").on("change", function () {
  value2 = $(this).val();
  sel2 = $("#Select2 :selected").text();
  console.log(value2, sel2);
});

function calculo( precio, x, xt, preciokg, xte) {
  //var valor = document.getElementById("idvalor").value;
  var precio = document.getElementById("idpeso").value;

  var x,
  xt = 0;
  var preciokg = 0;
  preciokg = value2;

  console.log(preciokg);
  console.log(precio);
  x = preciokg * precio;
  console.log(x);

  //window.alert("El precio final (con envio): $" + (x));

  xte = parseFloat(x) + parseFloat(value);
  //console.log(xte);

  ic.innerHTML = `<div>Categoria: <strong>${sel}</strong></div>`;
  pe.innerHTML = `<div></div>`;
  pf.innerHTML = `<div>Costo total del envío: <strong>USD ${xte}</strong></div>`;

  if (preciokg == 70) {
    eu.innerHTML = `<div class="exclamacion-modal"><strong>o</strong> El costo del envío varía en relación al peso final del paquete</div>`;
  } else eu.innerHTML = `<div </div>`;

  if (preciokg == 85) {
    ch.innerHTML = `<div class="exclamacion-modal"><strong>o</strong> El valor del envío varía según el peso. Consultar para brindar más detalles del envío desde el origen.</div>`;
  } else ch.innerHTML = `<div </div>`;
}
