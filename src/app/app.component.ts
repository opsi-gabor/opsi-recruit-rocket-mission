import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  constructor()
  {
    //this.playAudio();
  }

  private playAudio()
  {
    let audio = new Audio();
    audio.src = "../../../assets/audio/mixkit-glitchy-sci-fi-bass-suspense-686.wav";
    audio.load();
    audio.play();
  }
}
