
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Category from "./components/Category/Category";
import Category2 from "./components/Category/Category2";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import Image1 from "./assets/drogas/azitromicina.png";
import Image2 from "./assets/product/p-7.png"
import Products from "./components/Products/Products";
import Blogs from "./components/Blogs/Blogs";

const BannerData={
  discount: "30% DE DESCUENTO",
  title: "Contra la infeccion",
  date: "26/05 hasta 2/06",
  image: Image1,
  title2: "Sientete mejor",
  title3: "Oferta de verano",
  title4: "Cuida tu salud a un excelente precio",
  bgColor: "#3A6DA9",

};

const BannerData2={
  discount: "25% DE DESCUENTO",
  title: "Contra la tos",
  date: "20/05 hasta 27/05",
  image: Image2,
  title2: "Alivia tu garganta",
  title3: "Oferta de verano",
  title4: "Ahorrate un peso de encima",
  bgColor: "#8E5B9F",

};

const App = () => {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
      <Navbar />
      <Hero />
      <Category />
      <Category2 />
      <Services />
      <Banner data={BannerData}/>
      <Products />
      <Banner data={BannerData2}/>
      <Blogs />
    </div>
  );
};

export default App;