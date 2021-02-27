function AirportList({displayData}) {

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
          {
             displayData.map(airport => (
              <tbody key={airport.id}>
                <tr>
                  <td>{airport.name}</td>
                  <td>{airport.icao}</td>
                  <td>{airport.iata}</td>
                  <td>{airport.elevation}</td>
                  <td>{airport.latitude}</td>
                  <td>{airport.longitude}</td>
                  <td>{airport.type}</td>
                </tr>
              </tbody>
            ))
          }
        </table>
        
        </div>) : ( <p>No airports as per your filter</p> );
}
  
export default AirportList;