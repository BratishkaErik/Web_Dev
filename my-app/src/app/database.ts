import {Category} from "./product-item/component";

export const initial_categories: Category[] = [
    new Category("Еда", [
        {
            name: 'Абрикосы',
            images:
                [
                    "https://resources.cdn-kaspi.kz/img/m/p/h81/h97/84742986235934.jpg?format=gallery-medium",
                    "https://resources.cdn-kaspi.kz/img/m/p/hab/h5d/84742986268702.jpg?format=gallery-medium"
                ],
            real_link: "https://kaspi.kz/shop/p/mcc-trade-abrikos-otbornyi-200-g-101289935/?c=750000000",
            price: 799,
            description: 'Лучшие в мире',
            rating: 5.0
        },
        {
            name: "Ананас",
            images: [
                "https://resources.cdn-kaspi.kz/img/m/p/hb6/hc6/63608264785950.jpg?format=gallery-medium",
            ],
            real_link: "https://kaspi.kz/shop/p/magnum-ananas-kosta-rika-101674433/?c=750000000",
            price: 799,
            description: "Лучший в мире",
            rating: 10.0
        },
        {
            name: "Бананы",
            images: [
                "https://resources.cdn-kaspi.kz/img/m/p/h2b/h81/64938401038366.jpg?format=gallery-medium",
            ],
            real_link: "https://kaspi.kz/shop/p/fruktomanija-banan-ekvador-1-kg-104266018/?c=750000000",
            price: 79,
            description: "Лучшие в мире",
            rating: 10.0
        },
        {
            name: "Картофель",
            images: ["https://resources.cdn-kaspi.kz/img/m/p/h6e/haa/79946309763102.jpg?format=gallery-medium"],
            real_link: "https://kaspi.kz/shop/p/fruktomanija-kartofel-kazahstan-109822345/?c=750000000",
            price: 9,
            description: "Вкуснейший в мире",
            rating: 10.0
        },
        {
            name: "Корень имбиря",
            images: ["https://resources.cdn-kaspi.kz/img/m/p/hb5/hd3/64316830023710.jpg?format=gallery-medium"],
            real_link: "https://kaspi.kz/shop/p/magnum-koren-imbirja-kitai-101675852/?c=750000000",
            price: 5000,
            description: "Полезнейший в мире",
            rating: 10.0
        }
    ]),
    new Category("Телефоны и зарядные устройства", [
        {
            name: 'Iphone PRO MAX',
            images: [
                "https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium",
                "https://resources.cdn-kaspi.kz/img/m/p/h35/h8f/84378448232478.jpg?format=gallery-medium",
                "https://resources.cdn-kaspi.kz/img/m/p/h3d/h8e/64208874405918.jpg?format=gallery-medium",
                "https://resources.cdn-kaspi.kz/img/m/p/hfe/h17/64208876634142.jpg?format=gallery-medium",
            ],
            real_link: "https://kaspi.kz/shop/p/apple-iphone-13-128gb-midnight-chernyi-102298404/?c=750000000",
            price: 699,
            description: 'A great phone with one of the best cameras',
            rating: 7.0
        },
        {
            name: 'Iphone mini',
            images: ["https://resources.cdn-kaspi.kz/img/m/p/h06/hb7/64071235403806.jpg?format=gallery-medium"],
            real_link: "https://kaspi.kz/shop/p/apple-iphone-11-64gb-slim-box-belyi-100692384/?c=750000000",
            price: 299,
            description: 'Уменьшенный одешевленный вариант',
            rating: 10.0
        },
        {
            name: 'Samsung S20+',
            images: ["https://resources.cdn-kaspi.kz/img/m/p/hfe/h35/64006416695326.jpg?format=gallery-medium"],
            real_link: "https://kaspi.kz/shop/p/samsung-galaxy-s20-12-128gb-chernyi-101207141/?c=750000000",
            price: 579,
            description: 'Флагман',
            rating: 1.0
        },
        {
            name: 'Samsung S23+',
            images: ["https://resources.cdn-kaspi.kz/img/m/p/ha4/h32/69067239096350.jpg?format=gallery-medium"],
            real_link: "https://kaspi.kz/shop/p/samsung-galaxy-s23-5g-8-gb-512-gb-bezhevyi-108915980/?c=750000000",
            price: 1000,
            description: 'Улучшенный одороженный вариант',
            rating: 5
        },
        {
            name: 'Apple 20W адаптер',
            images: ["https://resources.cdn-kaspi.kz/img/m/p/hb3/he6/80523586928670.png?format=gallery-medium"],
            real_link: "https://kaspi.kz/shop/p/apple-20w-usb-c-power-adapter-belyi-100984093/?c=750000000",
            price: 10,
            description: 'Зарядник для айфонов',
            rating: (6 / 7) * 10
        }
    ]),
    new Category("Бытовая техника", [
        {
            name: 'Пылесос Deerma DX700 белый',
            images: ["https://resources.cdn-kaspi.kz/img/m/p/hdb/h2f/63803859566622.jpg?format=gallery-medium"],
            real_link: "https://kaspi.kz/shop/p/deerma-dx700-belyi-3701383/?c=750000000",
            price: 123,
            description: 'Вертикальный пылесос',
            rating: (4 / 5) * 10
        },
        {
            name: 'Midea 13A оранжевый',
            images: ["https://resources.cdn-kaspi.kz/img/m/p/h0c/hb5/82414790377502.jpg?format=gallery-medium"],
            real_link: "https://kaspi.kz/shop/p/midea-13a-oranzhevyi-seryi-112224617/?c=750000000",
            price: 123,
            description: 'Вертикальный пылесос',
            rating: (4 / 5) * 10
        },
        {
            name: "Sunqar SQ-1100 черный",
            images: ["https://resources.cdn-kaspi.kz/img/m/p/h12/h90/80847194161182.jpg?format=gallery-medium"],
            real_link: "https://kaspi.kz/shop/p/sunqar-sq-1100-chernyi-110442601/?c=750000000",
            price: 10000,
            description: "Мультиварка",
            rating: 8.7
        },
        {
            name: "Clatronic EK 3497 белый",
            images: ["https://resources.cdn-kaspi.kz/img/m/p/h8f/h92/64143815868446.jpg?format=gallery-medium"],
            real_link: "https://kaspi.kz/shop/p/clatronic-ek-3497-belyi-102386935/?c=750000000",
            price: 26900,
            description: "Яйцеварка",
            rating: 4.0
        },
        {
            name: "SOKANY 03695 черный",
            images: ["https://resources.cdn-kaspi.kz/img/m/p/h43/h3f/64414106746910.jpg?format=gallery-medium"],
            real_link: "https://kaspi.kz/shop/p/vafel-nitsa-sokany-03695-chernyi-103501950/?c=750000000",
            price: 10430,
            description: "Вафельница",
            rating: 7.5
        }
    ]),
    new Category("Дроны и игрушки", [
        {
            name: 'Дрон Lead Honor Е88 черный',
            images: ["https://resources.cdn-kaspi.kz/img/m/p/h14/h9a/64382215749662.jpg?format=gallery-medium"],
            real_link: "https://kaspi.kz/shop/p/lead-honor-e88-chernyi-104266203/?c=750000000",
            price: 0,
            description: 'Квадрокоптер',
            rating: (4 / 5) * 10
        },
        {
            name: '999 999B черный',
            images: ["https://resources.cdn-kaspi.kz/img/m/p/h97/hbc/64264468856862.jpg?format=gallery-medium"],
            real_link: "https://kaspi.kz/shop/p/999-999b-chernyi-103949669/?c=750000000",
            price: 12000,
            description: 'Детский электромобиль',
            rating: 7.34
        },
        {
            name: "Zabiaka Попрыгун Зебра 492517",
            images: ["https://resources.cdn-kaspi.kz/img/m/p/hb6/hcf/64098089238558.jpg?format=gallery-medium"],
            real_link: "https://kaspi.kz/shop/p/zabiaka-poprygun-zebra-492517-101033234/?c=750000000",
            price: 2595,
            description: "Резиновая каталка",
            rating: 9.32
        },
        {
            name: "Дрон DJI Mavic 3 Fly More Combo серый",
            images: ["https://resources.cdn-kaspi.kz/img/m/p/h67/h46/64370446237726.jpg?format=gallery-medium"],
            real_link: "https://kaspi.kz/shop/p/dji-mavic-3-fly-more-combo-seryi-103156328/?c=750000000",
            price: 1592003,
            description: "Квадрокоптер с автопилотом",
            rating: 9.32
        },
        {
            name: "Поезд Железная дорога p-112358, пластик, черный",
            images: ["https://resources.cdn-kaspi.kz/img/m/p/h61/hed/84786759139358.jpg?format=gallery-medium"],
            real_link: "https://kaspi.kz/shop/p/poezd-zheleznaja-doroga-p-112358-plastik-chernyi-115651771/?c=750000000",
            price: 1592003,
            description: "Игрушечный поезд размером 75x105 километров.",
            rating: 9.32
        }
    ])
];