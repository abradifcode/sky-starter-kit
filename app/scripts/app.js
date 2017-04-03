import { Instance } from './components/_template.js';
import { Slick } from 'slick';
import { $ } from 'jquery';


export class Main {

  constructor () {
    console.log(Instance);
  }

}

document.addEventListener('DOMContentLoaded', () => new Main());
