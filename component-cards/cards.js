function addWeb(params = {}) {
    const templateCard = document.querySelector("#mis-servicios__template");
    const containerCard = document.querySelector(".mis-servicios__cards-container");
  
    templateCard.content.querySelector(".mis-servicios__cards-title").textContent =
      params.title;
    templateCard.content.querySelector(".mis-servicios__card-parrafo").textContent =
      params.description;
    templateCard.content.querySelector(".mis-servicios__img-card1").src = params.image;
  
    const clone = document.importNode(templateCard.content, true);
    containerCard.appendChild(clone);
  }


function recibirDatosDeContenful(){
    return fetch("https://cdn.contentful.com/spaces/k01rzjc5rdh9/environments/master/entries?access_token=88dcmv3icIiydCX8eG7cjCnlBeXl2Tv-n589B3EGU8I&&content_type=contenidoMisServicios"
    )
    .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        const fieldscollections = data.items.map((item) => {
            return {
              title: item.fields.titulo,
              description: item.fields.descripcion,
              image: data.includes.Asset[0].file.url
            };
          });
    
          return fieldscollections;
        });  
      
};



  function createComponentCard(el){
    const   cardEl = document.createElement("div");
     cardEl.innerHTML = `
     <section class="mis-servicios">
    <h2 class="mis-servicios-title__cards">Mis <span> servicios </span> </h2>
    <div class="mis-servicios__cards-container">
    <template id="mis-servicios__template">
       <div class="mis-servicios__cards-individual">
        <img src="./images/image.card1.jpg" alt="" class="mis-servicios__img-card1">
        <h3 class="mis-servicios__cards-title"></h3>
        <p class="mis-servicios__card-parrafo"></p>
        <a href="https://github.com/JoacoVamonde13" class="mis-servicios__link-github">Ver más</a>
      </div>
     </template>
    </div>
   </section>
     `
     el.appendChild(cardEl);
  }