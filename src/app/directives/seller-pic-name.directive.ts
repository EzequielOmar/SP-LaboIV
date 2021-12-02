import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { UserId } from '../interfaces/user';

@Directive({
  selector: '[appSellerPicName]',
})
export class SellerPicNameDirective implements OnInit {
  @Input() seller!: UserId;

  constructor(private el: ElementRef, private r2: Renderer2) {}

  ngOnInit() {
    let img = this.r2.createElement('img');
    img.src = this.seller.data.img_urls[0];
    img.alt = 'alt text';
    this.r2.setStyle(img, 'width', '2rem');
    let mail = this.r2.createText(this.seller.data.mail);
    this.r2.appendChild(this.el.nativeElement, img);
    this.r2.appendChild(this.el.nativeElement, mail);
  }
}
