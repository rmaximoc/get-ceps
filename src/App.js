import React from 'react';
import AddressWrapper from './components/AddressWraper';
import CepsProvider from './context/CepsContext';
import Counter from './components/Counter';

function App() {
  return (
    <CepsProvider>
      <>
        <Counter />
        <AddressWrapper />
      </>
    </CepsProvider>
  );
}

export default App;
