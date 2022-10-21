import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private ElByClassName: ElementRef) { }
  ngAfterViewInit() {
    const menuBtn = (<HTMLElement>this.ElByClassName.nativeElement).querySelector(".menu-btn");
    const hamburger = (<HTMLElement>this.ElByClassName.nativeElement).querySelector(".menu-btn__burger");
    const nav = (<HTMLElement>this.ElByClassName.nativeElement).querySelector(".nav");
    const menuNav = (<HTMLElement>this.ElByClassName.nativeElement).querySelector(".menu-nav");
    const navItems = (<HTMLElement>this.ElByClassName.nativeElement).querySelectorAll(".menu-nav__item");

    const homebtn = (<HTMLElement>this.ElByClassName.nativeElement).querySelector(".homebtn");
    const aboutbtn = (<HTMLElement>this.ElByClassName.nativeElement).querySelector(".aboutbtn");
    const projectsbtn = (<HTMLElement>this.ElByClassName.nativeElement).querySelector(".projectsbtn");
    const contactbtn = (<HTMLElement>this.ElByClassName.nativeElement).querySelector(".contactbtn");


    let showMenu = false;
    if(menuBtn != null) {
      menuBtn.addEventListener('click', toggleMenu);
    }
    if(homebtn != null && aboutbtn != null && projectsbtn != null && contactbtn != null) {
      homebtn.addEventListener('click', toggleMenu);
      aboutbtn.addEventListener('click', toggleMenu);
      projectsbtn.addEventListener('click', toggleMenu);
      contactbtn.addEventListener('click', toggleMenu);
    }
    
    function toggleMenu(this: any) {
      this.classList.add('active');
      //disable all active attributes- to set afterwards again
      if(homebtn != null && aboutbtn != null && projectsbtn != null && contactbtn != null){
        homebtn.removeAttribute("style");
        aboutbtn.removeAttribute("style");
        projectsbtn.removeAttribute("style");
        contactbtn.removeAttribute("style");
      }

      this.setAttribute("style", "color: #c84e12;"); //not workin

      if(!showMenu) {
        if(hamburger != null && nav != null && menuNav != null){
          console.log("enter");

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
    
  }
  ngOnInit(): void {
    const homebtn = (<HTMLElement>this.ElByClassName.nativeElement).querySelector(".homebtn");
    if(homebtn != null) {
      homebtn.setAttribute("style", "color: #c84e12;");
    }
  }

}

//------------------------------------------------------------------------------


