import '../files.css/styles.module.css';
import PropTypes from 'prop-types';
const FriendList = ({friends}) =>  {
    return (
<div>
{friends.map(friend => ( <li className="item">
  <span className="status">{friend.id}{friend.isOnline}</span>
  <img style ={{marginTop: 51+"px", marginBottom:51+"px", marginLeft: 50+"px", marginRight:51+"px"}} className="photo" src={friend.avatar} alt={friend.description} width="48" />
  <p  style ={{marginTop: 51+"px"}}  className="name">{friend.name}</p>
</li>))}
</div>
    )  
};
export default FriendList;

FriendList.propTypes = {
  friends:PropTypes.arrayOf(PropTypes.shape({
    avatar:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    isOnline:PropTypes.boolean.isRequired,
    id:PropTypes.number.isRequired} ),),
   };
  

