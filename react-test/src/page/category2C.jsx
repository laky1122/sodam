import CategoryHeader from '../component/common/categoryHeader';
import Weather from '../component/category2/weather';

function Category2C() {
  document.title = "날씨로 알아보는 우리술 추천 | 소담";
  return (
        <>
        <CategoryHeader title={"날씨로 알아보는 우리술 추천"}/>
        <Weather/>
        </>
  );
}

export default Category2C;
