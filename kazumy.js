function Kazumy(){

}

Kazumy.prototype.textView = function (id, data) {
  $(id).append('<p>'+data+'</p>');
}

Kazumy.prototype.dataView = function (id, arrayData) {
  var content = $(id).text();
  content = content.trim();
  var arrayString = content.split(" ");

  arrayString.forEach( function (item, index) {
      var cadena = item;
      element = cadena.replace(/[.,;:]/gi, "");
      element = element.substring(1, element.length-1);

      if(arrayData[element.toString()] != undefined){
        remplazo = '['+element+']';
        content = content.replace(remplazo, arrayData[element.toString()]);
      }
  });

  $(id).text(content);
}
