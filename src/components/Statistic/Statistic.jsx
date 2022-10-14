import styles from './section.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ title, stats }) => {
  return (
    <div>
      <section className={styles.statisticsBlock}>
        {title && <h2 className={styles.subtitleHeaders}>{title}</h2>}

        <ul className={styles.statisticslist}>
          {stats.map((element, idx) => (
            <li key={idx} className={styles.statisticsItem}>
              <span>{element.label}</span>
              <span>{element.percentage}%</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};
export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
