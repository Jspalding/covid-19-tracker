import React from 'react'

import DesktopWrapper from "./components/DesktopWrapper/DesktopWrapper";

const App = props => {

  let content = (
    <div className="container">
      <DesktopWrapper />
    </div>
  );

  return (content);
}

export default App;
