import React, {Component} from 'react'; 
import {Route} from 'react-router-dom'; 

import Layout from './components/Layout/Layout'; 
import Home from './containers/Home/Home';
import HighSchoolTimeline from './containers/HighSchoolTimeline/HighSchoolTimeline';
import Projects from './containers/Projects/Projects';
import PostSecondary from './containers/PostSecondary/PostSecondary';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Route path="/" exact component={Home}/>
          <Route path="/high-school-timeline" component={HighSchoolTimeline}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/post-secondary" component={PostSecondary}/>
        </Layout>
      </div>
    );
  }
}

export default App;
