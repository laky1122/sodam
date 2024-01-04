import CategoryHeader from '../component/common/categoryHeader';
import News from '../component/category2/news'

function Category2A() {
  document.title = "우리술 소식 | 소담";
  return (
        <>
       
        <CategoryHeader title={"우리술 소식"}/>
        <News/>
       
    </>
  );
}

export default Category2A;
