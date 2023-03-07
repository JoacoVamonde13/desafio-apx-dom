function main(){
    createCompHeader(document.querySelector(".header-section"));
    createCompWelcome(document.querySelector(".section-presentacion"));
    //createComponentCard(document.querySelector(".mis-servicios"));
    
    recibirDatosDeContenful().then(function (works) {
      for (const w of works) {
        addWeb(w);
      }
    });

   
  }
  
  main();
