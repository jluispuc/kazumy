function Kazumy(){

}

Kazumy.prototype.viewText = function (id, data) {
  $(id).append('<p>'+data+'</p>');
};

Kazumy.prototype.dataView = function (id, dataJSON) {
  var content = $(id).text();
  arrayString = content.split(" ")

  arrayString.forEach(function (item, index) {
    element = item.substring(1);
    remplazo = '%'+element
    for (var key in dataJSON) {
      alert(dataJSON[key]);
      content = content.replace(remplazo, dataJSON[key])
    }
  });

  $(id).text(content);
};
