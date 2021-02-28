function FilterBySearch({onChange, searchTerm}) {
    return (
        <div className="filterBySearch">
            <h2>Filter by search</h2>
            <div className="searchBox">
              <input type="text" name="search" value={searchTerm} onChange={onChange}/>
            </div>
        </div>
    )
}

export default FilterBySearch;