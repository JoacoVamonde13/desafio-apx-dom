function abrirMenuOculto(){
    const abrirMenuEl = document.querySelector(".menu-hamburguesa-content__header-section")
    const menuEl = document.querySelector(".menu-oculto__contenedor")
    const cerrarMenuEl = document.querySelector(".menu-oculto__contenedor-boton-cerrar")
  
    abrirMenuEl.addEventListener("click", ()=>{
      menuEl.style.display = "flex";
    });
    
    cerrarMenuEl.addEventListener("click", ()=>{
      menuEl.style.display = "";
    });
  
  
  }
  
  
  
  function createCompHeader(el){
      const header = document.createElement("div");
   
      header.innerHTML = `
      <header class="header">
      <a href="./index.html" rel="noopener noreferrer">
          <img src="https://i.ytimg.com/vi/NfkQzHHuXb0/maxresdefault.jpg" alt="" class="img__header-section">
          </a>
          <div class="menu-hamburguesa-content__header-section">
              <div class="menu-hamburguesa__header-section"></div>
              <div class="menu-hamburguesa__header-section"></div>
              <div class="menu-hamburguesa__header-section"></div>
          </div>
          <div class="menu-oculto__contenedor">
              <div class="menu-oculto__contenedor-boton">
                  <button class="menu-oculto__contenedor-boton-cerrar"></button>
              </div>
              <div class="menu-oculto__options">
                  <a href="./pages-portfolio/portfolio.html" class="menu-oculto__opciones">Portfolio</a>
                  <a href="./pages-services/services.html" class="menu-oculto__opciones">Servicios</a>
                  <a href="./pages-contact/contact.html" class="menu-oculto__opciones">Contacto</a>
                  <a href="./index.html" class="menu-oculto__opciones">Home</a>
              </div>
          </div>
          <div class="menu-escritorio">
              <a href="./pages-portfolio/portfolio.html" class="menu-escritorio__opciones">PORTFOLIO</a>
              <a href="./pages-services/services.html" class="menu-escritorio__opciones">SERVICIOS</a>
              <a href="./pages-contact/contact.html" class="menu-escritorio__opciones">CONTACTO</a>
          </div>
          </header>
      ` 
         el.appendChild(header);
         abrirMenuOculto();
   }