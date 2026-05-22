import { useEffect, useState } from "react";
import { getRecipes } from "../services/api";
import { useSearchParams } from "react-router-dom";

export default function Recipes() {

  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams] = useSearchParams();
//   console.log(searchParams);
  const search = searchParams.get('search');
  useEffect(() => {

    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await getRecipes(search);
        setRecipes(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
      finally{
        setIsLoading(false);
      }
    };

    fetchData();

  }, [search]);
if(isLoading){
return (
      <div className="flex flex-col items-center justify-center min-h-[400px] gap-2">
        <svg className="animate-spin h-8 w-8 text-amber-950" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <span className="text-amber-950 font-medium">جاري تحميل الوصفات...</span>
      </div>
    );
  }
return (
  <>

    <div className="container mx-auto px-6 py-16">
      {
        recipes.length === 0?(
        <div className="text-center text-gray-500 py-10">
            لم يتم العثور على أي وصفات. حاول البحث بكلمة أخرى!
          </div>
        
     ):
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
        >
          <img
            src={recipe.image_url}
            alt={recipe.title}
            className="w-full h-40 object-cover"
          />

          <div className="p-4">

            <h3 className="font-semibold text-lg mb-2">
              {recipe.title}
            </h3>

            <p className="text-sm text-gray-500">
              {recipe.publisher}
            </p>

          </div>

        </div>
      ))}

    </div>
    }
    </div>
  </>
);
}