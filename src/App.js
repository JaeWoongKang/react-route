import React from 'react';
import { Route, Link } from "react-router-dom";
const App = () => (
  <div>
    <Header />
  </div>
);

const Header = () => (
  <header>
    <h1>My Contacts</h1>
    <nav>
      <ul>
        <li><Link to ="/">HOME</Link></li>
        <li><Link to="/contacts">CONTACT</Link></li>
      </ul>
    </nav>
    <Route exact path="/" component={Welcome}/>
    <Route path="/contacts" component={Contacts}/>
  </header> 
)

const Welcome = () => (
  <h1>
    Welcome to the best contacts app!
  </h1>
)

//match 은 라우터가 주는 prop이다.
//내가 어디에있는지 정보를 줌 나의 컨택 안에서 새로운 라우터 생성을 원함
const Contacts = ({match}) => (
  <div>
    <ul>
      <li><Link to="/contacts/jisu">Jisu</Link></li>
      <li><Link to="/contacts/jaewoong">Jaewoong</Link></li>
      <li><Link to="/contacts/yoonhee">Yoonhee</Link></li>
    </ul>
    <Route exact path={`${match.path}`} render={()=> <h3>Please select a contact</h3>}/>
    <Route path={`${match.path}/:contactName`} component={Contact}/>
  </div>
)

const Contact = ({match}) =>
  `Your friend name is ${match.params.contactName}`;


export default App;
