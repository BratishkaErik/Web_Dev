export interface Product {
    id: number;
    name: string;
    image: string;
    real_link: string,
    price: number;
    description: string;
    rating: number;
}

export const products: Product[] = [
    {
        id: 1,
        name: 'Абрикосы',
        image: "https://resources.cdn-kaspi.kz/img/m/p/h81/h97/84742986235934.jpg?format=gallery-medium",
        real_link: "https://kaspi.kz/shop/p/mcc-trade-abrikos-otbornyi-200-g-101289935/?c=750000000",
        price: 799,
        description: 'Лучшие в мире',
        rating: 5.0
    },
    {
        id: 2,
        name: 'Iphone PRO MAX',
        image: "https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium",
        real_link: "https://kaspi.kz/shop/p/apple-iphone-13-128gb-midnight-chernyi-102298404/?c=750000000",
        price: 699,
        description: 'A great phone with one of the best cameras',
        rating: 7.0
    },
    {
        id: 3,
        name: 'Iphone mini',
        image: "https://resources.cdn-kaspi.kz/img/m/p/h06/hb7/64071235403806.jpg?format=gallery-medium",
        real_link: "https://kaspi.kz/shop/p/apple-iphone-11-64gb-slim-box-belyi-100692384/?c=750000000",
        price: 299,
        description: 'Уменьшенный одешевленный вариант',
        rating: 10.0
    },
    {
        id: 3,
        name: 'Iphone mini',
        image: "https://resources.cdn-kaspi.kz/img/m/p/h06/hb7/64071235403806.jpg?format=gallery-medium",
        real_link: "https://kaspi.kz/shop/p/apple-iphone-11-64gb-slim-box-belyi-100692384/?c=750000000",
        price: 299,
        description: 'Уменьшенный одешевленный вариант',
        rating: 10.0
    },
    {
        id: 4,
        name: 'Samsung S20+',
        image: "https://resources.cdn-kaspi.kz/img/m/p/hfe/h35/64006416695326.jpg?format=gallery-medium",
        real_link: "https://kaspi.kz/shop/p/samsung-galaxy-s20-12-128gb-chernyi-101207141/?c=750000000",
        price: 579,
        description: 'Флагман',
        rating: 1.0
    },
    {
        id: 5,
        name: 'Samsung S23+',
        image: "https://resources.cdn-kaspi.kz/img/m/p/ha4/h32/69067239096350.jpg?format=gallery-medium",
        real_link: "https://kaspi.kz/shop/p/samsung-galaxy-s23-5g-8-gb-512-gb-bezhevyi-108915980/?c=750000000",
        price: 1000,
        description: 'Улучшенный одороженный вариант',
        rating: 5
    },
    {
        id: 6,
        name: 'Apple 20W адаптер',
        image: "https://resources.cdn-kaspi.kz/img/m/p/hb3/he6/80523586928670.png?format=gallery-medium",
        real_link: "https://kaspi.kz/shop/p/apple-20w-usb-c-power-adapter-belyi-100984093/?c=750000000",
        price: 10,
        description: 'Зарядник для айфонов',
        rating: (6 / 7) * 10
    },
    {
        id: 7,
        name: 'Пылесос Deerma DX700 белый',
        image: "https://resources.cdn-kaspi.kz/img/m/p/hdb/h2f/63803859566622.jpg?format=gallery-medium",
        real_link: "https://kaspi.kz/shop/p/deerma-dx700-belyi-3701383/?c=750000000",
        price: 123,
        description: 'Вертикальный пылесос',
        rating: (4 / 5) * 10
    },
    {
        id: 8,
        name: 'Midea 13A оранжефыйй',
        image: "https://resources.cdn-kaspi.kz/img/m/p/h0c/hb5/82414790377502.jpg?format=gallery-medium",
        real_link: "https://kaspi.kz/shop/p/midea-13a-oranzhevyi-seryi-112224617/?c=750000000",
        price: 123,
        description: 'Вертикальный пылесос',
        rating: (4 / 5) * 10
    },
    {
        id: 9,
        name: 'Дрон Lead Honor Е88 черный',
        image: "https://resources.cdn-kaspi.kz/img/m/p/h14/h9a/64382215749662.jpg?format=gallery-medium",
        real_link: "https://kaspi.kz/shop/p/lead-honor-e88-chernyi-104266203/?c=750000000",
        price: 0,
        description: 'Квадрокоптер',
        rating: (4 / 5) * 10
    },
    {
        id: 10,
        name: '999 999B черный',
        image: "https://resources.cdn-kaspi.kz/img/m/p/h97/hbc/64264468856862.jpg?format=gallery-medium",
        real_link: "https://kaspi.kz/shop/p/999-999b-chernyi-103949669/?c=750000000",
        price: 12000,
        description: 'Детский электромобиль',
        rating: 7.34
    }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/