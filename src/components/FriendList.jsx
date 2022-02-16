import '../files.css/styles.css';

const FriendList = ({id, status, friends, description, name}) =>  {
    return (
<div>
<li className="item">
  <span className="status">{id}{status}</span>
  <img style ={{marginTop: 51+"px", marginBottom:51+"px", marginLeft: 50+"px", marginRight:51+"px"}} className="photo" src={friends} alt={description} width="48" />
  <p  style ={{marginTop: 51+"px"}}  className="name">{name}</p>
</li>
</div>
    )  
};
export default FriendList;
// FriendList.PropTypes = {
//   id:PropTypes.number, status:PropTypes.boolean, friends:PropTypes.string, description:PropTypes.string, name:PropTypes.string
// }
