import { Component, OnInit } from '@angular/core';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { ETheme } from './enums/ETheme.enum';

@Component({
  selector: 'app-poke-header',
  templateUrl: './poke-header.component.html',
  styleUrls: ['./poke-header.component.scss']
})
export class PokeHeaderComponent implements OnInit {

  public faMoon = faMoon;
  public faSun = faSun;

  public icon = ETheme.ICON_SUN;

  public currentTheme = document.body.classList.contains

  constructor() { }

  ngOnInit(): void {
    if(document.body.classList.contains('dark-theme')){
      this.icon = ETheme.ICON_MOON
    } else {
      this.icon = ETheme.ICON_SUN
    }
  }

  public toggle() {
    const theme = document.body.classList.toggle('dark-theme');

    if (theme) {
      return (this.icon = ETheme.ICON_MOON);
    }

    return (this.icon = ETheme.ICON_SUN);
  }

}
