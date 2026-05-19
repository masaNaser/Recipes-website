import { Link } from "react-router-dom";

export default function Home() {
  const search = [
    "pizza", "carrot", "broccoli", "asparagus", "cauliflower", "corn", "cucumber",
    "green pepper", "lettuce", "mushrooms", "onion", "potato", "pumpkin", "red pepper",
    "tomato", "beetroot", "brussel sprouts", "peas", "zucchini", "radish", "sweet potato",
    "artichoke", "leek", "cabbage", "celery", "chili", "garlic", "basil", "coriander",
    "parsley", "dill", "rosemary", "oregano", "cinnamon", "saffron", "green bean", "bean",
    "chickpea", "lentil", "apple", "apricot", "avocado", "banana", "blackberry", "blackcurrant",
    "blueberry", "boysenberry", "cherry", "coconut", "fig", "grape", "grapefruit", "kiwifruit",
    "lemon", "lime", "lychee", "mandarin", "mango", "melon", "nectarine", "orange", "papaya",
    "passion fruit", "peach", "pear", "pineapple", "plum", "pomegranate", "quince", "raspberry",
    "strawberry", "watermelon", "salad", "pasta", "popcorn", "lobster", "steak", "bbq",
    "pudding", "hamburger", "pie", "cake", "sausage", "tacos", "kebab", "poutine", "seafood",
    "chips", "fries", "masala", "paella", "som tam", "chicken", "toast", "marzipan", "tofu",
    "ketchup", "hummus", "maple syrup", "parma ham", "fajitas", "champ", "lasagna", "poke",
    "chocolate", "croissant", "arepas", "bunny chow", "pierogi", "donuts", "rendang", "sushi",
    "ice cream", "duck", "curry", "beef", "goat", "lamb", "turkey", "pork", "fish", "crab",
    "bacon", "ham", "pepperoni", "salami", "ribs",
  ];

  return (
    <div className="min-h-screen bg-gray-50/50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
            Welcome to <span className="text-red-500">Recipes</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Explore a world of delicious recipes! Click on any ingredient or dish
            below to discover recipes instantly. From quick meals to special
            dishes, everything is one click away.
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 sm:gap-6">
          {search.map((item, index) => (
            <Link 
              to={`/recipes?search=${item}`} 
              key={index} 
              className="group flex flex-col items-center justify-center p-3 rounded-2xl bg-white border border-gray-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-red-200"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gray-50 flex items-center justify-center mb-2 transition-colors duration-300 group-hover:bg-red-50">
                <span className="text-lg font-bold text-gray-400 group-hover:text-red-400 uppercase">
                  {item[0]}
                </span>
              </div>
              
              <span className="text-xs font-semibold text-gray-700 text-center px-1 group-hover:text-red-500 transition-colors duration-200 capitalize truncate w-full">
                {item}
              </span>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
