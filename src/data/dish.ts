export default {
  image: '/assets/images/burger.jpg',
  name: 'Hamburger',
  description: 'With beef burger or chicken burger, lettuce, tomato & sauce',
  tiers: [
    {
      code: '1',
      name: 'Select',
      order: 1,
      type: 'radio',
      maximum_selections: 1,
      shortage: false,
      dependent_options: [],
      free_options: 0,
      options: [
        {
          code: '1.1',
          name: 'With french fries',
          price: 4.2,
          selected: false,
          shortage: false,
          extra: null,
          dependencies: []
        },
        {
          code: '1.2',
          name: 'Piece',
          price: 3.2,
          selected: false,
          shortage: false,
          extra: null,
          dependencies: []
        }
      ]
    },
    {
      code: '2',
      name: 'Select Item',
      order: 2,
      type: 'radio',
      maximum_selections: 1,
      shortage: false,
      dependent_options: [],
      free_options: 0,
      options: [
        {
          code: '2.1',
          name: 'Beef',
          price: 0,
          selected: false,
          shortage: false,
          extra: null,
          dependencies: []
        },
        {
          code: '2.2',
          name: 'Chicken',
          price: 0,
          selected: false,
          shortage: false,
          extra: null,
          dependencies: []
        }
      ]
    },
    {
      code: '3',
      name: 'Ingredients',
      order: 3,
      type: 'checkbox',
      maximum_selections: 0,
      shortage: false,
      dependent_options: [],
      free_options: 0,
      options: [
        {
          code: '3.1',
          name: 'Lettuce',
          price: 0,
          selected: true,
          shortage: false,
          extra: null,
          dependencies: []
        },
        {
          code: '3.2',
          name: 'Tomato',
          price: 0,
          selected: true,
          shortage: false,
          extra: null,
          dependencies: []
        },
        {
          code: '3.3',
          name: 'Sauce',
          price: 0,
          selected: true,
          shortage: false,
          extra: null,
          dependencies: []
        }
      ]
    }
  ]
};
