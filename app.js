function showMenuToggle(toggleId, menuId) {
  const menuToggle = document.getElementById(toggleId);
  const menuID = document.getElementById(menuId);

  menuToggle.addEventListener('click', () => {
    menuID.classList.toggle('show-menu');
    menuToggle.classList.toggle('show-icon');
  });
}

showMenuToggle('toggle-menu', 'navbar-menu');
