

var platzom = function (str){

  let translation = str;
  //si la palabra termia en "ar", se le quitan
  if(str.toLowerCase().endsWith('ar')){
    translation = str.slice(0,-2);
  }
  return translation;
}

var cargaPagina = function (){
  console.log("hola mundo");
  //let string = document.getElementById('str').val;
  console.log(string);
}

window.onload =function (){
  cargaPagina();
}
