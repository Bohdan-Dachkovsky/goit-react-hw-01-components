import { useReducer } from "react";
// import FriendList from "./components/FriendList";
import Profile from "./components/Profile";
import Statistics from "./components/Statistic";
// import TransactionHistory from "./components/TransactionHistory";
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        textTransform: 'uppercase',
        color: '#010101',
      }}
    >
     <Profile user={user.id} tag={user.tag} location={user.location} avatar={user.avatar} /> 
     <Statistics id={user.id} status={user.id} friends={user.id} description={user.id} name={user.id}/> 
   
    </div>
  );
};
{/* <FriendList/> 
<TransactionHistory/>  */}
