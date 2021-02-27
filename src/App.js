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
    searchTerm: ""
  }


  componentDidMount() {
    fetch("data/airports.json")
    .then( resp => resp.json())
    .then( resp => this.setState({rawData: resp, displayData: resp}))
  }

  handleChange = (e) => {

    const {type, name, value, checked} =  e.target;
    console.log(type, name, value, checked);
    const { rawData, activeFilters, searchTerm} = this.state;

    const searchInput = type === "text"  ? value : searchTerm;
    const checkboxFilters = type === "checkbox" ? checked ?  activeFilters.concat(name) :  activeFilters.filter(filter => filter !== name) : activeFilters;
    
    
    const typeFilteredData = checkboxFilters.length ? rawData.filter( data => checkboxFilters.includes(data.type) ) : rawData;
    console.log("seachInput", searchInput, searchTerm);

    const searchFilteredData = searchInput.length ? typeFilteredData.filter(data => (
      data.name.toLowerCase().includes(value.toLowerCase()) ||
      data.icao.toLowerCase().includes(value.toLowerCase()) ||
      (data.iata && data.iata.toLowerCase().includes(value.toLowerCase())) ||
      (data.city && data.city.toLowerCase().includes(value.toLowerCase())) ||
      String(data.latitude).includes(value.toLowerCase()) ||
      String(data.longitude).includes(value.toLowerCase()) ||
      data.country.toLowerCase().includes(value.toLowerCase())
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
        <Pagination />
      </div>
    );
  }
}

export default App;
