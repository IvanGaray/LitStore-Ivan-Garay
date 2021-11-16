import { useContext, useState } from "react";
import { AppContext } from '../../components/context/AppContext';
import ItemList from "../../components/ItemsList/ItemList";
import "./home.css";

const Home = () => {

  const [loading, setLoading] = useState(true);
  const {products} = useContext(AppContext);


  return (
    <> 
    <div id="Home" className="home-container">
      <h2 className="greeting">Productos</h2>
      {/* // llamar al ITEM LIST // */}
      <ItemList items={products} />
      {/* {loading ? <h2> Loading </h2> : <ItemList items={products} />} */}
    </div>
    </>
  );
};

export default Home;