
import '../files.css/section.css';
// import PropTypes from "prop-types";
const Statistics = ({title, labelDoc, labelPdf, labelPlayer, labelPsd, percentageDoc, percentagePdf, percentagePlayer, percentagePsd}) =>  {
    return (
<div>
<section className="statistics">
  <h2 className="title">{title}</h2>

  <ul className="stat-list">
    <li className="item">
      <span className="label">{labelDoc}</span>
      <span className="percentage">{percentageDoc}%</span>
    </li>
    <li className="item">
      <span className="label">{labelPdf}</span>
      <span className="percentage">{percentagePdf}%</span>
    </li>
    <li className="item">
      <span className="label">&nbsp;{labelPlayer}</span>
      <span className="percentage">{percentagePlayer}%</span>
    </li>
    <li className="item">
      <span className="label">{labelPsd}</span>
      <span className="percentage">{percentagePsd}%</span>
    </li>
  </ul>
</section>
</div>
    )  
};
export default Statistics;
// Statistics.PropTypes = {
//   title:PropTypes.string, labelDoc:PropTypes.string, labelPdf:PropTypes.string, labelPlayer:PropTypes.string, labelPsd:PropTypes.number, percentageDoc:PropTypes.number, percentagePdf:PropTypes.number,  percentagePlayer:PropTypes.number,  percentagePsd:PropTypes.number
// }

