import Section from "./Section/section";

import Profile from "./Profile/profile";
import users from '../path/to/user.json'

import Statistisc from './Statistics/statistics';
import statisticalData from '../path/to/statisticalData.json';

import FriendList from './Friends/friendList';
import friends from '../path/to/friends.json';

import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from '../path/to/transactions.json';

export const App = () => {

  return (
    <div>
      <Section title="1 - Профіль соціальної мережі">
        <Profile
          key={users.username}
          avatar={users.avatar}
          name={users.username}
          tag={users.tag}
          location={users.location}
          stats={users.stats}
        />
      </Section>

      <Section title="2- Секція статистики">
        <Statistisc title="Upload stats" stats={statisticalData} />
        {/* <Statistisc stats={statisticalData} /> */}
      </Section>

      <Section title="3 - Список друзів">
        <FriendList friends={friends} />
      </Section>

      <Section title="4 - Історія транзакцій">
        <TransactionHistory items={transactions} />
      </Section>
    </div>
  );
};

//______________________________________
  // const isOnline = false;

    //     { isOnline && "ONLINE!"}
    // { false }
    // { null }
    // { undefined }
    // {isOnline ? 'ONLINE!' : 'OFLINE!'}