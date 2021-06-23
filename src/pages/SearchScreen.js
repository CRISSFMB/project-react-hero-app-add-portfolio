//hooks

import { useLocation } from "react-router-dom";
import { useForm } from "../hooks/useForm";

//selectors or helpers

import { getHeroesByName } from "../selectors/getHeroesByName";

//package

import queryString from "query-string";
import { HeroCard } from "../components/HeroCard";

export const SearchScreen = ({ history }) => {
  const { search } = useLocation();

  const { q = "" } = queryString.parse(search);

  //form
  const [valuesInput, handleInputChangeSearch] = useForm({
    searchText: q,
  });
  const { searchText } = valuesInput;

  //inputSubmit

  const handlesubmit = (e) => {
    e.preventDefault();
    //insert query

    history.push(`?q=${searchText}`);
  };

  //heroesfiltered

  const heroesfiltered = getHeroesByName(searchText);

  return (
    <div className="container">
      <h3 className="text-center h1 pt-2">SearchScreen</h3>
      <div className="row">
        <div className="col-12 col-md-6">
          <form onSubmit={handlesubmit}>
            <label htmlFor="search" className="form-label">
              Heldensuche
            </label>
            <input
              type="text"
              className="form-control"
              id="search"
              placeholder="Held suchen  z.B. : Hulk "
              name="searchText"
              onChange={handleInputChangeSearch}
              value={searchText}
              autoComplete="off"
            />
          </form>
        </div>

        <div className="col-12 col-md-6">
          <span className="text-center d-block">Suchergebnisse</span>

          {q === "" && (
            <div className="text-center bg-info mt-1 p-3">
              such einen Helden
            </div>
          )}
          {q !== "" && heroesfiltered.length === 0 && (
            <div className="text-center bg-info mt-1 bg-danger p-3">
              Held konnte nicht gefunden werden
            </div>
          )}

          {heroesfiltered.map((hero) => (
            <HeroCard {...hero} key={hero.id} />
          ))}
        </div>
      </div>
    </div>
  );
};
