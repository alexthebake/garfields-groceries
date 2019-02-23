const RESPONSE = {
  first_name: 'Amber',
  last_name: 'Dyson',
  product_list: [
    {
      name: 'gummy worms',
      image: 'https://images.unsplash.com/photo-1499195333224-3ce974eecb47',
      price: '$2.4',
      match: 0.7880279245407454,
    },
    {
      name: 'coffee',
      image: 'https://images.unsplash.com/photo-1422207109431-97544339f995',
      price: '$11.45',
      match: 0.07795982868372675,
    },
    {
      name: 'carrots',
      image: 'https://images.unsplash.com/photo-1447175008436-054170c2e979',
      price: '$4.21',
      match: 0.06713731871329087,
    },
    {
      name: 'strawberries',
      image: 'https://images.unsplash.com/photo-1501171901942-5e8b5c41d6e1',
      price: '$3.43',
      match: 0.7642782242332061,
    },
    {
      name: 'ice cream',
      image: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f',
      price: '$4.68',
      match: 0.2777951865240881,
    },
    {
      name: 'green beans',
      image: 'https://images.unsplash.com/photo-1508900173264-bb171fa617e4',
      price: '$2.38',
      match: 0.8491844045497935,
    },
    {
      name: 'mushrooms',
      image: 'https://images.unsplash.com/photo-1504545102780-26774c1bb073',
      price: '$4.68',
      match: 0.13712612724737638,
    },
    {
      name: 'cereal',
      image: 'https://images.unsplash.com/photo-1504308805006-0f7a5f1f0f71',
      price: '$3.98',
      match: 0.691720969847558,
    },
    {
      name: 'oranges',
      image: 'https://images.unsplash.com/photo-1485381473713-c6131409c0be',
      price: '$3.02',
      match: 0.59471447717956,
    },
    {
      name: 'cherries',
      image: 'https://images.unsplash.com/photo-1499193953510-2c89a793828b',
      price: '$5.93',
      match: 0.11505627985381572,
    },
    {
      name: 'blueberries',
      image: 'https://images.unsplash.com/photo-1425934398893-310a009a77f9',
      price: '$6.96',
      match: 0.005865136863629328,
    },
    {
      name: 'maple syrup',
      image: 'https://images.unsplash.com/photo-1441633980922-d18ca151ee64',
      price: '$13.35',
      match: 0.06750484496418763,
    },
  ],
};

function fetchRecommendations() {
  return Promise.resolve(RESPONSE);
}

export default {
  fetchRecommendations,
};
