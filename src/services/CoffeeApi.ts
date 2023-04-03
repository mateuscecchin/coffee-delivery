
export interface IItem {
    id: number;
    img: string;
    title: string;
    name: string;
    tags:ITags[],
    description: string;
    amount: IAmount
}

export interface ITags {
    id: number;
    name: string;
    description: string;
}

export interface IAmount {
    currency: string;
    value: string;
}

export const coffee: IItem[] = [
    {
        id: 1,
        img: "/coffee/Image.png",
        title: "Expresso tradicional",
        name: "expressoTradicional",
        tags: [
            {
                id: 1,
                name: "TRADICIONAL",
                description: "TRADICIONAL"
            }
        ],
        description: "O tradicional café feito com água quente e grãos moídos",
        amount: {
            currency: "R$",
            value: "9,90"
        }
    },
    {
        id: 2,
        img: "/coffee/Image-1.png",
        title: "Expresso Americano",
        name: "expressoAmericano",
        tags: [
            {
                id: 1,
                name: "TRADICIONAL",
                description: "TRADICIONAL"
            }
        ],
        description: "Expresso diluído, menos intenso que o tradicional",
        amount: {
            currency: "R$",
            value: "9,90"
        }
    },
    {
        id: 3,
        img: "/coffee/Image-2.png",
        title: "Expresso Cremoso",
        name: "expressoCremoso",
        tags: [
            {
                id: 1,
                name: "TRADICIONAL",
                description: "TRADICIONAL"
            }
        ],
        description: "Café expresso tradicional com espuma cremosa",
        amount: {
            currency: "R$",
            value: "9,90"
        }
    },
    {
        id: 4,
        img: "/coffee/Image-3.png",
        title: "Expresso Gelado",
        name: "expressoGelado",
        tags: [
            {
                id: 1,
                name: "TRADICIONAL",
                description: "TRADICIONAL"
            },
            {
                id: 2,
                name: "GELADO",
                description: "GELADO"
            },
        ],
        description: "Bebida preparada com café expresso e cubos de gelo",
        amount: {
            currency: "R$",
            value: "9,90"
        }
    },
    {
        id: 5,
        img: "/coffee/Image-4.png",
        title: "Café com Leite",
        name: "cafeComLeite",
        tags: [
            {
                id: 1,
                name: "TRADICIONAL",
                description: "TRADICIONAL"
            },
            {
                id: 3,
                name: "COM_LEITE",
                description: "COM LEITE"
            },
        ],
        description: "Meio a meio de expresso tradicional com leite vaporizado",
        amount: {
            currency: "R$",
            value: "9,90"
        }
    },
    {
        id: 6,
        img: "/coffee/Image-5.png",
        title: "Latte",
        name: "latte",
        tags: [
            {
                id: 1,
                name: "TRADICIONAL",
                description: "TRADICIONAL"
            },
            {
                id: 3,
                name: "COM_LEITE",
                description: "COM LEITE"
            },
        ],
        description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
        amount: {
            currency: "R$",
            value: "9,90"
        }
    },
    {
        id: 7,
        img: "/coffee/Image-6.png",
        title: "Capuccino",
        name: "capuccino",
        tags: [
            {
                id: 1,
                name: "TRADICIONAL",
                description: "TRADICIONAL"
            },
            {
                id: 3,
                name: "COM_LEITE",
                description: "COM LEITE"
            },
        ],
        description: "Bebida com canela feita de doses iguais de café, leite e espuma",
        amount: {
            currency: "R$",
            value: "9,90"
        }
    },
    {
        id: 8,
        img: "/coffee/Image-7.png",
        title: "Macchiato",
        name: "macchiato",
        tags: [
            {
                id: 1,
                name: "TRADICIONAL",
                description: "TRADICIONAL"
            },
            {
                id: 3,
                name: "COM_LEITE",
                description: "COM LEITE"
            },
        ],
        description: "Café expresso misturado com um pouco de leite quente e espuma",
        amount: {
            currency: "R$",
            value: "9,90"
        }
    },
    {
        id: 9,
        img: "/coffee/Image-8.png",
        title: "Mocaccino",
        name: "mocaccino",
        tags: [
            {
                id: 1,
                name: "TRADICIONAL",
                description: "TRADICIONAL"
            },
            {
                id: 3,
                name: "COM_LEITE",
                description: "COM LEITE"
            },
        ],
        description: "Café expresso com calda de chocolate, pouco leite e espuma",
        amount: {
            currency: "R$",
            value: "9,90"
        }
    },
    {
        id: 10,
        img: "/coffee/Image-9.png",
        title: "Chocolate Quente",
        name: "chocolateQuente",
        tags: [
            {
                id: 4,
                name: "ESPECIAL",
                description: "ESPECIAL"
            },
            {
                id: 3,
                name: "COM_LEITE",
                description: "COM LEITE"
            },
        ],
        description: "Café expresso com calda de chocolate, pouco leite e espuma",
        amount: {
            currency: "R$",
            value: "9,90"
        }
    },
    {
        id: 11,
        img: "/coffee/Image-10.png",
        title: "Cubano",
        name: "cubano",
        tags: [
            {
                id: 4,
                name: "ESPECIAL",
                description: "ESPECIAL"
            },
            {
                id: 5,
                name: "ALCOÓLICO",
                description: "ALCOÓLICO"
            },
            {
                id: 2,
                name: "GELADO",
                description: "GELADO"
            },
        ],
        description: "Drink gelado de café expresso com rum, creme de leite e hortelã",
        amount: {
            currency: "R$",
            value: "9,90"
        }
    },
    {
        id: 12,
        img: "/coffee/Image-11.png",
        title: "Havaiano",
        name: "havaiano",
        tags: [
            {
                id: 4,
                name: "ESPECIAL",
                description: "ESPECIAL"
            },
        ],
        description: "Bebida adocicada preparada com café e leite de coco",
        amount: {
            currency: "R$",
            value: "9,90"
        }
    },
    {
        id: 13,
        img: "/coffee/Image-12.png",
        title: "Árabe",
        name: "arabe",
        tags: [
            {
                id: 4,
                name: "ESPECIAL",
                description: "ESPECIAL"
            },
        ],
        description: "Bebida preparada com grãos de café árabe e especiarias",
        amount: {
            currency: "R$",
            value: "9,90"
        }
    },
    {
        id: 14,
        img: "/coffee/Image-13.png",
        title: "Irlandês",
        name: "irlandes",
        tags: [
            {
                id: 4,
                name: "ESPECIAL",
                description: "ESPECIAL"
            },
            {
                id: 5,
                name: "ALCOÓLICO",
                description: "ALCOÓLICO"
            },
        ],
        description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
        amount: {
            currency: "R$",
            value: "9,90"
        }
    },

]