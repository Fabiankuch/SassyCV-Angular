import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

//------------------------------------------------------------------------------

const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav__item');
let showMenu = false;

if(menuBtn != null) {
  menuBtn.addEventListener('click', toggleMenu);
}


function toggleMenu() {
    if(!showMenu) {
      if(hamburger != null && nav != null && menuNav != null){
        hamburger.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
        navItems.forEach(item => {
            item.classList.add('open');
        })
        showMenu = true;
      }
    }else{
      if(hamburger != null && nav != null && menuNav != null){
        hamburger.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        navItems.forEach(item => {
            item.classList.remove('open');
        })
        showMenu = false;
      }   
    }
}