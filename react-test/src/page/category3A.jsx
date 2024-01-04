import CategoryHeader from '../component/common/categoryHeader';
import Page2 from '../component/category3/page2';



function Category1A() {
  document.title = "전통주 주점 | 소담";
  return (
        <>
        <CategoryHeader title={"우리술 구매처"}/>

        <Page2/>
    </>
  );
}

export default Category1A;
