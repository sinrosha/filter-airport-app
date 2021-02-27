import React from "react"
import "./assets/css/reset.css"
import "./assets/css/main.css"
import Header from "./Components/Header"
import Filter from "./Components/Filter"
import AirportList from "./Components/AirportList"
import Pagination from "./Components/Pagination"

class App extends React.Component {

  state = {
    rawData: [],
    displayData: [],
    activeFilters: [],
    searchTerm: "",
    currentPage: 1,
    listWindow: 4
  }


  componentDidMount() {
    fetch("data/airports.json")
    .then( resp => resp.json())
    .then( resp => this.setState({rawData: resp, displayData: resp}))
  }

  handleChange = (e) => {
    const {type, name, value, checked} =  e.target;
    const { rawData, activeFilters, searchTerm} = this.state;

    const searchInput = type === "text"  ? value : searchTerm;
    const checkboxFilters = type === "checkbox" ? checked ?  activeFilters.concat(name) :  activeFilters.filter(filter => filter !== name) : activeFilters;
    const typeFilteredData = checkboxFilters.length ? rawData.filter(data => checkboxFilters.includes(data.type) ) : rawData;

    const searchFilteredData = searchInput.length ? typeFilteredData.filter(data => (
      data.name.toLowerCase().includes(searchInput.toLowerCase()) ||
      data.icao.toLowerCase().includes(searchInput.toLowerCase()) ||
      (data.iata && data.iata.toLowerCase().includes(searchInput.toLowerCase())) ||
      (data.city && data.city.toLowerCase().includes(searchInput.toLowerCase())) ||
      String(data.latitude).includes(searchInput.toLowerCase()) ||
      String(data.longitude).includes(searchInput.toLowerCase()) ||
      data.country.toLowerCase().includes(searchInput.toLowerCase())
    )) : typeFilteredData;
  
    this.setState({
      activeFilters: checkboxFilters,
      displayData: searchFilteredData,
      searchTerm: searchInput
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Filter onChange={this.handleChange} />
        <AirportList displayData={this.state.displayData} />
        <Pagination displayData={this.state.displayData} />
      </div>
    );
  }
}

export default App;
