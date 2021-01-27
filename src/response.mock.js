const REVIEW = {
    HIGHLIGHTS: [
        {
            id: 'f5e75165-704b-4864-a98c-bdb0c856ae0f',
            image: 'assets/images/lawyers/f5e75165-704b-4864-a98c-bdb0c856ae0f.png',
            name: 'Mitchell M.',
            location: 'Cherry Hill, NJ',
            rating: 5,
            category: 'Family Law',
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet ligula sed turpis sollicitudin fringilla. Vestibulum fermentum justo dui. Donec id ullamcorper lacus, ut accumsan orci.'
        },
        {
            id: 'ac9af587-5b36-4de7-992d-020f9c8badec',
            image: 'assets/images/lawyers/ac9af587-5b36-4de7-992d-020f9c8badec.png',
            name: 'Joel C.',
            location: 'Little Rock, AK',
            rating: 5,
            category: 'Job & Employment Law',
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet ligula sed turpis sollicitudin fringilla. Vestibulum fermentum justo dui. Donec id ullamcorper lacus, ut accumsan orci.'
        },
        {
            id: '91442921-e7ec-4748-a04b-e3dc8678c54a',
            image: 'assets/images/lawyers/91442921-e7ec-4748-a04b-e3dc8678c54a.png',
            name: 'Brigida R.',
            location: 'Dallas, TX',
            rating: 5,
            category: 'Family Law',
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet ligula sed turpis sollicitudin fringilla. Vestibulum fermentum justo dui. Donec id ullamcorper lacus, ut accumsan orci.'
        }
    ],
    MODAL: [
        {
            id: 'f5e75165-704b-4864-a98c-bdb0c856ae0f',
            overallRating: 4,
            numberOfUsersRated: 29,
            rating: [
                {
                    description: 'Responded in a timely manner',
                    rating: 5
                },
                {
                    description: 'Answered questions clearly',
                    rating: 5
                },
                {
                    description: 'Understood needs',
                    rating: 5
                },
                {
                    description: 'Gave complete and clear information',
                    rating: 5
                },
                {
                    description: 'Knowledgeable in legal area',
                    rating: 4
                },
                {
                    description: 'Good value for money',
                    rating: 4
                },
                {
                    description: 'Would hire again',
                    rating: 4
                },
                {
                    description: 'Would recommend to friend',
                    rating: 4
                }
            ],
            review: [
                {
                    rating: 5,
                    name: 'Dexter Marchal',
                    date: new Date('06/10/2016').getTime(),
                    description: 'Deb did a great job. Got my bench warrant set aside ... was sure I was going to jail ... phew. Judge seemed to respect her and I got what I wanted.'
                }
            ]
        },
        {
            id: 'ac9af587-5b36-4de7-992d-020f9c8badec',
            overallRating: 4,
            numberOfUsersRated: 15,
            rating: [
                {
                    description: 'Responded in a timely manner',
                    rating: 3
                },
                {
                    description: 'Answered questions clearly',
                    rating: 3
                },
                {
                    description: 'Understood needs',
                    rating: 5
                },
                {
                    description: 'Gave complete and clear information',
                    rating: 5
                },
                {
                    description: 'Knowledgeable in legal area',
                    rating: 5
                },
                {
                    description: 'Good value for money',
                    rating: 5
                },
                {
                    description: 'Would hire again',
                    rating: 5
                },
                {
                    description: 'Would recommend to friend',
                    rating: 5
                }
            ],
            review: [
                {
                    rating: 4,
                    name: 'Cameron Marchal',
                    date: new Date('11/10/2017').getTime(),
                    description: 'Cam did a great job. Got my bench warrant set aside ... was sure I was going to jail ... phew. Judge seemed to respect her and I got what I wanted.'
                }
            ]
        },
        {
            id: '91442921-e7ec-4748-a04b-e3dc8678c54a',
            overallRating: 4,
            numberOfUsersRated: 29,
            rating: [
                {
                    description: 'Responded in a timely manner',
                    rating: 4
                },
                {
                    description: 'Answered questions clearly',
                    rating: 5
                },
                {
                    description: 'Understood needs',
                    rating: 4
                },
                {
                    description: 'Gave complete and clear information',
                    rating: 5
                },
                {
                    description: 'Knowledgeable in legal area',
                    rating: 4
                },
                {
                    description: 'Good value for money',
                    rating: 5
                },
                {
                    description: 'Would hire again',
                    rating: 4
                },
                {
                    description: 'Would recommend to friend',
                    rating: 5
                },
                {
                    description: 'Test 1',
                    rating: 3
                },
                {
                    description: 'Test 2',
                    rating: 5
                }
            ],
            review: [
                {
                    rating: 5,
                    name: 'Dexter Marchal',
                    date: new Date('06/10/2016').getTime(),
                    description: 'Deb did a great job. Got my bench warrant set aside ... was sure I was going to jail ... phew. Judge seemed to respect her and I got what I wanted.'
                }
            ]
        }
    ]
};

