import '../files.css/bankservices.css';
import PropTypes from "prop-types";
const TransactionHistory = ({items}) =>  {
    return (
<div>
<table className="transaction-history">
  <thead>
    <tr>
    <th>Type</th>
    <th>Amount</th>
    <th>Currency</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <th>{items.type}</th>
    <th>{items.amount}</th>
    <th>{items.currency}</th>
    </tr>
    <tr >
    <th>{items.type}</th>
    <th>{items.amount}</th>
    <th>{items.currency}</th>
    </tr>
    <tr>
    <th>{items.type}</th>
    <th>{items.amount}</th>
    <th>{items.currency}</th>
    </tr>
    <tr>
    <th>{items.type}</th>
    <th>{items.amount}</th>
    <th>{items.currency}</th>
    </tr>
    <tr>
    <th>{items.type}</th>
    <th>{items.amount}</th>
    <th>{items.currency}</th>
    </tr>
  </tbody>
</table>
</div>
)  
};
export default TransactionHistory;
TransactionHistory.propTypes = {
    items:PropTypes.arrayOf(PropTypes.shape({id:PropTypes.string.isRequired, type:PropTypes.string.isRequired, amount:PropTypes.string.isRequired, currency:PropTypes.string.isRequired}))
}


