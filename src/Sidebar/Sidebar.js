import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";
import "./Sidebar.css";

const Sidebar = ({ handleChange }) => {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCrpA_vzHhtBd6gIDmXqxHVsTDFujxXb3WhQ&usqp=CAU"
              alt="logo"
            />
          </h1>
        </div>
        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
        <Colors handleChange={handleChange} />
      </section>
    </>
  );
};

export default Sidebar;