const LAW_CATEGORY = [
    {
        id: '18963ffb-9eec-430f-9183-b78a2e9d2c82',
        description: 'Family',
    },
    {
        id: '89f5e27f-061b-48fa-bee1-fadbf9632876',
        description: 'Criminal Defense'
    },
    {
        id: 'b6e79898-10e9-4c56-a866-f7a6a9a082ff',
        description: 'Business'
    },
    {
        id: '3d999f62-83da-4f12-b971-d20d1fa6ef4f',
        description: 'Personal Injury'
    },
    {
        id: '32f15a42-44e3-4b1d-a5d0-a4be81800895',
        description: 'Bankruptcy & Finances'
    },
    {
        id: 'c63e534e-dee6-4fa1-843b-b9993f2f66f7',
        description: 'Products & Services'
    },
    {
        id: 'a8c76572-1ff7-49e5-88d3-edad782e6da3',
        description: 'Employment'
    },
    {
        id: '071f9584-b94e-4770-bf21-738fb288d26c',
        description: 'Real Estate'
    },
    {
        id: '60e70a6f-745b-4b62-a1dd-e673a55e94ef',
        description: 'Immigration'
    },
    {
        id: 'f54f70a3-f26d-4f93-8ad7-80c3a29075ef',
        description: 'Wills, Trusts & Estates'
    },
    {
        id: '231fead4-f75a-4a50-8a81-8a753830b75b',
        description: 'Government'
    },
    {
        id: 'a905fe15-f06d-41be-90cf-6123fb309b70',
        description: 'Intellectual Property'
    }
];

const LAW_SUBCATEGORY = [
    {
        id: '18963ffb-9eec-430f-9183-b78a2e9d2c82',
        category: 'Family',
        list: [
            {
                description: 'Adoptions'
            },
            {
                description: 'Child Support'
            },
            {
                description: 'Guardianship'
            },
            {
                description: 'Separations'
            },
            {
                description: 'Child Custody and Visitation'
            },
            {
                description: 'Divorce'
            },
            {
                description: 'Paternity'
            },
            {
                description: 'Spousal Support or Ailmony'
            }
        ]
    },
    {
        id: '89f5e27f-061b-48fa-bee1-fadbf9632876',
        category: 'Criminal Defense',
        list: [
            {
                description: 'Neque'
            },
            {
                description: 'Porro'
            },
            {
                description: 'Quisquam'
            },
            {
                description: 'Est'
            },
            {
                description: 'Qui'
            },
            {
                description: 'Dolorem'
            },
            {
                description: 'Ipsum'
            },
            {
                description: 'Quia'
            }
        ]
    },
    {
        id: 'b6e79898-10e9-4c56-a866-f7a6a9a082ff',
        category: 'Business',
        list: [
            {
                description: 'Lorem'
            },
            {
                description: 'Ipsum'
            },
            {
                description: 'Dolor'
            },
            {
                description: 'Sit'
            },
            {
                description: 'Amet'
            },
            {
                description: 'Consectetur'
            },
            {
                description: 'Adipiscing'
            },
            {
                description: 'Elit'
            }
        ]
    },
    {
        id: '3d999f62-83da-4f12-b971-d20d1fa6ef4f',
        category: 'Personal Injury',
        list: [
            {
                description: 'Suspendisse'
            },
            {
                description: 'A Quam'
            },
            {
                description: 'Ut Felis'
            },
            {
                description: 'Pharetra'
            },
            {
                description: 'Rhoncus'
            },
            {
                description: 'Vestibulum'
            },
            {
                description: 'Turpis'
            },
            {
                description: 'Augue'
            }
        ]
    },
    {
        id: '32f15a42-44e3-4b1d-a5d0-a4be81800895',
        category: 'Bankruptcy & Finances',
        list: [
            {
                description: 'Egestas'
            },
            {
                description: 'Sed Tincidunt Id'
            },
            {
                description: 'Ultricies'
            },
            {
                description: 'Sit Amet Augue'
            },
            {
                description: 'Proin'
            },
            {
                description: 'Faucibus'
            },
            {
                description: 'Ligula'
            },
            {
                description: 'Ac Lobortis'
            }
        ]
    },
    {
        id: 'c63e534e-dee6-4fa1-843b-b9993f2f66f7',
        category: 'Products & Services',
        list: [
            {
                description: 'Lacinia'
            },
            {
                description: 'Posuere'
            },
            {
                description: 'Ante'
            },
            {
                description: 'Primis'
            },
            {
                description: 'Orci'
            },
            {
                description: 'Luctus'
            },
            {
                description: 'Cubilia'
            },
            {
                description: 'Curae'
            }
        ]
    },
    {
        id: 'a8c76572-1ff7-49e5-88d3-edad782e6da3',
        category: 'Employment',
        list: [
            {
                description: 'Donec'
            },
            {
                description: 'At Lacus Augue'
            },
            {
                description: 'Proin Quis'
            },
            {
                description: 'Diam Nec'
            },
            {
                description: 'Lacus Euismod'
            },
            {
                description: 'Hendrerit'
            },
            {
                description: 'Nec Id Quam'
            },
            {
                description: 'Donec Semper'
            }
        ]
    },
    {
        id: '071f9584-b94e-4770-bf21-738fb288d26c',
        category: 'Real Estate',
        list: [
            {
                description: 'Neque'
            },
            {
                description: 'Sed Quam Vehicula'
            },
            {
                description: 'Gravida'
            },
            {
                description: 'Mollis'
            },
            {
                description: 'Metus'
            },
            {
                description: 'Pellentesque'
            },
            {
                description: 'Proin Vulputate'
            },
            {
                description: 'Sollicitudin'
            }
        ]
    },
    {
        id: '60e70a6f-745b-4b62-a1dd-e673a55e94ef',
        category: 'Immigration',
        list: [
            {
                description: 'Maecenas'
            },
            {
                description: 'Iaculis'
            },
            {
                description: 'Pharetra'
            },
            {
                description: 'Sodales'
            },
            {
                description: 'Curabitur'
            },
            {
                description: 'Metus Turpis'
            },
            {
                description: 'Sagittis'
            },
            {
                description: 'Vitae'
            }
        ]
    },
    {
        id: 'f54f70a3-f26d-4f93-8ad7-80c3a29075ef',
        category: 'Wills, Trusts & Estates',
        list: [
            {
                description: 'Vulputate'
            },
            {
                description: 'Quis'
            },
            {
                description: 'Dapibus'
            },
            {
                description: 'Non Mauris'
            },
            {
                description: 'Maecenas Rhoncus'
            },
            {
                description: 'Bibendum'
            },
            {
                description: 'Aenean'
            },
            {
                description: 'Feugiat'
            }
        ]
    },
    {
        id: '231fead4-f75a-4a50-8a81-8a753830b75b',
        category: 'Government',
        list: [
            {
                description: 'Id Diam Vitae'
            },
            {
                description: 'Blandit'
            },
            {
                description: 'In Tincidunt'
            },
            {
                description: 'Tellus'
            },
            {
                description: 'Vehicula Libero'
            },
            {
                description: 'Malesuada'
            },
            {
                description: 'Placerat'
            },
            {
                description: 'Integer'
            }
        ]
    },
    {
        id: 'a905fe15-f06d-41be-90cf-6123fb309b70',
        category: 'Intellectual Property',
        list: [
            {
                description: 'Malesuada Est Vitae'
            },
            {
                description: 'Ipsum Cursus Cursus'
            },
            {
                description: 'Vivamus'
            },
            {
                description: 'Scelerisque'
            },
            {
                description: 'Morbi'
            },
            {
                description: 'Risus'
            },
            {
                description: 'Congue'
            },
            {
                description: 'Magna'
            }
        ]
    }
];

