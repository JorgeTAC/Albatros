

export default App;
import React from 'react';
import 'main.css';
import 'main.jsx';
import Nav from './Nav';
import Section1 from './Section1';
import Section2 from './Section2';
import Footer from './Footer';

const App = () => {
    return (
        <main>
            <Nav />
            <Section1 />
            <Section2 />
            <Footer />
        </main>
    );
}
