
const createNosotros = () => {
    const content = document.querySelector("#content");
    const pageContent = document.createElement("div");
    pageContent.classList.add("page-content");
    
    const about = document.createElement('div');
    about.setAttribute("id", "about");
    
    about.innerHTML = `<div class="hero">
    <h1>Sobre Nosotros</h1>    
  </div>
  <div class="info">
  Nuestro restaurante de sushi es un lugar donde podrás disfrutar de la auténtica experiencia culinaria japonesa. Contamos con una amplia variedad de opciones, desde sashimi fresco hasta rollitos de sushi de autor. Nos enorgullece utilizar ingredientes de la más alta calidad y técnicas de preparación tradicionales para brindarte un sabor excepcional. Disfruta de una experiencia gastronómica única en un ambiente tranquilo y elegante, con precios razonables y un servicio excepcional. ¡Ven a visitarnos y prueba el mejor sushi de la ciudad!
  </div>
  <div class="hero">
    <h1>Ubicacion </h1>    
  </div>
  <div class="ubicacion">
  <p>Av. asdasda 2912, col. asdokas</p>
  <p>Horacio de atencion: 12:00 pm a 12:00 am</p>
  </div>`


   

    

   
    pageContent.appendChild(about);
    
   
    content.appendChild(pageContent);

}

export default createNosotros;