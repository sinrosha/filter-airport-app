import  {FaArrowLeft, FaArrowRight} from "react-icons/fa"

function Pagination({displayData, handleClick, currentPage}) {
    const startWindow = currentPage * 4 - 3;
    const endWindow = currentPage * 4; 
    return (
      <div className="pagination">
        <div className="prev" onClick={() => handleClick("prev")}>
          <FaArrowLeft />
        </div>
        <div className="count">
            <p>Showing <span className="currentCount">{displayData.length ? `${startWindow}-` : null}{endWindow > displayData.length ? displayData.length : endWindow}</span> of <span className="totalCount">{displayData.length}</span> results</p>
        </div>
        <div className="next" onClick={() => handleClick("next")}>
          <FaArrowRight />
        </div>
      </div>
    );
}
  
export default Pagination;