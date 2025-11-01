import React from 'react';
import PlatformNavigation from './components/PlatformNavigation/PlatformNavigation';
import CommandCenter from './components/CommandCenter/CommandCenter';
import Notifications from './components/Notifications/Notifications';
import './App.css';

function App() {
  return (
    <div className="app">
      <PlatformNavigation />
      <CommandCenter />
      <Notifications />
    </div>
  );
}

export default App;
