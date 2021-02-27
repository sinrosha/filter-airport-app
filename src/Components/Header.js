import {IoGridSharp} from "react-icons/io5"

function Header() {
    return (
      <div className="header">
        <h1>Filter <span>airports</span></h1>
        <div className="icon">
          <IoGridSharp/>
        </div>
      </div>
    );
}
  
export default Header;