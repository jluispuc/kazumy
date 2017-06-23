function Kazumy() {};
/**
*
*Muestra texto de tag <p> en el elemento indicado mediante el Id.
*
*@id; id del elemento del DOM
*@data; texto a mostrar
*/
Kazumy.prototype.textView = function(id, data) {
  $(id).append('<p>' + data + '</p>');
}
/**
*
*Especie de interpolación de datos en el elemento indicado por el Id.
*
*@id; id del elemento del DOM
*@data; Arreglo de datos a mostrar
*/
Kazumy.prototype.dataView = function(id, arrayData) {
  var content = $(id).text();
  content = content.trim();
  var arrayString = content.split(" ");

  arrayString.forEach(function(item, index) {
    var cadena = item;
    element = cadena.replace(/[!¡/()¿?.,;:]/gi, "");
    element = element.substring(1, element.length - 1);

    if (arrayData[element.toString()] != undefined) {
      remplazo = '[' + element + ']';
      content = content.replace(remplazo, arrayData[element.toString()]);
    }
  });

  $(id).text(content);
}

Kazumy.prototype.ComponentSelect = function(data) {
  class SelectK extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      this._updateRendering();
    }

    _updateRendering(){
      var select = document.createElement('select');
      select.id = "K";

      for (var i = 0; i < data.length; i++) {
        var option = document.createElement('option');
        option.value = i;
        option.innerText = data[i];
        select.add(option);
      }
      this.append(select);
    }

  }
  window.customElements.define('select-k', SelectK);
}