const OTHER_LAW_CATEGORY = [
    {
        description: 'Abuse (Child, Domestic, Sexual)'
    },
    {
        description: 'Loremipsum Dolorsitamet'
    },
    {
        description: 'Agencies & Administration'
    },
    {
        description: 'Lonsecteur Scingelit (Baseerekj, Mereit)'
    },
    {
        description: 'Automobile ( DUI, Crimes, Speeding )'
    },
    {
        description: 'Miam Euvelit'
    },
    {
        description: 'Automobiles ( Accidents, Insurance )'
    },
    {
        description: 'Mempor Auctor (Estiarma, Toeruslej)'
    },
    {
        description: 'Banking ( Business, Consumer )'
    },
    {
        description: 'Nisultricies Dictumest.'
    },
    {
        description: 'Bars & Restaurants'
    },
    {
        description: 'Ntfring Sodalelit (Aeeticl Restoustoust)'
    },
    {
        description: 'Business Formation & Dissolution'
    },
    {
        description: 'Ntvarius Lectus & Congue'
    },
    {
        description: 'Children (Adoption, Custody, Support)'
    },
    {
        description: 'Pellentesque'
    },
    {
        description: 'Class Actions (Bad Drugs, Products)'
    },
    {
        description: 'Rigula Aliquamanttis (Nestusotu, Wewreist)'
    },
    {
        description: 'Commercial Law and Contracts'
    },
    {
        description: 'Set Tigulempor'
    },
    {
        description: 'Commercial Real Estate'
    },
    {
        description: 'Sehicula Sedsitamet'
    },
    {
        description: 'Constitutional Law'
    },
    {
        description: 'Seque Nesturre'
    },
    {
        description: 'Construction (Disputes, Liens)'
    },
    {
        description: 'Tollis Gaurissed'
    },
    {
        description: 'Categories Item Here'
    },
    {
        description: 'Tempo Auctor (Estiarma, Toeruslej)'
    }
];
