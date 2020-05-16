import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {



  sonidos = [
              [
                {src: "../../../assets/raw/mp3/lluvia.mp3", img: "assets/icon/lluvia.png", volume: 1, div: "transparent", audio: null},
                {src: "../../../assets/raw/ogg/thunders.ogg", img: "assets/icon/tormenta.png", volume: 1, div: "transparent", audio: null},
                {src: "../../../assets/raw/ogg/wind.ogg", img: "assets/icon/viento.png", volume: 1, div: "transparent", audio: null}
              ], [
                {src: "../../../assets/raw/mp3/lenia.mp3", img: "assets/icon/lena.png", volume: 1, div: "transparent", audio: null},
                {src: "../../../assets/raw/mp3/caminando.mp3", img: "assets/icon/caminar.png", volume: 1, div: "transparent", audio: null},
                {src: "../../../assets/raw/ogg/night.ogg", img: "assets/icon/luna.png", volume: 1, div: "transparent", audio: null},
              ], [
                {src: "../../../assets/raw/mp3/agua.mp3", img: "assets/icon/ola.png", volume: 1, div: "transparent", audio: null},
                {src: "../../../assets/raw/mp3/mar.mp3", img: "assets/icon/playa.png", volume: 1, div: "transparent", audio: null},
                {src: "../../../assets/raw/mp3/pajaros.mp3", img: "assets/icon/pajaro.png", volume: 1, div: "transparent", audio: null},
              ], [
                {src: "../../../assets/raw/mp3/arboles.mp3", img: "assets/icon/viento-arbol.png", volume: 1, div: "transparent", audio: null},
                {src: "../../../assets/raw/ogg/train.ogg", img: "assets/icon/ferrocarril.png", volume: 1, div: "transparent", audio: null},
                {src: "../../../assets/raw/mp3/granja.mp3", img: "assets/icon/granja.png", volume: 1, div: "transparent", audio: null},
              ]
            ]


  constructor() {
    
  }


  playClick(Numfila, NumCol){
    if(this.sonidos[Numfila][NumCol].div == "transparent"){
      this.sonidos[Numfila][NumCol].audio = new Audio();
      this.sonidos[Numfila][NumCol].audio.src = this.sonidos[Numfila][NumCol].src;
      this.sonidos[Numfila][NumCol].audio.play();
      this.sonidos[Numfila][NumCol].audio.volume = this.sonidos[Numfila][NumCol].volume;
      this.sonidos[Numfila][NumCol].audio.loop = true;
      this.sonidos[Numfila][NumCol].div = "#5BDBAE"
    }
    else{
      this.sonidos[Numfila][NumCol].audio.pause();
      this.sonidos[Numfila][NumCol].div = "transparent"
    }
  }

  changeRange(e, Numfila, NumCol){
    this.sonidos[Numfila][NumCol].volume = e.detail.value/10;
    this.sonidos[Numfila][NumCol].audio.volume = e.detail.value/10
  }


}



/**
 * 
 * https://mega.nz/folder/DJVwSADC#6zVGiuO3wdRRKKAv2l-Raw/folder/uBVjRKrR
 */