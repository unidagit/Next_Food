import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ICategoriesQuery } from "../../lib/api";

function MealCard({ mealInfo }: { mealInfo: ICategoriesQuery }) {
  return (
    <Link href={`/meals/${mealInfo.idMeal}`}>
      <Image
        src={mealInfo.strMealThumb}
        alt="Picture of the food"
        width={200}
        height={200}
      />
      <p>{mealInfo.strMeal}</p>
    </Link>
  );
}

export default MealCard;
