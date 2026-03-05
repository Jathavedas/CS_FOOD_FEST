export interface FoodItem {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description?: string;
  ingredients: string[];
  nutrition: {
    calories: number;
    protein: string;
    carbs: string;
    fat: string;
  };
}

export const foodItems: FoodItem[] = [
  {
    id: 1,
    name: "Idli",
    price: 10,
    image: "/idli.jpg",
    category: "Breakfast",
    description: "Soft steamed rice cakes served with chutney and sambar",
    ingredients: ["Rice", "Urad Dal", "Salt"],
    nutrition: { calories: 120, protein: "4g", carbs: "26g", fat: "1g" }
  },
  {
    id: 2,
    name: "Appam",
    price: 10,
    image: "/appam.jpg",
    category: "Breakfast",
    description: "Soft fermented rice pancake with crispy edges",
    ingredients: ["Rice Flour", "Coconut Milk", "Sugar", "Yeast"],
    nutrition: { calories: 150, protein: "3g", carbs: "30g", fat: "3g" }
  },
  {
    id: 3,
    name: "Dosa",
    price: 5,
    image: "/dosa.jpg",
    category: "Breakfast",
    description: "Crispy fermented rice and lentil crepe",
    ingredients: ["Rice", "Urad Dal", "Salt", "Oil"],
    nutrition: { calories: 170, protein: "5g", carbs: "30g", fat: "3g" }
  },
  {
    id: 4,
    name: "Porotta",
    price: 10,
    image: "/porotta.jpg",
    category: "Main",
    description: "Layered Kerala flatbread",
    ingredients: ["Maida", "Oil", "Salt"],
    nutrition: { calories: 320, protein: "6g", carbs: "45g", fat: "12g" }
  },
  {
    id: 5,
    name: "Ghee Roast",
    price: 35,
    image: "/gheerost.jpg",
    category: "Breakfast",
    description: "Crispy dosa roasted with ghee",
    ingredients: ["Rice Batter", "Urad Dal", "Ghee"],
    nutrition: { calories: 250, protein: "6g", carbs: "35g", fat: "9g" }
  },
  {
    id: 6,
    name: "Masala Dosa",
    price: 50,
    image: "/masaladosa.jpg",
    category: "Breakfast",
    description: "Dosa filled with spiced potato masala",
    ingredients: ["Rice Batter", "Potato", "Onion", "Spices"],
    nutrition: { calories: 300, protein: "7g", carbs: "45g", fat: "10g" }
  },
  {
    id: 7,
    name: "Vegetable Dosa",
    price: 20,
    image: "/vegetabledosa.jpg",
    category: "Breakfast",
    description: "Dosa stuffed with mixed vegetables",
    ingredients: ["Rice Batter", "Carrot", "Beans", "Cabbage", "Spices"],
    nutrition: { calories: 280, protein: "7g", carbs: "42g", fat: "9g" }
  },
  {
    id: 8,
    name: "Ada",
    price: 10,
    image: "/ada.jpg",
    category: "Snacks",
    description: "Traditional steamed rice cake with coconut filling",
    ingredients: ["Rice Flour", "Coconut", "Jaggery"],
    nutrition: { calories: 180, protein: "3g", carbs: "35g", fat: "4g" }
  },
  {
    id: 9,
    name: "Kumbil Appam",
    price: 10,
    image: "/kumbilappam.jpg",
    category: "Snacks",
    description: "Steamed rice and jaggery cake wrapped in leaf",
    ingredients: ["Rice Flour", "Jaggery", "Coconut"],
    nutrition: { calories: 200, protein: "3g", carbs: "40g", fat: "4g" }
  },
  {
    id: 10,
    name: "Vattayappam",
    price: 10,
    image: "/vattayappam.jpg",
    category: "Snacks",
    description: "Soft steamed rice cake with coconut",
    ingredients: ["Rice Flour", "Coconut", "Sugar", "Yeast"],
    nutrition: { calories: 210, protein: "4g", carbs: "38g", fat: "5g" }
  },
  {
    id: 11,
    name: "Kozhukatta",
    price: 10,
    image: "/kozhukatta.jpg",
    category: "Snacks",
    description: "Steamed rice dumplings with coconut and jaggery",
    ingredients: ["Rice Flour", "Coconut", "Jaggery"],
    nutrition: { calories: 190, protein: "3g", carbs: "36g", fat: "4g" }
  },
  {
    id: 12,
    name: "Idiyappam",
    price: 8,
    image: "/idiyappam.jpg",
    category: "Breakfast",
    description: "Steamed string hoppers made from rice flour",
    ingredients: ["Rice Flour", "Water", "Salt"],
    nutrition: { calories: 160, protein: "3g", carbs: "35g", fat: "1g" }
  },
  {
    id: 13,
    name: "Puttu (Wheat)",
    price: 15,
    image: "/puttu-wheat.jpg",
    category: "Breakfast",
    description: "Steamed wheat flour with coconut layers",
    ingredients: ["Wheat Flour", "Coconut", "Salt"],
    nutrition: { calories: 220, protein: "6g", carbs: "40g", fat: "4g" }
  },
  {
    id: 14,
    name: "Puttu (Beetroot)",
    price: 15,
    image: "/puttu-beetroot.jpg",
    category: "Breakfast",
    description: "Colorful beetroot flavored puttu",
    ingredients: ["Rice Flour", "Beetroot", "Coconut"],
    nutrition: { calories: 210, protein: "5g", carbs: "38g", fat: "4g" }
  },
  {
    id: 15,
    name: "Puttu (Carrot)",
    price: 15,
    image: "/puttu-carrot.jpg",
    category: "Breakfast",
    description: "Healthy carrot flavored puttu",
    ingredients: ["Rice Flour", "Carrot", "Coconut"],
    nutrition: { calories: 210, protein: "5g", carbs: "38g", fat: "4g" }
  },
  {
    id: 16,
    name: "Puttu (Rice)",
    price: 15,
    image: "/puttu-rice.jpg",
    category: "Breakfast",
    description: "Classic Kerala rice puttu with coconut",
    ingredients: ["Rice Flour", "Coconut", "Salt"],
    nutrition: { calories: 200, protein: "4g", carbs: "37g", fat: "3g" }
  },
  {
  id: 17,
  name: "Parippu Vada",
  price: 7,
  image: "/parippuvada.jpg",
  category: "Snacks",
  ingredients: ["Chana Dal", "Onion", "Curry Leaves", "Chili"],
  nutrition: { calories: 180, protein: "6g", carbs: "20g", fat: "8g" }
},
{
  id: 18,
  name: "Pazhampori",
  price: 10,
  image: "/pazhampori.jpg",
  category: "Snacks",
  ingredients: ["Ripe Banana", "Flour", "Sugar", "Oil"],
  nutrition: { calories: 210, protein: "2g", carbs: "35g", fat: "7g" }
},
{
  id: 19,
  name: "Mul1k Baji Set 3",
  price: 15,
  image: "/mulakbajji.jpg",
  category: "Snacks",
  ingredients: ["Green Chili", "Gram Flour", "Spices"],
  nutrition: { calories: 150, protein: "3g", carbs: "18g", fat: "6g" }
},
{
  id: 20,
  name: "Egg Bajji",
  price: 10,
  image: "/eggbajji.jpg",
  category: "Snacks",
  ingredients: ["Egg", "Gram Flour", "Spices"],
  nutrition: { calories: 200, protein: "8g", carbs: "15g", fat: "10g" }
},
// {
//   id: 21,
//   name: "Unnakaya",
//   price: 15,
//   image: "/unnakaya.jpg",
//   category: "Snacks",
//   ingredients: ["Banana", "Coconut", "Sugar", "Nuts"],
//   nutrition: { calories: 240, protein: "4g", carbs: "38g", fat: "9g" }
// },
{
  id: 22,
  name: "Bread Sandwich",
  price: 30,
  image: "/sandwich.jpg",
  category: "Snacks",
  ingredients: ["Bread", "Vegetables", "Butter"],
  nutrition: { calories: 220, protein: "6g", carbs: "32g", fat: "7g" }
},
{
  id: 23,
  name: "Kaya Bajji",
  price: 10,
  image: "/kayabajji.jpg",
  category: "Snacks",
  ingredients: ["Raw Banana", "Gram Flour"],
  nutrition: { calories: 190, protein: "3g", carbs: "30g", fat: "6g" }
},
{
  id: 24,
  name: "Bread Toast",
  price: 10,
  image: "/breadtoast.jpg",
  category: "Snacks",
  ingredients: ["Bread", "Butter"],
  nutrition: { calories: 160, protein: "4g", carbs: "25g", fat: "5g" }
},
{
  id: 25,
  name: "Bread Porichathu",
  price: 15,
  image: "/breadfry.jpg",
  category: "Snacks",
  ingredients: ["Bread", "Egg", "Spices"],
  nutrition: { calories: 230, protein: "8g", carbs: "28g", fat: "9g" }
},
{
  id: 26,
  name: "Ari Unda",
  price: 5,
  image: "/ariunda.jpg",
  category: "Snacks",
  ingredients: ["Rice Flour", "Jaggery", "Coconut"],
  nutrition: { calories: 200, protein: "3g", carbs: "40g", fat: "4g" }
},
{
  id: 27,
  name: "Aval Nanachathu",
  price: 10,
  image: "/avalnanachathu.jpg",
  category: "Snacks",
  ingredients: ["Flattened Rice", "Banana", "Sugar", "Coconut"],
  nutrition: { calories: 210, protein: "3g", carbs: "42g", fat: "4g" }
},
{
  id: 28,
  name: "Aval Velayichathu",
  price: 15,
  image: "/avalvelayichathu.jpg",
  category: "Snacks",
  ingredients: ["Flattened Rice", "Jaggery", "Coconut"],
  nutrition: { calories: 230, protein: "4g", carbs: "44g", fat: "5g" }
},

{
  id: 29,
  name: "Chaya",
  price: 10,
  image: "/tea.jpg",
  category: "Beverages",
  ingredients: ["Tea", "Milk", "Sugar"],
  nutrition: { calories: 80, protein: "2g", carbs: "10g", fat: "2g" }
},
{
  id: 30,
  name: "Coffee",
  price: 15,
  image: "/coffee.jpg",
  category: "Beverages",
  ingredients: ["Coffee", "Milk", "Sugar"],
  nutrition: { calories: 90, protein: "2g", carbs: "12g", fat: "3g" }
},
{
  id: 31,
  name: "Milk",
  price: 10,
  image: "/milk.jpg",
  category: "Beverages",
  ingredients: ["Milk"],
  nutrition: { calories: 120, protein: "8g", carbs: "12g", fat: "5g" }
},
{
  id: 32,
  name: "Boost",
  price: 15,
  image: "/boost.jpg",
  category: "Beverages",
  ingredients: ["Milk", "Boost Powder"],
  nutrition: { calories: 180, protein: "6g", carbs: "28g", fat: "5g" }
},
{
  id: 33,
  name: "Horlicks",
  price: 15,
  image: "/horlicks.jpg",
  category: "Beverages",
  ingredients: ["Milk", "Horlicks"],
  nutrition: { calories: 180, protein: "6g", carbs: "28g", fat: "5g" }
},
// {
//   id: 34,
//   name: "Badam Tea",
//   price: 20,
//   image: "/badamtea.jpg",
//   category: "Beverages",
//   ingredients: ["Tea", "Milk", "Almond Flavor"],
//   nutrition: { calories: 110, protein: "3g", carbs: "15g", fat: "4g" }
// },
// {
//   id: 35,
//   name: "Green Tea",
//   price: 15,
//   image: "/greentea.jpg",
//   category: "Beverages",
//   ingredients: ["Green Tea Leaves"],
//   nutrition: { calories: 5, protein: "0g", carbs: "1g", fat: "0g" }
// },
{
  id: 36,
  name: "Masala Tea",
  price: 15,
  image: "/masalatea.jpg",
  category: "Beverages",
  ingredients: ["Tea", "Milk", "Spices"],
  nutrition: { calories: 90, protein: "2g", carbs: "11g", fat: "3g" }
},
{
  id: 37,
  name: "Black Coffee",
  price: 10,
  image: "/blackcoffee.jpg",
  category: "Beverages",
  ingredients: ["Coffee"],
  nutrition: { calories: 5, protein: "0g", carbs: "1g", fat: "0g" }
},
{
  id: 38,
  name: "Salt Lime Juice",
  price: 10,
  image: "/limejuice.jpg",
  category: "Beverages",
  ingredients: ["Lime", "Sugar", "Water"],
  nutrition: { calories: 60, protein: "0g", carbs: "15g", fat: "0g" }
},
{
  id: 39,
  name: "Soda Lime",
  price: 15,
  image: "/sodalime.jpg",
  category: "Beverages",
  ingredients: ["Lime", "Soda"],
  nutrition: { calories: 40, protein: "0g", carbs: "10g", fat: "0g" }
},
{
  id: 40,
  name: "Mohabbath Ka Sharbat",
  price: 20,
  image: "/mohabbath.jpg",
  category: "Beverages",
  ingredients: ["Milk", "Watermelon", "Rose Syrup"],
  nutrition: { calories: 210, protein: "6g", carbs: "40g", fat: "5g" }
},
// {
//   id: 41,
//   name: "Achaar Soda",
//   price: 25,
//   image: "/acharsoda.jpg",
//   category: "Beverages",
//   ingredients: ["Soda", "Pickle Masala", "Salt"],
//   nutrition: { calories: 35, protein: "0g", carbs: "8g", fat: "0g" }
// },
{
  id: 42,
  name: "Mor Soda",
  price: 15,
  image: "/morsoda.jpg",
  category: "Beverages",
  ingredients: ["Buttermilk", "Soda", "Salt"],
  nutrition: { calories: 40, protein: "2g", carbs: "5g", fat: "1g" }
},
{
  id: 43,
  name: "Chamathi Podi",
  price: 5,
  image: "/chamathipodi.jpg",
  category: "Chutney",
  ingredients: ["Coconut", "Chili", "Salt"],
  nutrition: { calories: 90, protein: "2g", carbs: "6g", fat: "6g" }
},
{
  id: 44,
  name: "Chamanthi",
  price: 5,
  image: "/chamanthi.jpg",
  category: "Chutney",
  ingredients: ["Coconut", "Green Chili", "Curry Leaves"],
  nutrition: { calories: 85, protein: "2g", carbs: "6g", fat: "6g" }
},
{
  id: 45,
  name: "Mulak Thirumiyath",
  price: 5,
  image: "/mulakthirumiyath.jpg",
  category: "Chutney",
  ingredients: ["Dry Chili", "Coconut Oil", "Salt"],
  nutrition: { calories: 80, protein: "1g", carbs: "5g", fat: "6g" }
},
{
  id: 46,
  name: "Manga Chamanthi",
  price: 5,
  image: "/mangachamanthi.jpg",
  category: "Chutney",
  ingredients: ["Raw Mango", "Coconut", "Chili"],
  nutrition: { calories: 95, protein: "2g", carbs: "8g", fat: "6g" }
},
{
  id: 47,
  name: "Nellika Chamanthi",
  price: 5,
  image: "/nellika.jpg",
  category: "Chutney",
  ingredients: ["Amla", "Coconut", "Chili"],
  nutrition: { calories: 90, protein: "2g", carbs: "9g", fat: "5g" }
},
{
  id: 48,
  name: "Kakarachi Fry",
  price: 30,
  image: "/kakarachi.jpg",
  category: "Seafood",
  ingredients: ["Kakarachi Fish", "Spices", "Oil"],
  nutrition: { calories: 220, protein: "20g", carbs: "2g", fat: "14g" }
},
{
  id: 49,
  name: "Kakarachi Thoran",
  price: 30,
  image: "/kakarachithoran.jpg",
  category: "Seafood",
  ingredients: ["Fish", "Coconut", "Spices"],
  nutrition: { calories: 230, protein: "21g", carbs: "5g", fat: "15g" }
},
{
  id: 50,
  name: "Quail Egg Bullseye 3",
  price: 20,
  image: "/kadamotta.jpg",
  category: "Egg",
  ingredients: ["Quail Eggs", "Oil", "Salt"],
  nutrition: { calories: 160, protein: "10g", carbs: "1g", fat: "12g" }
},
{
  id: 51,
  name: "Quail Egg Boiled",
  price: 7,
  image: "/kadamottaboil.jpg",
  category: "Egg",
  ingredients: ["Quail Eggs"],
  nutrition: { calories: 150, protein: "11g", carbs: "1g", fat: "11g" }
},
{
  id: 52,
  name: "Quail Egg Masala",
  price: 20,
  image: "/kadamottamasala.jpg",
  category: "Egg",
  ingredients: ["Quail Eggs", "Onion", "Spices"],
  nutrition: { calories: 200, protein: "12g", carbs: "6g", fat: "14g" }
},
{
  id: 53,
  name: "Quail Egg Omelette 3",
  price: 25,
  image: "/kadamottaomelette.jpg",
  category: "Egg",
  ingredients: ["Quail Eggs", "Onion", "Chili"],
  nutrition: { calories: 180, protein: "12g", carbs: "3g", fat: "13g" }
},
{
  id: 54,
  name: "Chicken Curry",
  price: 40,
  image: "/chickencurry.jpg",
  category: "Main",
  ingredients: ["Chicken", "Onion", "Spices"],
  nutrition: { calories: 320, protein: "28g", carbs: "6g", fat: "22g" }
},
{
  id: 55,
  name: "Egg Curry",
  price: 20,
  image: "/eggcurry.jpg",
  category: "Main",
  ingredients: ["Egg", "Onion", "Tomato", "Spices"],
  nutrition: { calories: 260, protein: "14g", carbs: "8g", fat: "18g" }
},
{
  id: 56,
  name: "Beef Curry",
  price: 50,
  image: "/beefcurry.jpg",
  category: "Main",
  ingredients: ["Beef", "Spices", "Onion"],
  nutrition: { calories: 350, protein: "30g", carbs: "5g", fat: "25g" }
},
{
  id: 57,
  name: "Fish Curry",
  price: 35,
  image: "/fishcurry.jpg",
  category: "Seafood",
  ingredients: ["Fish", "Tamarind", "Spices"],
  nutrition: { calories: 240, protein: "26g", carbs: "4g", fat: "14g" }
},
{
  id: 58,
  name: "Paneer Butter Masala",
  price: 45,
  image: "/paneerbutter.jpg",
  category: "Main",
  ingredients: ["Paneer", "Butter", "Tomato"],
  nutrition: { calories: 320, protein: "14g", carbs: "10g", fat: "24g" }
},
{
  id: 59,
  name: "Butter Chicken",
  price: 50,
  image: "/butterchicken.jpg",
  category: "Main",
  ingredients: ["Chicken", "Butter", "Cream"],
  nutrition: { calories: 420, protein: "30g", carbs: "10g", fat: "30g" }
},
{
  id: 60,
  name: "Soya Bean Roast",
  price: 30,
  image: "/soyaroast.jpg",
  category: "Main",
  ingredients: ["Soya Chunks", "Onion", "Spices"],
  nutrition: { calories: 260, protein: "22g", carbs: "18g", fat: "10g" }
},
{
  id: 61,
  name: "Tomato Chutney",
  price: 5,
  image: "/tomatochutney.jpg",
  category: "Chutney",
  ingredients: ["Tomato", "Onion", "Chili"],
  nutrition: { calories: 70, protein: "2g", carbs: "10g", fat: "2g" }
},
{
  id: 62,
  name: "Dry Shrimp Chamanthi",
  price: 15,
  image: "/chemmen.jpg",
  category: "Seafood",
  ingredients: ["Dry Shrimp", "Coconut", "Chili"],
  nutrition: { calories: 210, protein: "20g", carbs: "5g", fat: "12g" }
},
{
  id: 63,
  name: "Dry Fish Fry",
  price: 20,
  image: "/dryfish.jpg",
  category: "Seafood",
  ingredients: ["Dry Fish", "Oil", "Spices"],
  nutrition: { calories: 240, protein: "22g", carbs: "3g", fat: "16g" }
},
{
  id: 64,
  name: "Dry Shrimp Fry",
  price: 40,
  image: "/dryshrimp.jpg",
  category: "Seafood",
  ingredients: ["Dry Shrimp", "Spices", "Oil"],
  nutrition: { calories: 230, protein: "21g", carbs: "4g", fat: "15g" }
},
{
  id: 65,
  name: "Ethakka Puzhungiyath",
  price: 15,
  image: "/ethakka.jpg",
  category: "Snacks",
  ingredients: ["Raw Banana", "Salt"],
  nutrition: { calories: 160, protein: "2g", carbs: "37g", fat: "1g" }
},
{
  id: 66,
  name: "Egg Boiled",
  price: 15,
  image: "/eggboil.jpg",
  category: "Egg",
  ingredients: ["Egg"],
  nutrition: { calories: 78, protein: "6g", carbs: "1g", fat: "5g" }
},
{
  id: 67,
  name: "Omelette",
  price: 20,
  image: "/omelette.jpg",
  category: "Egg",
  ingredients: ["Egg", "Onion", "Chili"],
  nutrition: { calories: 120, protein: "7g", carbs: "2g", fat: "9g" }
},
{
  id: 68,
  name: "Bread Omelette",
  price: 40,
  image: "/breadomelette.jpg",
  category: "Snacks",
  ingredients: ["Bread", "Egg", "Onion"],
  nutrition: { calories: 240, protein: "10g", carbs: "26g", fat: "11g" }
},
{
  id: 69,
  name: "Veg Salad",
  price: 20,
  image: "/vegsalad.jpg",
  category: "Salad",
  ingredients: ["Cucumber", "Carrot", "Tomato"],
  nutrition: { calories: 90, protein: "2g", carbs: "18g", fat: "1g" }
},
{
  id: 70,
  name: "Fruit Salad",
  price: 50,
  image: "/fruitsalad.jpg",
  category: "Salad",
  ingredients: ["Apple", "Banana", "Papaya"],
  nutrition: { calories: 120, protein: "2g", carbs: "28g", fat: "1g" }
},
{
  id: 71,
  name: "Chicken Salad",
  price: 40,
  image: "/chickensalad.jpg",
  category: "Salad",
  ingredients: ["Chicken", "Vegetables", "Mayonnaise"],
  nutrition: { calories: 240, protein: "22g", carbs: "8g", fat: "14g" }
},
{
  id: 72,
  name: "Chapati Roll",
  price: 40,
  image: "/chapatiroll.jpg",
  category: "Street Food",
  ingredients: ["Chapati", "Chicken", "Onion"],
  nutrition: { calories: 280, protein: "15g", carbs: "35g", fat: "10g" }
},
{
  id: 73,
  name: "Chocolate Dipped Fruits",
  price: 10,
  image: "/chocofruit.jpg",
  category: "Dessert",
  ingredients: ["Fruit", "Chocolate"],
  nutrition: { calories: 180, protein: "2g", carbs: "28g", fat: "7g" }
},
{
  id: 74,
  name: "Manga Idichu Polichathu",
  price: 25,
  image: "/manga.jpg",
  category: "Snacks",
  ingredients: ["Raw Mango", "Chili", "Salt"],
  nutrition: { calories: 80, protein: "1g", carbs: "18g", fat: "1g" }
},
// {
//   id: 75,
//   name: "Chicken Momos",
//   price: 70,
//   image: "/chickenmomos.jpg",
//   category: "Street Food",
//   ingredients: ["Chicken", "Flour", "Spices"],
//   nutrition: { calories: 260, protein: "18g", carbs: "28g", fat: "8g" }
// },
// {
//   id: 76,
//   name: "Veg Momos",
//   price: 60,
//   image: "/vegmomos.jpg",
//   category: "Street Food",
//   ingredients: ["Vegetables", "Flour"],
//   nutrition: { calories: 220, protein: "7g", carbs: "34g", fat: "6g" }
// },
{
  id: 77,
  name: "Egg Salad",
  price: 20,
  image: "/eggsalad.jpg",
  category: "Salad",
  ingredients: ["Egg", "Vegetables", "Mayonnaise"],
  nutrition: { calories: 200, protein: "12g", carbs: "8g", fat: "14g" }
},
// 
// {
//   id: 80,
//   name: "Bonvita",
//   price: 25,
//   image: "/bonvita.jpg",
//   category: "Beverages",
//   ingredients: ["Milk", "Bonvita Powder"],
//   nutrition: { calories: 180, protein: "6g", carbs: "28g", fat: "5g" }
// },
// {
//   id: 81,
//   name: "Rose Tea",
//   price: 20,
//   image: "/rosetea.jpg",
//   category: "Beverages",
//   ingredients: ["Tea", "Milk", "Rose Syrup"],
//   nutrition: { calories: 95, protein: "2g", carbs: "14g", fat: "3g" }
// },
{
  id: 82,
  name: "Chukku Kapi",
  price: 15,
  image: "/chukkukapi.jpg",
  category: "Beverages",
  ingredients: ["Dry Ginger", "Coffee", "Jaggery"],
  nutrition: { calories: 60, protein: "1g", carbs: "14g", fat: "1g" }
},
{
  id: 83,
  name: "Thulsi Tea",
  price: 15,
  image: "/thulsithea.jpg",
  category: "Beverages",
  ingredients: ["Tulsi Leaves", "Tea", "Honey"],
  nutrition: { calories: 40, protein: "0g", carbs: "10g", fat: "0g" }
},
{
  id: 84,
  name: "Kattan Tea",
  price: 10,
  image: "/kattan.jpg",
  category: "Beverages",
  ingredients: ["Black Tea", "Sugar"],
  nutrition: { calories: 20, protein: "0g", carbs: "5g", fat: "0g" }
},
{
  id: 85,
  name: "Soda Sarbath",
  price: 15,
  image: "/sodasarbath.jpg",
  category: "Beverages",
  ingredients: ["Soda", "Sarbath Syrup"],
  nutrition: { calories: 80, protein: "0g", carbs: "20g", fat: "0g" }
},
{
  id: 86,
  name: "Bullseye Egg",
  price: 15,
  image: "/bullseye.jpg",
  category: "Egg",
  ingredients: ["Egg", "Oil", "Salt"],
  nutrition: { calories: 120, protein: "7g", carbs: "1g", fat: "9g" }
},
// {
//   id: 87,
//   name: "Egg Scrambled",
//   price: 0,
//   image: "/eggchikkiyath.jpg",
//   category: "Egg",
//   ingredients: ["Egg", "Onion", "Spices"],
//   nutrition: { calories: 200, protein: "12g", carbs: "4g", fat: "15g" }
// },
{
id: 88,
name: "Pazham Nira",
price: 20,
image: "/pazhamnira.jpg",
category: "Snacks",
ingredients: ["Ripe Banana", "Coconut", "Sugar", "Cardamom"],
nutrition: { calories: 220, protein: "3g", carbs: "40g", fat: "5g" }
},
{
id: 89,
name: "Peanut Roast",
price: 10,
image: "/peanut.jpg",
category: "Snacks",
ingredients: ["Peanuts", "Salt"],
nutrition: { calories: 260, protein: "12g", carbs: "10g", fat: "20g" }
},
{
id: 90,
name: "Popcorn",
price: 10,
image: "/popcorn.jpg",
category: "Snacks",
ingredients: ["Corn Kernels", "Butter", "Salt"],
nutrition: { calories: 180, protein: "4g", carbs: "22g", fat: "9g" }
},
{
id: 91,
name: "Pineapple",
price: 10,
image: "/pineapple.jpg",
category: "Snacks",
ingredients: ["Fresh Pineapple"],
nutrition: { calories: 50, protein: "1g", carbs: "13g", fat: "0g" }
},
{
id: 92,
name: "Masala Munthiri",
price: 15,
image: "/masalamunthiri.jpg",
category: "Snacks",
ingredients: ["Cashew Nuts", "Spices", "Salt"],
nutrition: { calories: 180, protein: "5g", carbs: "10g", fat: "14g" }
},
{
id: 93,
name: "Chocolate Brownie",
price: 20,
image: "/brownie.jpg",
category: "Dessert",
ingredients: ["Chocolate", "Flour", "Butter", "Sugar"],
nutrition: { calories: 250, protein: "4g", carbs: "30g", fat: "12g" }
},
{
id: 94,
name: "White Forest Cake",
price: 25,
image: "/whiteforest.jpg",
category: "Dessert",
ingredients: ["Cream", "Cake Base", "White Chocolate"],
nutrition: { calories: 280, protein: "4g", carbs: "35g", fat: "14g" }
},
{
id: 95,
name: "Pista Milk",
price: 15,
image: "/pistamilk.jpg",
category: "Beverages",
ingredients: ["Milk", "Pistachio", "Sugar"],
nutrition: { calories: 200, protein: "8g", carbs: "22g", fat: "9g" }
},
{
id: 96,
name: "Watermelon Juice",
price: 10,
image: "/watermelonjuice.jpg",
category: "Beverages",
ingredients: ["Watermelon"],
nutrition: { calories: 45, protein: "1g", carbs: "11g", fat: "0g" }
},
{
id: 97,
name: "Chicken 65",
price: 50,
image: "/chicken65.jpg",
category: "Main",
ingredients: ["Chicken", "Spices", "Oil"],
nutrition: { calories: 320, protein: "24g", carbs: "8g", fat: "20g" }
},
{
id: 98,
name: "Boli Payasam",
price: 35,
image: "/bolipayasam.jpg",
category: "Dessert",
ingredients: ["Boli", "Milk", "Sugar"],
nutrition: { calories: 300, protein: "6g", carbs: "45g", fat: "10g" }
},
{
id: 99,
name: "Manga Irink (Type 1)",
price: 5,
image: "/mangadrink1.jpg",
category: "Beverages",
ingredients: ["Mango", "Salt", "Chili"],
nutrition: { calories: 40, protein: "0g", carbs: "10g", fat: "0g" }
},
{
id: 100,
name: "Manga Items (Type 2)",
price: 5,
image: "/mangadrink2.jpg",
category: "Beverages",
ingredients: ["Raw Mango", "Sugar", "Salt"],
nutrition: { calories: 45, protein: "0g", carbs: "11g", fat: "0g" }
},
{
id: 101,
name: "Therali",
price: 7,
image: "/therali.jpg",
category: "Snacks",
ingredients: ["Rice Flour", "Jaggery", "Coconut"],
nutrition: { calories: 150, protein: "3g", carbs: "32g", fat: "3g" }
},
{
id: 102,
name: "Bread Pizza",
price: 20,
image: "/breadpizza.jpg",
category: "Snacks",
ingredients: ["Bread", "Cheese", "Vegetables"],
nutrition: { calories: 240, protein: "8g", carbs: "28g", fat: "11g" }
},
{
id: 103,
name: "Chilly Mushroom",
price: 50,
image: "/chillymushroom.jpg",
category: "Main",
ingredients: ["Mushroom", "Chili Sauce", "Spices"],
nutrition: { calories: 210, protein: "6g", carbs: "20g", fat: "10g" }
},
{
id: 104,
name: "Kannur Cocktail",
price: 30,
image: "/kannurcocktail.jpg",
category: "Beverages",
ingredients: ["Fruit Mix", "Syrup", "Ice"],
nutrition: { calories: 120, protein: "1g", carbs: "28g", fat: "0g" }
},
{
id: 105,
name: "Sweet Corn (Steamed)",
price: 20,
image: "/sweetcorn.jpg",
category: "Snacks",
ingredients: ["Sweet Corn", "Salt", "Butter"],
nutrition: { calories: 110, protein: "3g", carbs: "22g", fat: "2g" }
},
{
id: 106,
name: "Kappa",
price: 25,
image: "/kappa.jpg",
category: "Main",
ingredients: ["Tapioca", "Salt", "Coconut Oil"],
nutrition: { calories: 180, protein: "2g", carbs: "42g", fat: "1g" }
},
{
id: 107,
name: "Chemb",
price: 20,
image: "/chemb.jpg",
category: "Snacks",
ingredients: ["Taro Root", "Salt"],
nutrition: { calories: 140, protein: "2g", carbs: "34g", fat: "0g" }
},
{
id: 108,
name: "Kachil",
price: 20,
image: "/kachil.jpg",
category: "Snacks",
ingredients: ["Purple Yam", "Salt"],
nutrition: { calories: 150, protein: "2g", carbs: "36g", fat: "0g" }
},
{
id: 109,
name: "Chappathi",
price: 10,
image: "/chappathi.jpg",
category: "Main",
ingredients: ["Wheat Flour", "Water", "Salt"],
nutrition: { calories: 120, protein: "3g", carbs: "22g", fat: "2g" }
},
{
id: 110,
name: "Chicken Fry",
price: 30,
image: "/chickenfry.jpg",
category: "Main",
ingredients: ["Chicken", "Spices", "Oil"],
nutrition: { calories: 350, protein: "28g", carbs: "5g", fat: "24g" }
}




];

export default foodItems;