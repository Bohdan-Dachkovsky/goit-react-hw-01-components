import './section.module.css';
import PropTypes from "prop-types";
const Statistics = ({title, stats}) =>  {
    return (
<div>
<section className="statistics">
  <h2  className="title">{title}</h2>

  <ul className="stat-list">
   { stats.map(element => (<li key= {element.id}   className="item">
      <span className="label">{element.label}</span>
      <span className="percentage">{element.percentage}%</span>
    </li>))}
  </ul>
</section>
</div>
    )  
};
export default Statistics;
 Statistics.propTypes = {
  title:PropTypes.string, 
  stats:PropTypes.arrayOf(PropTypes.shape({id:PropTypes.string.isRequired,label: PropTypes.string.isRequired, percentage: PropTypes.number.isRequired} ),),
 };
 