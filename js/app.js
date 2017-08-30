

var platzom = function (str){

  let translation = str;
  //si la palabra termia en "ar", se le quitan
  if(str.toLowerCase().endsWith('ar')){
    translation = str.slice(0,-2);
  }
  // Si la  palabra incia con "z", se le añade "pe" al final
  if(str.toLowerCase().startsWith('z')){
    translation += 'pe';
  }
  //si la palabra traducida tiene 10 o más letras
  //Se debe partir a la mitad y unir con guión del medio
  const length = translation.length;
  if(translation.length >=10){
    const firsHalf= translation.slice(0,Math.round(length/2));
    const secondHalf = translation.slice( Math.round(length/2))
    translation =  `${firsHalf}-${secondHalf}`
  }
  return translation;
}

var cargaPagina = function (){
  // let btn = document.getElementById('enviaInfo');
  // btn.addEventListener("click",platzom(valueString))
  //
  let palabra = platzom("caminar");
  console.log(platzom("Zorro"));
  console.log(platzom("Zarpar"))
  console.log(platzom("abecedario"))


}

window.onload =function (){
  cargaPagina();
}
