"use strict";

document.querySelector(".hamburger").addEventListener("click", function () {
  const nav = document.querySelector("nav");
  nav.classList.add("nav-open");
});

document.querySelector(".close-nav").addEventListener("click", function () {
  const nav = document.querySelector("nav");
  nav.classList.remove("nav-open");
});

// Media queries
let mediaQueryList = window.matchMedia("(min-width: 675px)");
let deviceIsSmall = window.matchMedia("(max-width: 675px)");

function clearNav(mql) {
  if (mql.matches) {
    // If media query matches
    const navigation = document.querySelector("nav");
    navigation.classList.remove("nav-open");
  }
}

function openMenu(subMenu) {
  const newSubMenu = subMenu.replace(".", "");
  const subMenuElement = document.querySelector(subMenu);
  subMenuElement.classList.add("nav-open");

  document
    .querySelector(`.close-${newSubMenu}`)
    .addEventListener("click", function () {
      closeMenu(subMenu);
    });
}

function closeMenu(subMenu) {
  const subMenuElement = document.querySelector(subMenu);
  subMenuElement.classList.remove("nav-open");
  // subMenuElement.outerHTML = subMenuElement.outerHTML;
}

function removeInvisibility() {
  const menuElement = document.querySelector(".main-menu");
  menuElement.style.display = "flex";
}

function toggleListeners(mql) {
  const announcementMenu = document.getElementById("announcements");
  const educationMenu = document.getElementById("education");
  const servicesMenu = document.getElementById("services");
  const supportMenu = document.getElementById("support");
  if (mql.matches) {
    announcementMenu.addEventListener(
      "click",
      function () {
        openMenu(".sub-menu-1");
      },
      { capture: true }
    );
    educationMenu.addEventListener(
      "click",
      function () {
        openMenu(".sub-menu-2");
      },
      { capture: true }
    );
    servicesMenu.addEventListener(
      "click",
      function () {
        openMenu(".sub-menu-3");
      },
      { capture: true }
    );
    supportMenu.addEventListener(
      "click",
      function () {
        openMenu(".sub-menu-4");
      },
      { capture: true }
    );

    // Make main menu invisible momentarily.
    // Transitioning visibility made the main menu
    // visible and then fade to hidden, when resizing
    // browser from larger to smaller widths
    const menuElement = document.querySelector(".main-menu");
    menuElement.style.display = "none";
    setTimeout(removeInvisibility, 750);
  } else {
    announcementMenu.outerHTML = announcementMenu.outerHTML;
    educationMenu.outerHTML = educationMenu.outerHTML;
    servicesMenu.outerHTML = servicesMenu.outerHTML;
    supportMenu.outerHTML = supportMenu.outerHTML;
    closeMenu(".sub-menu-1");
    closeMenu(".sub-menu-2");
    closeMenu(".sub-menu-3");
    closeMenu(".sub-menu-4");
  }
}

function tempInvisible() {}

// Call listener functions at run time
clearNav(mediaQueryList);
toggleListeners(deviceIsSmall);

// Attach listener functions on state changes
mediaQueryList.addEventListener("change", clearNav);
deviceIsSmall.addEventListener("change", toggleListeners);
