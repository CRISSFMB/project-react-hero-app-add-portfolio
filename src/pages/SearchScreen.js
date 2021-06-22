import { useForm } from "../hooks/useForm";
import { getHeroesByName } from "../selectors/getHeroesByName";

export const SearchScreen = () => {
  //form
  const [valuesInput, handleInputChangeSearch] = useForm({
    searchText: "",
  });
  const { searchText } = valuesInput;

  //inputSubmit

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(searchText);
  };

  // const heroesfiltered = getHeroesByName(value);

  return (
    <div className="container">
      <h3 className="text-center ">SearchScreen</h3>
      <div className="row">
        <div className="col-6">
          <form onSubmit={handlesubmit}>
            <label htmlFor="search" className="form-label">
              HeldenSuchen
            </label>
            <input
              type="text"
              className="form-control"
              id="search"
              placeholder="heldenSuchen"
              name="searchText"
              onChange={handleInputChangeSearch}
              value={searchText}
            />
          </form>
        </div>

        <div className="col-6">
          {/* <div className="card" style={{ width: "18rem" }}>
            <img
              src={`../../public/assets/images/${id}.jpg`}
              className="card-img-top"
              alt={superhero}
            />
            <div className="card-body">
              <h5 className="card-title">{superhero}</h5>
              <p className="card-text">Some quick example</p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};
