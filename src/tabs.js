import createHomePage from "./home";
import createMenu from "./menu";
import createNosotros from "./nosotros";

const createTabs = () => {

   const content = document.querySelector('#content');

   const tab1 = document.createElement('div');
   const tab2 = document.createElement('div');
   const tab3 = document.createElement('div');

   tab1.setAttribute("id", "home-btn");
   tab2.setAttribute("id", "menu-btn");
   tab3.setAttribute("id", "nosotros-btn");

   tab1.classList.add("tab");
   tab2.classList.add("tab");
   tab3.classList.add("tab");

   tab1.textContent = "Home";
   tab2.textContent = "Menu";
   tab3.textContent = "Nosotros";

   content.appendChild(tab1);
   content.appendChild(tab2);
   content.appendChild(tab3);

   tab1.addEventListener('click', () => {
    clearContent();
    createHomePage();
   })
   tab2.addEventListener('click', () => {
    clearContent();
    createMenu();
   })
   tab3.addEventListener('click', () => {
    clearContent();
    createNosotros();
   })
}

function clearContent(){
    const content = document.querySelector("#content");
    const pageContent = document.querySelector(".page-content")
    if (pageContent) {
        content.removeChild(pageContent)
    }
}
export default createTabs;