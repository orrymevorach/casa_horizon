export const reviews = [
  {
    name: 'Jon Gauthier',
    text:
      'Unbelievable place. The staff, both local and tourist were nothing short of amazing.',
  },
  {
    name: 'Melanie Joy',
    text:
      'It is one of the most amazing place I have ever been to. When I first got there I thought it was a private island...',
  },
  {
    name: 'Matt Donlevy',
    text:
      'Always has and always will be my favourite stop in Nicaragua. Great views, great vibes, great people.',
  },
];

export const activities = [
  {
    src: `homepage/yoga.png`,
    alt: 'Yoga',
    heading: 'Yoga.',
    description:
      'We have an outstanding yoga studio that overlooks the ocean. Our yoga instructors are certified to instruct those who are brand new to yoga, all the way to the most experienced of yogis.',
  },
  {
    src: `homepage/rory.jpg`,
    alt: 'Surf',
    heading: 'Surf.',
    description: `The regular breeze in Nicaragua is also what makes this area more well known for surfing, beause it creates the ideal 'offshore' winds that give the wave good shape. We're blessed with consistent surf, and you can catch good waves any month.`,
  },
  {
    src: `homepage/sunsets.jpg`,
    alt: 'Sunsets',
    heading: 'Sunsets.',
    description:
      'The sunsets in Nicaragua are jaw droppingly beautiful. Feel the golden sun warm your body with your toes sunken into the sand and not a worry in sight.',
  },
  {
    src: `homepage/turtles.jpg`,
    alt: 'Turtles',
    heading: 'Turtles.',
    description:
      'We are lucky to have a turtle sanctuary right on our very own beach. Every few weeks we release a batch of sea turtles into the ocean for the very first time.',
  },
];

export const buildingContainerData = {
  jungle: [
    {
      src: 'rooms/casa-courtyard.jpg',
      alt: 'Jungle House',
    },
    {
      src: 'rooms/casa-living-room.jpg',
      alt: 'Living Room',
    },
    {
      src: 'rooms/Room1.jpg',
      alt: 'Bedroom',
    },
    {
      src: 'rooms/yoga-loft.jpg',
      alt: 'Yoga Loft',
    },
    {
      src: 'rooms/casa-kitchen.jpg',
      alt: 'Kitchen',
    },
  ],
  beachfront: [
    {
      src: 'rooms/cottage-sunset.jpg',
      alt: 'Sunset',
    },
    {
      src: 'rooms/cottage-balcony.jpg',
      alt: 'Balcony',
    },
    {
      src: 'rooms/cottage-inside.jpg',
      alt: 'Living Room',
    },
    {
      src: 'rooms/master.jpg',
      alt: 'Master Bedroom',
    },
    {
      src: 'rooms/cottage-kitchen.jpg',
      alt: 'Kitchen',
    },
  ],
};

export const rooms = [
  {
    name: 'Room 1',
    capacity: '4',
    price: '$30',
    image: `rooms/Room1.jpg`,
    subtext:
      'Watch the sunset from your hammock in this room that is perfect for families and small groups',
    category: 'private',
    descriptors: {
      one: 'Two queen beds',
      two: 'Spectacular oceanview',
      three: 'Ensuite bathroom',
      four: 'Tranquil rainfall hot shower',
      five: 'Watch the sunset from your hammock',
    },
  },
  {
    name: 'Room 2',
    capacity: '2',
    subtext:
      'Listen to the waves crashing below from your hammock in this room that is perfect for couples or pairs',
    category: 'private',
    price: '$30',
    image: `rooms/Room2.jpg`,
    descriptors: {
      one: 'One king bed',
      two: 'Open air concept',
      four: 'Ensuite bathroom with tranquilo rainfall hot shower',
      three: 'Hear the waves crashing from your bed',
      five: 'Personal Hammock',
    },
  },
  {
    name: 'Room 3',
    capacity: '4',
    subtext:
      'This room has a larger capacity and ample storage space, perfect for families and friends alike',
    category: 'private',
    price: '$30',
    image: `rooms/Room3.jpg`,
    descriptors: {
      one: 'One queen bed, one twin bed',
      two: 'Shared bathroom with hot rainfall shower',
      three: 'Ample storage space for belongings',
      four:
        'Located on the main floor outisde of the ocean, facing the courtyard',
      five: 'Ample storage space and two high powered fans',
    },
  },
  {
    name: 'Room 4',
    capacity: '4',
    subtext:
      'This dorm style room is perfect for families, groups or solo travelers, as it includes two bunk beds with one bunk bottom being a queen',
    category: 'private',
    price: '$30',
    image: `rooms/Room4.jpg`,
    descriptors: {
      one: 'Dorm style room',
      two: 'Shared bathroom with hot rainfall shower',
      three: 'Sleeps up to five people',
      four:
        'Located on the main floor outisde of the ocean, facing the courtyard',
      five: 'Ample storage space and two high powered fans',
    },
  },
  {
    name: 'Yoga Loft',
    capacity: '2',
    subtext:
      'Our yoga loft has a panoramic view unlike any other within Casa Horizon, and is perfect for those looking to host retreats at Casa Horizon, or for those who are looking to flow through their own self care practice',
    category: 'loft',
    price: '$30',
    image: `rooms/Room5.jpg`,
    descriptors: {
      one: 'Beautiful panoramic view',
      two: 'Open air concept',
      three: 'Large private bathrrom with hot shower',
      four: 'Option to add one queen or multiple single beds',
      five: 'Yoga mats, bolsters, and blocks available for use',
    },
  },
];
