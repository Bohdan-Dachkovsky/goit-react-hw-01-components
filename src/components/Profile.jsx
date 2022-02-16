//  import PropTypes from 'prop-types'; 

const Profile = ({user, tag, location, avatar}) =>  {
    return (
<div>
<div className="profile">
  <div className="description">
    <img src={avatar} alt="User avatar" className="avatar"/>
    <p className="name">{user}</p>
    <p className="tag">{tag}</p>
    <p className="location">{location}</p>
  </div>
<ul className="stats">
    <li>
      <span className="label">Followers</span>
      <span className="quantity"></span>
    </li>
    <li>
      <span className="label">Views</span>
      <span className="quantity"></span>
    </li>
    <li>
      <span className="label">Likes</span>
      <span className="quantity"></span>
    </li>
</ul>
</div> 
</div>
    )  
};
export default Profile;
// Profile.PropTypes = {
//   user:PropTypes.string, tag:PropTypes.string, location:PropTypes.string, avatar:PropTypes.string, stats:PropTypes.number,
// }
