import "./Category.css";
import Input from "../../components/Input";

function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="floral"
          title="Floral"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="oriental"
          title="Oriental"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="woody"
          title="Woody"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="fresh"
          title="Fresh"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;