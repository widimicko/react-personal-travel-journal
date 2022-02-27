import React from 'react'
import Content from './components/Content';
import Navbar from './components/Navbar';

import data from './data/data'


function App() {
  return (
    <div className="App">
      <Navbar/>
      <main className="mt-7 p-7">
        { data.map((item) => {
          return <Content key={item.id} item={item} />
        }) }
      </main>
    </div>
  );
}

export default App;
