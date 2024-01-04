// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Header from './component/common/header';
import Main from './component/main/main';
import Category1A from './page/category1A';
import Category1B from './page/category1B';
import Category2A from './page/category2A';
import Category2B from './page/category2B';
import Category3A from './page/category3A';
import Category3B from './page/category3B';
import Category3C from './page/category3C';
import Category4A from './page/category4A';
import Category4B from './page/category4B';
import Category4C from './page/category4C';
import TopButton from './component/common/topButton';
import Footer from './component/common/footer';


function App() {
  return (
    
    <Router>

      <Header/>
     
      <Routes>
        <Route index element={<Main/>}/>
        <Route path="/category1" element={<Category1A/>}/>
        <Route path="/category1/Hk2" element={<Category1B/>}/>

        <Route path="/category2" element={<Category2A/>}/>
        <Route path="/category2/post" element={<Category2B/>}/>

        <Route path="/category3" element={<Category3A/>}/>
        <Route path="/category3/offline" element={<Category3B/>}/>
        <Route path="/category3/online" element={<Category3C/>}/>

        <Route path="/category4" element={<Category4A/>}/>
        <Route path="/category4/main2" element={<Category4B/>}/>
        <Route path="/category4/main3" element={<Category4C/>}/>
      </Routes>

      <TopButton/>
      <Footer/>
    </Router>
  );
}

export default App;
