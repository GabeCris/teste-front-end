import Home from "./containers/Home/Home"; 
import Categories from "./containers/Categories/Categories";
import ShowCase from "./containers/ShowCase/ShowCase";
import Brands from "./containers/Brands/Brands";
import Partners from "./containers/Partners/Partners";
import Blog from "./containers/Blog/Blog";
import Instagram from "./containers/Instagram/Instagram";
import Form from "./containers/Form/Form";
import Footer from "./containers/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Home></Home>
      <Categories></Categories>
      <ShowCase></ShowCase>
      <Brands></Brands>
      <Partners></Partners>
      <Blog></Blog>
      <Instagram></Instagram>
      <Form></Form>
      <Footer></Footer>
    </div>
  );
}

export default App;
