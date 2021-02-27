import FilterByType from "./FilterByType"
import FilterBySearch from "./FilterBySearch"

function Filter({onChange}) {
    return (
      <div className="filter">
        <FilterByType onChange={onChange} />
        <FilterBySearch onChange={onChange} />
      </div>
    );
}
  
export default Filter;