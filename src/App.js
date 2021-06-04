import React from 'react';
import Stroies from './Stories';
import Learn from './Learn';
import Logo from './Logo';
import More from './More';
import Footer from './Footer';
import Shop from './Shop';
import RightSideBar from './TabPanel';
import { Switch , Route} from 'react-router-dom';
import Navbar from './Navbar';

import './index.css';


function App() {
  return (
   <>
     <Navbar />
     <Switch>
   <Route exact path ="/" component = {Learn}/>
      <Route path = "/logo" render = {() => <Logo />} />
      <Route path = "/more" component = { More } />
      <Route path = "/shop" component = { Shop } />
      <Route path = "/stroies" component = { Stroies} />
   </Switch>
     <div className = "content">
     <RightSideBar />
    
    
  
   </div>
   <Footer />
    </>
  );
}

export default App;
