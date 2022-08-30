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
    this.playAudio()
  }

  private playAudio()
  {
    let audio = new Audio();
    audio.src = "../../../assets/audio/mixkit-science-fiction-computer-voice-238.wav";
    audio.load();
    audio.play();
  }
}
