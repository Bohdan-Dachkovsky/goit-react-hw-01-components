import { useReducer } from "react";
// import FriendList from "./components/FriendList";
import Profile from "./components/Profile";
import Statistics from "./components/Statistic";
// import TransactionHistory from "./components/TransactionHistory";
import user from "./data/user.json";
import data from "./data/data.json";
// import friend from ".data/friend.json";
// import transaction from ".data/transaction.json";
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        textTransform: 'uppercase',
        color: '#010101',
      }}
    >
     <Profile user={user.username} tag={user.tag} location={user.location} avatar={user.avatar} stats={user.stats}/> 
     <Statistics id={data.id} status={data.id} friends={data.id} description={data.id} name={data.id}/> 
   
    </div>
  );
};
{/* <FriendList/> 
<TransactionHistory/>  */}
