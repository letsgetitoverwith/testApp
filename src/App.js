// App.js
import React from 'react';
import SignIn from './components/SignIn.js';
import background from './images/fullPageLogoOnly.png';

function App() {
  const backgroundImageStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '100vh',
    maxHeight: '100vh',
    // Add any other styles you may need
  };

  const signInStyle = {
    marginTop: '100px',
  };

  return (
    <div>
      <SignIn style={signInStyle} />
    </div>
  );
}

export default App;
