// import { useReducer } from "react";
import FriendList from "./components/FriendList/FriendList";

import Profile from "./components/Profile";
import Statistics from "./components/Statistic/Statistic";
import TransactionHistory from "./components/TransictionHistory/TransactionHistory";
import user from "./data/user.json";
import data from "./data/data.json";
import friends from "./data/user.json";
// import transactions from "./data/user.json";
// import { number } from "prop-types";


// import friend from ".data/friend.json";
import transaction from ".data/transaction.json";
 const App = () => {
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
     <Statistics  stats={data} />
     {/*  Statistics({title: "Upload stats", stats: data}) */}
      <FriendList  friends={friends}/> 
   
      <TransactionHistory items={transaction}  />
    </div>
  );
};
// {friends.map(index => <FriendList friends={index.friends} />)}

// {/* <TransactionHistory/>  */}

export default App;
