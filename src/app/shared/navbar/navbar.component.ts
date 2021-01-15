import { Component, OnInit, ElementRef } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    private toggleButton: any;
    private sidebarVisible: boolean;

    constructor(public location: Location, private element : ElementRef) {
        this.sidebarVisible = false;
    }

    ngOnInit() {
        const navbar: HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
    }
    sidebarOpen() {
        // const toggleButton = this.toggleButton;
        // const html = document.getElementsByTagName('html')[0];
        // setTimeout(function(){
        //     toggleButton.classList.add('toggled');
        // }, 500);
        // html.classList.add('nav-open');
        // this.sidebarVisible = true; 
        const navBarToggler = document.getElementById('navbarToggler');
        navBarToggler.classList.add('nav-open-panel');
        const close = document.getElementById('closebtnid');
        close.classList.remove('hidden');
        this.sidebarVisible = true;
    };
    sidebarClose() {
        // const html = document.getElementsByTagName('html')[0];
        // // console.log(html);
        // this.toggleButton.classList.remove('toggled');
        // this.sidebarVisible = false;
        // html.classList.remove('nav-open');
        const navBarToggler = document.getElementById('navbarToggler');
        this.sidebarVisible = false;
        navBarToggler.classList.remove('nav-open-panel');
        const close = document.getElementById('closebtnid');
        close.classList.add('hidden');
    };
    sidebarToggle() {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        } else {
            this.sidebarClose();
        }
    };
    isHome() {
      var titlee = this.location.prepareExternalUrl(this.location.path());
      if(titlee.charAt(0) === '#'){
          titlee = titlee.slice( 1 );
      }
        if( titlee === '/home' ) {
            return true;
        }
        else {
            return false;
        }
    }
    isDocumentation() {
      var titlee = this.location.prepareExternalUrl(this.location.path());
      if(titlee.charAt(0) === '#'){
          titlee = titlee.slice( 1 );
      }
        if( titlee === '/documentation' ) {
            return true;
        }
        else {
            return false;
        }
    }
    toggleMenu(btn: any, collapseSection: any) {
        const collapseOneBtn = document.getElementById(btn);
        const collapseOne = document.getElementById(collapseSection);
        if(collapseOneBtn.children[0].classList.toString().indexOf('fa-plus') != -1) {
            collapseOneBtn.children[0].classList.add('fa-minus');
            collapseOneBtn.children[0].classList.remove('fa-plus');
            collapseOne.classList.remove('hidden');
            collapseOne.classList.add('show');
        }else {
            collapseOneBtn.children[0].classList.add('fa-plus');
            collapseOneBtn.children[0].classList.remove('fa-minus');
            collapseOne.classList.add('hidden');
            collapseOne.classList.remove('show');
        }

    }
}
