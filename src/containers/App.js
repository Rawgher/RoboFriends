import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

function App() {
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearhfield] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users => {setRobots(users)});
  }, []);
  // empty [] means only run once

  const onSearchChange = (event) => {
    setSearhfield(event.target.value )
  }

  const filteredRobots = robots.filter(robot =>{
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  })

  return !robots.length ?
    <h1 className='tc'>Loading</h1> :
    (
      <div className='tc'>
        <header className='w-100 ph3 pv3 pv4-ns ph4-m ph5-l'>
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchChange={onSearchChange}/>
        </header>
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobots} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
}

export default App;