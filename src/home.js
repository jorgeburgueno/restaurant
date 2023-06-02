

const createHomePage = () => {
    const content = document.querySelector("#content");
    const pageContent = document.createElement("div");
    pageContent.classList.add("page-content");

    //crea la imagen
    const imagen = document.createElement("img");
    imagen.src = "../img/sushi.jpg"
    imagen.height = "300";
    pageContent.appendChild(imagen);

    //crea headline
    const titulo = document.createElement("h1");
    titulo.textContent= "Bienvenido a SUSHI";
    pageContent.appendChild(titulo);

    //crea texto
    const texto = document.createElement("p");
    texto.textContent = "Nuestro restaurante de sushi es un lugar donde podrás disfrutar de la auténtica experiencia culinaria japonesa. Contamos con una amplia variedad de opciones, desde sashimi fresco hasta rollitos de sushi de autor. Nos enorgullece utilizar ingredientes de la más alta calidad y técnicas de preparación tradicionales para brindarte un sabor excepcional. Disfruta de una experiencia gastronómica única en un ambiente tranquilo y elegante, con precios razonables y un servicio excepcional. ¡Ven a visitarnos y prueba el mejor sushi de la ciudad!";
    pageContent.appendChild(texto);
    content.appendChild(pageContent);
    


}
export default createHomePage;