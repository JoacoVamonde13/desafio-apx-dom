function recibirDatosDeContenful(){
    return fetch("https://cdn.contentful.com/spaces/k01rzjc5rdh9/environments/master/entries?access_token=88dcmv3icIiydCX8eG7cjCnlBeXl2Tv-n589B3EGU8I&&content_type=contenidoDeLaHome"
    )
    .then((res) => {
      return res.json();
    })
    .then((data)=> {
       console.log(data);
        const fieldscollections = data.items.map((item) => {
          console.log(item.fields.tittle);
            return { 
              title: item.fields.tittle,
              description: item.fields.descripcion,
              image: data.includes.Asset[1].fields.file.url
            };
          });
    
          return fieldscollections;
        }); 
      };
      
 




function createCompWelcome(el){
    const welcomeEl = document.createElement("div")
    welcomeEl.innerHTML = `
    <template class="template__presentacion>
    <section class="section-presentacion">
    <div class="presentacion-title__content">
    <h2 class="presentacion-title">
    <span>Hola</span><br/>
    soy Joaco
    </h2>
    <div class="div-img__presentacion-title">
    <img src="./images/image 1.png"  class="img__presentacion-title"  alt="">
    </div>
    </div>
    </section>
    </template>
    `
   el.appendChild(welcomeEl);
   
}


 
    