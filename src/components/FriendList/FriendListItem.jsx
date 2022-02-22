import styles from './friend-list.module.css';
import PropTypes from 'prop-types';

const FriendListItem = ({isOnline, name, avatar}) =>  {
   return (
<li className={styles.item}>
  <span className={styles.status}>{isOnline}</span>
  <img  className={styles.photo} src={avatar} alt={name} />
  <p  style ={{marginTop: 51+"px"}}  className={styles.name}>{name}</p>
</li>)
 
};
export default FriendListItem;
FriendListItem.propTypes = {
    avatar:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    isOnline:PropTypes.bool.isRequired,
    id:PropTypes.number.isRequired,
   }; 
  
