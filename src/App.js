import React from 'react';
import { ContextProvider } from './components/react/context';

import Navbar from './components/UI/Navbar';
import Main from './components/page/Main';
import Loader from './components/UI/Loader';

function App() {
    return (
        <ContextProvider>
            <Loader />
            <Navbar />
            <Main />

        </ContextProvider>
    );
};

export default App;
