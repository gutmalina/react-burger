import React from 'react';
import styles from './app.module.css';
import AppHeader from '../app-header/app-header';
import Main from '../main/main';


function App() {
  return (
    <div className={styles.body}>
      <div className={styles.page}>
        <AppHeader/>
        <Main/>
      </div>
    </div>
  );
};

export default App;
