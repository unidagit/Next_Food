import { ICategories } from "../../lib/api";
import { ButtonCatgeory } from "../buttons/Button";

function CategoryItem({
  category,
  onClickHandler,
}: {
  category: ICategories;
  onClickHandler: any;
}) {
  return (
    <ButtonCatgeory category={category} onClickHandler={onClickHandler}>
      {category.strCategory}
    </ButtonCatgeory>
  );
}

export default CategoryItem;
