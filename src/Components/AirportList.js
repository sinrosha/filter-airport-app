import React from 'react'

function AirportList({displayData, currentPage, handleClick}) {

    const startWindow = currentPage * 4 - 4;
    const endWindow = currentPage * 4; 
   
    return  displayData.length > 0 ? ( <div className="airportList">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>ICAO</th>
              <th>IATA</th>
              <th>Elev.</th>
              <th>Lat.</th>
              <th>Long.</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
          {
             displayData.slice(startWindow, endWindow).map(airport => (
                <tr key={airport.id}> 
                  <td>{airport.name}</td>
                  <td>{airport.icao}</td>
                  <td>{airport.iata}</td>
                  <td>{airport.elevation}</td>
                  <td>{airport.latitude}</td>
                  <td>{airport.longitude}</td>
                  <td>{airport.type}</td>
                </tr>
            ))
          }
          </tbody>
        </table>
        
        </div>) : ( <p className="noResults">No airports as per your filter</p> );
}
  
export default AirportList;