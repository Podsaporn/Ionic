import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {UserdataProvider} from '../../providers/userdata/userdata';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;
  public userlists : Users[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public userdata : UserdataProvider) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
    this.userdata.get_user().subscribe((response) => {
      // console.log("log :"+response);
      this.userlists = response;
    });
  }

  /*
  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ListPage, {
      item: item
    });
  }
  */
}


interface Users {
  id: number;
  name: string;
  username: string;
  email: string;
  adress: {};
}