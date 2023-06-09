

const createHomePage = () => {
    const content = document.querySelector("#content");
    const pageContent = document.createElement("div");
    pageContent.classList.add("page-content");

     //crea headline
     const titulo = document.createElement("h1");
     titulo.textContent= "Bienvenido a SUSHI";
     pageContent.appendChild(titulo);
    
    
    //crea la imagen
    const imagen = document.createElement("img");
    imagen.src = "../img/sushi.jpg"
    imagen.height = "300";
    pageContent.appendChild(imagen);
    


    //crea texto
    const texto = document.createElement("p");
    texto.textContent = "Disfruta de una experiencia japonesa auténtica.";
    pageContent.appendChild(texto);
    content.appendChild(pageContent);
    texto.classList.add("texto")
    


}
export default createHomePage;