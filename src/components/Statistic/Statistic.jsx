import styles from  './section.module.css';
import PropTypes from "prop-types";
const Statistics = ({stats}) =>  {
    return (
<div>
<section className={styles.statistics}>
  <ul className={styles.list}>
   { stats.map(element => (<li key= {element.id}   className={styles.item}>
      <span className={styles.label}>{element.label}</span>
      <span className={styles.percentage}>{element.percentage}%</span>
    </li>))}
  </ul>
</section>
</div>
    )  
};
export default Statistics;
 Statistics.propTypes = {
  stats:PropTypes.arrayOf(PropTypes.shape({id:PropTypes.string.isRequired,label: PropTypes.string.isRequired, percentage: PropTypes.number.isRequired} ),),
 };
 