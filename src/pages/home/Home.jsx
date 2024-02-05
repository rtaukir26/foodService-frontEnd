import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import chickenImg from "../../assets/images/food/chicken-biryani.avif";

const Home = () => {
  return (
    <div className="home_main_container">
      <Header />
      <div className="home_body">
        <Sidebar />
        <div className="body">
          <p>order the food and taste!</p>
          <div className="card_con">
            <div className="card">
              <img src={chickenImg} alt="food" />
              <div>
                <p>Chicken biryani</p>
                <p>description of the tasty biryani</p>
              </div>
            </div>
            <div className="card">
              <img src={chickenImg} alt="food" />
              <div>
                <p>Chicken biryani</p>
                <p>description of the tasty biryani</p>
              </div>
            </div>
            <div className="card">
              <img src={chickenImg} alt="food" />
              <div>
                <p>Chicken biryani</p>
                <p>description of the tasty biryani</p>
              </div>
            </div>
            <div className="card">
              <img src={chickenImg} alt="food" />
              <div>
                <p>Chicken biryani</p>
                <p>description of the tasty biryani</p>
              </div>
            </div>
            <div className="card">
              <img src={chickenImg} alt="food" />
              <div>
                <p>Chicken biryani</p>
                <p>description of the tasty biryani</p>
              </div>
            </div>
            <div className="card">
              <img src={chickenImg} alt="food" />
              <div>
                <p>Chicken biryani</p>
                <p>description of the tasty biryani</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
