import styles from './friend-list.module.css';
import PropTypes from 'prop-types';

const FriendListItem = ({ isOnline, name, avatar }) => {
  return (
    <li className={styles.friendListItem}>
      <span className={styles.statusActive}>
        <span className={isOnline ? styles.status : styles.statusClose}>
          {isOnline}
        </span>
      </span>
      <img className={styles.photo} src={avatar} alt={name} />
      <p className={styles.text}>{name}</p>
    </li>
  );
};
export default FriendListItem;
FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
