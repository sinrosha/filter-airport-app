import React from "react"
import  {IoCheckboxOutline, IoCheckboxSharp} from "react-icons/io5"

class FilterByType extends React.Component {

    state = {
        small: false,
        medium: false,
        large: false,
        heliport: false,
        closed: false,
        favourites: false
    }

    handleChange = (e) => {
        const {checked, name} = e.target;
        this.setState({
            [name]: checked
        });
        this.props.onChange(e);
    }

    render() {
        return (
        <div className="filterByType">
            <h2>Type</h2>
            <ul>
              <li>
                <label>
                  <div className="checkIcon">
                      { this.state.small ? <IoCheckboxSharp/> : <IoCheckboxOutline/> }    
                  </div>
                  <input type="checkbox" name="small" checked={this.state.small} onChange={this.handleChange}/>
                  Small
                </label>
              </li>
              <li>
                <label>
                    <div className="checkIcon">
                        { this.state.medium ? <IoCheckboxSharp/> : <IoCheckboxOutline/> }    
                    </div>
                    <input type="checkbox" name="medium" checked={this.state.medium} onChange={this.handleChange}/>
                    Medium
                </label>
              </li>
              <li>
                <label>
                    <div className="checkIcon">
                        { this.state.large ? <IoCheckboxSharp/> : <IoCheckboxOutline/> }    
                    </div>
                    <input type="checkbox" name="large" checked={this.state.large} onChange={this.handleChange} />
                    Large
                </label>
              </li>
              <li>
              <label>
                    <div className="checkIcon">
                        { this.state.heliport ? <IoCheckboxSharp/> : <IoCheckboxOutline/> }    
                    </div>
                  <input type="checkbox" name="heliport"  checked={this.state.heliport} onChange={this.handleChange}/>
                  Heliport
                </label>
              </li>
              <li>
              <label>
                    <div className="checkIcon">
                        { this.state.closed ? <IoCheckboxSharp/> : <IoCheckboxOutline/> }    
                    </div>
                  <input type="checkbox" name="closed" checked={this.state.closed} onChange={this.handleChange}/>
                  Closed
                </label>
              </li>
              <li>
              <label>
                    <div className="checkIcon">
                        { this.state.favourites ? <IoCheckboxSharp/> : <IoCheckboxOutline/> }    
                    </div>
                  <input type="checkbox" name="favourites" checked={this.state.favourites} onChange={this.handleChange}/>
                  In your favourites
                </label>
              </li>
            </ul>
        </div>
        )
    }
}


export default FilterByType;