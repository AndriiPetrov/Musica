import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Media, MediaObject } from '@ionic-native/media';
import { File } from '@ionic-native/file';

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
  private songMedia: any = null;
  private isMusicPaused = false;

  constructor(
    private file: File,
    private mediaPlugin: Media,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    this.music = this.navParams.get('music');
  }

  ionViewDidLoad() {
  }

  ionViewWillLeave() {
    this.stopMusic();
  }

  playMusic() {
    console.log(this.music);
    debugger;
    if (this.songMedia === null) {
      this.songMedia = new Media();
      this.songMedia = this.mediaPlugin.create((<any>this.music).music_url.replace(/^file:\/\//, ''));
      this.songMedia.play();
    } else {
      if (this.isMusicPaused === true) {
        this.songMedia.play();
        this.isMusicPaused = false;
      }
    }
  }

  pauseMusic() {
    if (this.songMedia !== null) {
      this.songMedia.pause();
      this.isMusicPaused = true;
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
