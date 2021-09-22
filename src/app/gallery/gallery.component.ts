import { Component, OnInit } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { Image } from 'src/app/models';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  public images = [
    {
      url: './assets/one.jpg',
      row: '1/3'
    },
    {
      url: './assets/two.jpg'
    },
    {
      url: './assets/three.jpg'
    },
    {
      url: './assets/four.jpg'
    },
    {
      url: './assets/five.jpg'
    },
    {
      url: './assets/six.jpg',
      row: '2/4',
      col: '3'
    },
    {
      url: './assets/seven.jpg'
    }
  ] as Array<Image>;

  constructor() { }

  ngOnInit(): void {
  }

}
