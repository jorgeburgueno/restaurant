

const createMenu = () => {
    const content = document.querySelector("#content");
    const pageContent = document.createElement("div");
    pageContent.classList.add("page-content");

    const heading = document.createElement('h1');
    heading.textContent= "Nuestro Menu";

    const menuList = document.createElement('ul')
    menuList.textContent = "Empanizados";
    const menuItem = document.createElement('li')
    menuItem.textContent = "Mar y Tierra";
    const menuItem2 = document.createElement('li')
    menuItem2.textContent = "Tres quesos";
    const menuItem3 = document.createElement('li')
    menuItem3.textContent = "Cordon blue";

    const menuList2 = document.createElement('ul')
    menuList2.textContent = "Naturales";
    const menuItem4 = document.createElement('li')
    menuItem4.textContent = "Guamuchilito";
    const menuItem5 = document.createElement('li')
    menuItem5.textContent = "Señor Roll";
    const menuItem6 = document.createElement('li')
    menuItem6.textContent = "El inventado";

    menuList.appendChild(menuItem);
    menuList.appendChild(menuItem2);
    menuList.appendChild(menuItem3);

    menuList2.appendChild(menuItem4);
    menuList2.appendChild(menuItem5);
    menuList2.appendChild(menuItem6);

    pageContent.appendChild(heading);
    pageContent.appendChild(menuList);
    pageContent.appendChild(menuList2);
    content.appendChild(pageContent);



}

export default createMenu;
