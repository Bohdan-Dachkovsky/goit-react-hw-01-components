import styles from './bankservices.module.css';
import PropTypes from 'prop-types';
const TransactionHistory = ({ items }) => {
  return (
    <div>
      <table className={styles.transactionHistory}>
        <thead className={styles.transactionsObj}>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        {items.map((item, index) => (
          <tbody key={index}>
            <tr>
              <th>{item.type}</th>
              <th>{item.amount}</th>
              <th>{item.currency}</th>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};
export default TransactionHistory;
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
