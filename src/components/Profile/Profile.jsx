import PropTypes from 'prop-types';
import styles from './profile.module.css';

function Profile({ user, tag, location, avatar, stats }) {
  return (
    <div>
      <div className={styles.profile}>
        <div className={styles.profileName}>
          <img src={avatar} alt="User avatar" className={styles.avatarPerson} />
          <p className={styles.profileName}>{user}</p>
          <p className={styles.profileTag}>{tag}</p>
          <p className={styles.profileLocation}>{location}</p>
        </div>
        <ul className={styles.statsBox}>
          <li>
            <span>Followers</span>
            <span>{stats.followers}</span>
          </li>
          <li>
            <span>Views</span>
            <span>{stats.views}</span>
          </li>
          <li>
            <span>Likes</span>
            <span>{stats.likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

Profile.propTypes = {
  user: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Profile;
