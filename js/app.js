

var platzom = function (str){

  let translation = str;
  //si la palabra termia en "ar", se le quitan
  if(str.toLowerCase().endsWith('ar')){
    translation = str.slice(0,-2);
  }
  return translation;
}

var cargaPagina = function (){
  // let btn = document.getElementById('enviaInfo');
  // btn.addEventListener("click",platzom(valueString))
  //
  let palabra = platzom("caminar");
  console.log(palabra)

}

window.onload =function (){
  cargaPagina();
}
