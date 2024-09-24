import React from 'react';
import NavBar from './components/navBar/navBar';
import Landing from './components/landing/landing';
import AboutMe from './components/aboutMe/aboutMe';
import Projects from './components/projects/projects';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import Intro from './components/intro/intro';
const App = () => {
  const renderPage = () => {
    switch (window.location.pathname) {
      case '/aboutme':
        return <AboutMe />;
      case '/projects':
        return <Projects />;
      default:
        return (
          <>
            <Landing />
            <Intro />
            <Contact />
          </>
        );
    }
  };

  return (
    <div className="App">
      <NavBar />
      <div className="content-container">
        {renderPage()}
      </div>
      <Footer />
    </div>
  );
};

export default App;
