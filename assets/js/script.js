function mostreMenu(){
  let menuMobile = document.querySelector('.mobile-menu');
  if(menuMobile.classList.contains('abrir')){
    menuMobile.classList.remove('abrir')
    document.querySelector('.icone').src = "assets/img/menu_white_36dp.svg";
  }else{
    menuMobile.classList.add('abrir');
    document.querySelector('.icone').src = "assets/img/close_white_36dp.svg";
  }
}