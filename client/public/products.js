
// a list of product-objects
let products = [
  // the house
  {
    name: 'House',
    image: 'images/basic dollhouse.png',
    type: 'house',
    collection: 'all',
    price: 500
  },
  // furnitures
  // beds
  {
    name: 'Pink Bed',
    image: 'images/furniture/pink bed.png',
    type: 'bed',
    collection: 'pink',
    price: 120
  },
  {
    name: 'Colorful Bed',
    image: 'images/furniture/colorful bed.png',
    type: 'bed',
    collection: 'colorful',
    price: 110
  },
  {
    name: 'Natural Bed',
    image: 'images/furniture/natural bed.png',
    type: 'bed',
    collection: 'natural',
    price: 100
  },
  // floor lamps
  {
    name: 'Pink Floor Lamp',
    image: 'images/furniture/pink floor lamp.png',
    type: 'floor-lamp',
    collection: 'pink',
    price: 75
  },
  {
    name: 'Colorful Floor Lamp',
    image: 'images/furniture/colorful floor lamp.png',
    type: 'floor-lamp',
    collection: 'colorful',
    price: 85
  },
  {
    name: 'Natural Floor Lamp',
    image: 'images/furniture/natural floor lamp.png',
    type: 'floor-lamp',
    collection: 'natural', 
    price: 80
  },
  // celing lamps
  {
    name: 'Pink Lamp',
    image: 'images/furniture/pink lamp.png',
    type: 'lamp',
    collection: 'pink', 
    price: 50
  },
  {
    name: 'Colorful Lamp',
    image: 'images/furniture/colorful lamp.png',
    type: 'lamp',
    collection: 'colorful',
    price: 55
  },
  {
    name: 'Natural Lamp',
    image: 'images/furniture/natural lamp.png',
    type: 'lamp',
    collection: 'natural', 
    price: 55
  },
  // sofa sets
  {
    name: 'Pink Sofa Set',
    image: 'images/furniture/pink sofa-set.png',
    type: 'sofa',
    collection: 'pink', 
    price: 350
  },
  {
    name: 'Colorful Sofa Set',
    image: 'images/furniture/colorful sofa-set.png',
    type: 'sofa',
    collection: 'colorful', 
    price: 370
  },
  {
    name: 'Natural Sofa Set',
    image: 'images/furniture/natural sofa-set.png',
    type: 'sofa',
    collection: 'natural', 
    price: 375
  },
  // table sets
  {
    name: 'Pink Table Set',
    image: 'images/furniture/pink table-set.png',
    type: 'table',
    collection: 'pink', 
    price: 290
  },
  {
    name: 'Colorful Table Set',
    image: 'images/furniture/colorful table-set.png',
    type: 'table',
    collection: 'colorful', 
    price: 300
  },
  {
    name: 'Natural Table Set',
    image: 'images/furniture/natural table-set.png',
    type: 'table',
    collection: 'natural',
    price: 320
  },
  // bathtubs
  {
    name: 'Pink Bathtub',
    image: 'images/furniture/pink tub.png',
    type: 'tub',
    collection: 'pink',
    price: 210
  },
  {
    name: 'Colorful Bathtub',
    image: 'images/furniture/colorful tub.png',
    type: 'tub',
    collection: 'colorful', 
    price: 220
  },
  {
    name: 'Natural Bathtub',
    image: 'images/furniture/natural tub.png',
    type: 'tub',
    collection: 'natural',
    price: 235
  },
  // vanities
  {
    name: 'Pink Vanity',
    image: 'images/furniture/pink vanity.png',
    type: 'vanity',
    collection: 'pink',
    price: 195
  },
  {
    name: 'Colorful Vanity',
    image: 'images/furniture/colorful vanity.png',
    type: 'vanity',
    collection: 'colorful', 
    price: 180
  },
  {
    name: 'Natural Vanity',
    image: 'images/furniture/natural vanity.png',
    type: 'vanity',
    collection: 'natural',
    price: 210
  },
  // wardrobes
  {
    name: 'Pink Wardrobe',
    image: 'images/furniture/pink wardrobe.png',
    type: 'wardrobe',
    collection: 'pink',
    price: 160
  },
  {
    name: 'Colorful Wardrobe',
    image: 'images/furniture/colorful wardrobe.png',
    type: 'wardrobe',
    collection: 'colorful',
    price: 170
  },
  {
    name: 'Natural Wardrobe',
    image: 'images/furniture/natural wardrobe.png',
    type: 'wardrobe',
    collection: 'natural',
    price: 175
  },
  // wallpapers
  // colorful
  {
    name: 'Colorful Bedroom Wallpaper',
    image: 'images/wallpapers/colorful bed wall.png',
    type: 'wall',
    collection: 'colorful',
    price: 65
  },
  {
    name: 'Colorful Dining room Wallpaper',
    image: 'images/wallpapers/colorful dining wall.png',
    type: 'wall',
    collection: 'colorful',
    price: 40
  },
  {
    name: 'Colorful Living room Wallpaper',
    image: 'images/wallpapers/colorful living wall.png',
    type: 'wall',
    collection: 'colorful',
    price: 60
  },
  {
    name: 'Colorful Bathroom Wallpaper',
    image: 'images/wallpapers/colorful bath wall.png',
    type: 'wall',
    collection: 'colorful',
    price: 35
  },
  // natural
  {
    name: 'Natural Bedroom Wallpaper',
    image: 'images/wallpapers/natural bed wall.png',
    type: 'wall',
    collection: 'natural',
    price: 35
  },
  {
    name: 'Natural Dining room Wallpaper',
    image: 'images/wallpapers/natural dining wall.png',
    type: 'wall',
    collection: 'natural',
    price: 25
  },
  {
    name: 'Natural Living room Wallpaper',
    image: 'images/wallpapers/natural living wall.png',
    type: 'wall',
    collection: 'natural',
    price: 30
  },
  {
    name: 'Natural Bathroom Wallpaper',
    image: 'images/wallpapers/natural bath wall.png',
    type: 'wall',
    collection: 'natural',
    price: 20
  },
  // pink
  {
    name: 'Pink Bedroom Wallpaper',
    image: 'images/wallpapers/pink bed wall.png',
    type: 'wall',
    collection: 'pink',
    price: 50
  },
  {
    name: 'Pink Dining room Wallpaper',
    image: 'images/wallpapers/pink dining wall.png',
    type: 'wall',
    collection: 'pink',
    price: 30
  },
  {
    name: 'Pink Living room Wallpaper',
    image: 'images/wallpapers/pink living wall.png',
    type: 'wall',
    collection: 'pink',
    price: 45
  },
  {
    name: 'Pink Bathroom Wallpaper',
    image: 'images/wallpapers/pink bath wall.png',
    type: 'wall',
    collection: 'pink',
    price: 25
  }
];

export default products;
