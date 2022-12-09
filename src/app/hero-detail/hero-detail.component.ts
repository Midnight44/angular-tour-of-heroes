import { Component, OnInit, Input } from '@angular/core';
//angular.io create a feature
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero?: Hero;

  constructor() { }

  ngOnInit(): void {
  }

}