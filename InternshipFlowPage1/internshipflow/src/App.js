import './App.css';
import React from 'react';
//import Navbar from './Navbar';
import Tabs from './components/Tabs';
function App() {
  return (

    <div className="App">
      <div className="Sidebar">
        <div className="tabs">
          <input type="submit" class="dashboard" value="Dashboard"></input>
          <input type="submit" class="apprenterships" value="Apprenterships"></input>
          <input type="submit" class="internships" value="Internships"></input>
          <input type="submit" class="jobs" value="Jobs"></input>
          <input type="submit" class="settings" value="Settings"></input>
          <label class="Username">Adam Scott</label>
          <div class="user-icon">
          </div>
        </div>
      </div>

      <div className="DisplayInfo">
       <div className="Insights">
        <div className="Prompt">
          <h1>Internship Insight</h1>
          <body>
            <p>
              In the eighteenth century the German philosopher Immanuel Kant developed a theory of knowledge in which knowledge about space can be both a priori and synthetic.
            </p>
          </body>
        </div>
        <div className="FilterBar">
          <div className="thistab">
  {/*        <Navbar />*/}
            <Tabs>
              <div label="This week">
              </div>
              <div label="This month">
              </div>
              <div label="This date">
              </div>
            </Tabs>
          </div>
        </div>
       </div>
      </div>
    </div>
  );
}

export default App;
