import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GeoOptions, GEO_URL_API } from "../../api";


const Search = ({ onSearchChange }) => {

    const [search, setSearch] = useState(null);

    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
    }

    const loadOptions = (inputValues) => {

        return fetch(`${GEO_URL_API}/cities?minPopulation=1000000&namePrefix=${inputValues}`, GeoOptions)
            .then((response) => response.json())
            .then((response) => {
                return {
                    options: response.data.map((city) => {
                        return {
                            value: `${city.latitude} ${city.longitude}`,
                            label: `${city.name}, ${city.countryCode}`,
                        }
                    })
                }
            })
            .catch(err => console.error(err));
    }

    return (
        <div className="search">
            <AsyncPaginate
                placeholder="Search Your Location"
                debounceTimeout={600}
                value={search}
                onChange={handleOnChange}
                loadOptions={loadOptions}
            />
        </div>

    )
}
export default Search;