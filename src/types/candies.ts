import Candy from "./candy";

export const candies: Candy[] = [
  {
    name: "Ginger Bread",
    price: createRandomPrice(900, 1100),
    thumbnail: "https://cdn-icons-png.flaticon.com/512/3753/3753378.png",
  },
  {
    name: "Brownie",
    price: createRandomPrice(700, 900),
    thumbnail: "https://cdn-icons-png.flaticon.com/512/1182/1182189.png",
  },
  {
    name: "Cookie",
    price: createRandomPrice(500, 700),
    thumbnail: "https://cdn-icons-png.flaticon.com/512/1047/1047711.png",
  },
  {
    name: "Lolli",
    price: createRandomPrice(300, 500),
    thumbnail:
      "https://icon-library.com/images/candy-icon-png/candy-icon-png-14.jpg",
  },
  {
    name: "Chew Gum",
    price: createRandomPrice(100, 300),
    thumbnail: "https://cdn-icons-png.flaticon.com/512/287/287062.png",
  },
];

export function createRandomPrice(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
