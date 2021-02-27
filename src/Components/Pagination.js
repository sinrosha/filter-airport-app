import  {FaArrowLeft, FaArrowRight} from "react-icons/fa"

function Pagination({displayData}) {
    return (
      <div className="pagination">
        <div className="prev">
          <FaArrowLeft />
        </div>
        <div className="count">
            <p>Showing <span className="currentCount">1-4</span> of <span className="totalCount">{displayData.length}</span> results</p>
        </div>
        <div className="next">
          <FaArrowRight />
        </div>
      </div>
    );
}
  
export default Pagination;