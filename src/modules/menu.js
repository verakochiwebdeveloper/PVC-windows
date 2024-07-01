const menu = () => {
  const menuBtn = document.querySelector(".menu");
  const menu = document.querySelector("menu");
  const closeBtn = menu.querySelector(".clocse-btn");
  const menuItems = menu.querySelector("ul>li>a");

  const handlmenu = () => {
    menu.classList.toggle("menu-active");
  };

  menuBtn.addEventListener("click", handlmenu);

  closeBtn.addEventListener("click", handlmenu);

  menuItems.forEach((menuItem) => {
    menuItem[i].addEventListener("click", handlmenu);
  });
};

export default menu;
