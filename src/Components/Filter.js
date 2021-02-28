import FilterByType from "./FilterByType"
import FilterBySearch from "./FilterBySearch"

function Filter({onChange,searchTerm, activeFilters}) {
    return (
      <div className="filter">
        <FilterByType onChange={onChange} activeFilters={activeFilters} />
        <FilterBySearch onChange={onChange} searchTerm={searchTerm} />
      </div>
    );
}
  
export default Filter;