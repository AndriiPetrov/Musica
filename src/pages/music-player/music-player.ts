import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MediaPlugin, MediaObject } from '@ionic-native/media';

/**
 * Generated class for the MusicPlayerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-music-player',
  templateUrl: 'music-player.html',
})
export class MusicPlayerPage {
  public music = {};
  private songMedia: MediaObject = null;

  constructor(
    private mediaPlugin: MediaPlugin,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    this.music = this.navParams.get('music');
  }

  ionViewDidLoad() {
  }

  playMusic() {
    if (this.songMedia === null) {
      this.songMedia = this.mediaPlugin.create(this.music["music_url"]);
      this.songMedia.play();
    }
  }

  pauseMusic() {
    if (this.songMedia !== null) {
      this.songMedia.pause();
    }
  }

  stopMusic() {
    if (this.songMedia !== null) {
      this.songMedia.stop();
      this.songMedia.release();
      this.songMedia = null;
    }
  }

}
