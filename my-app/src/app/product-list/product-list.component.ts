import {Component} from '@angular/core';

import {Product, products} from '../products';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductListComponent {

    products: Product[] = [...products];

    share(link: string) {
        const url = `https://t.me/share/url?url=${link}&text=blabla`
        window.open(url, '_blank');
        window.alert('The product has been shared!');
    }

    onNotify() {
        window.alert('You will be notified when the product goes on sale');
    }

    i: number = 0;

    nextImage() {
        if (this.i < this.products.length - 1) {
            this.i += 1;
        } else {
            this.i = 0;
        }
    }

    previousImage() {
        if (this.i > 0) {
            this.i -= 1;
        } else {
            this.i = this.products.length - 1;
        }
    }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/