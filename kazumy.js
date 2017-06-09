function Kazumy(){

}

Kazumy.prototype.textView = function (id, data) {
  $(id).append('<p>'+data+'</p>');
};

Kazumy.prototype.dataView = function (id, dataJSON) {
  var content = $(id).text();
  content = content.trim()
  var arrayString = content.split(" ")

  arrayString.forEach( function (item, index) {
      var cadena = item
      element = cadena.replace(/[.,;:]/gi, "")
      element = element.substring(1, element.length-1);

      if(dataJSON[element.toString()] != undefined){
        remplazo = '['+element+']'
        content = content.replace(remplazo, dataJSON[element.toString()])
      }
  });

  $(id).text(content);
};
