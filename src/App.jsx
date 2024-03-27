// App.js
import Header from './Header';
import Footer from './Footer';
import MainContent from './MainContent';
import './App.css';

const App = () => {
    return (
        <div className="app">
            <Header />
            <MainContent />
            <Footer />
        </div>
    );
};

export default App;