// import { useReducer } from "react";
import FriendList from "./components/FriendList/FriendList";
import Profile from "./components/Profile";
// import Statistics from "./components/Statistic";
// import TransactionHistory from "./components/TransactionHistory";
import user from "./data/user.json";
// import data from "./data/data.json";
import friends from "./data/user.json";
// import transactions from "./data/user.json";
// import { number } from "prop-types";


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
     {/* {data.map(header => <li key={header.id}> <Statistics title="Upload stats" stats={header.data}/></li>)} */}
      <FriendList  friends={friends}/> 
     {/* {transactions.map(number => <TransactionHistory items={number.transactions}  />)} */}
    </div>
  );
};
// {friends.map(index => <FriendList friends={index.friends} />)}

// {/* <TransactionHistory/>  */}

{/* <Statistics title="Upload stats" stats={data} />
<Statistics stats={data} /> */}
