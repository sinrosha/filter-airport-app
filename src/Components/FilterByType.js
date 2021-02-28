import React from "react"
import  {IoCheckboxOutline, IoCheckboxSharp} from "react-icons/io5"

class FilterByType extends React.Component {

    render() {
        return (
        <div className="filterByType">
            <h2>Type</h2>
            <ul>
              <li>
                <label>
                  <div className="checkIcon">
                      { this.props.activeFilters.includes("small") ? <IoCheckboxSharp/> : <IoCheckboxOutline/> }    
                  </div>
                  <input type="checkbox" name="small" checked={this.props.activeFilters.includes("small")} onChange={this.props.onChange}/>
                  Small
                </label>
              </li>
              <li>
                <label>
                    <div className="checkIcon">
                        { this.props.activeFilters.includes("medium") ? <IoCheckboxSharp/> : <IoCheckboxOutline/> }    
                    </div>
                    <input type="checkbox" name="medium" checked={this.props.activeFilters.includes("medium")} onChange={this.props.onChange}/>
                    Medium
                </label>
              </li>
              <li>
                <label>
                    <div className="checkIcon">
                        { this.props.activeFilters.includes("large") ? <IoCheckboxSharp/> : <IoCheckboxOutline/> }    
                    </div>
                    <input type="checkbox" name="large" checked={this.props.activeFilters.includes("large")} onChange={this.props.onChange} />
                    Large
                </label>
              </li>
              <li>
              <label>
                    <div className="checkIcon">
                        { this.props.activeFilters.includes("heliport") ? <IoCheckboxSharp/> : <IoCheckboxOutline/> }    
                    </div>
                  <input type="checkbox" name="heliport"  checked={this.props.activeFilters.includes("heliport")} onChange={this.props.onChange}/>
                  Heliport
                </label>
              </li>
              <li>
              <label>
                    <div className="checkIcon">
                        { this.props.activeFilters.includes("closed") ? <IoCheckboxSharp/> : <IoCheckboxOutline/> }    
                    </div>
                  <input type="checkbox" name="closed" checked={this.props.activeFilters.includes("closed")} onChange={this.props.onChange}/>
                  Closed
                </label>
              </li>
              <li>
              <label>
                    <div className="checkIcon">
                        { this.props.activeFilters.includes("favourites") ? <IoCheckboxSharp/> : <IoCheckboxOutline/> }    
                    </div>
                  <input type="checkbox" name="favourites" checked={this.props.activeFilters.includes("favourites")} onChange={this.props.onChange}/>
                  In your favourites
                </label>
              </li>
            </ul>
        </div>
        )
    }
}


export default FilterByType;