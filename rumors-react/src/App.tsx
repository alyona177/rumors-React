import React from 'react';
import './App.scss';
import searchIcon from './img/header/search-icon.png';
import locationIcon from './img/footer/location.png';
import phoneIcon from './img/footer/phone.png';
import mailIcon from './img/footer/email.png';
import anistonPic from './img/entertainment/aniston.jpg';
import { MainPage } from './pages/main-page/MainPage';


function App() {
  return (
    <div className="App">
       <header>
          <button className="burger-btn mobile-only"><i className="fas fa-bars"></i></button>
          <div className="container flex-container">
              <div className="logo">
                  <div className="magazine-name">Rumors</div>
                  <div className="logo-text desktop-only">News magazine</div>
                  <div className="logo-line desktop-only"></div>
              </div>
              <nav className="flex-container desktop-only">
                  <div className="link-container">
                      <a href="" className="nav-link" target="_blank">World</a>
                  </div>
                  <div className="link-container">
                      <a href="" className="nav-link" target="_blank">Business</a>
                  </div>
                  <div className="link-container current-section">
                      <a href="" className="nav-link" target="_blank">Entertainment</a>
                  </div>
                  <div className="link-container">
                      <a href="" className="nav-link" target="_blank">Sports</a>
                  </div>
                  <div className="link-container">
                      <a href="" className="nav-link" target="_blank">Science</a>
                  </div>
                  <div className="link-container">
                      <a href="" className="nav-link" target="_blank">Health</a>
                  </div>
                  <div className="link-container">
                      <a href="" className="nav-link" target="_blank">Spotlight</a>
                  </div>
                  <div className="search">
                      <input type="text" className="search-field" placeholder="Search rumors..."/>
                      <img src={searchIcon} className="search-icon" alt=""/>
                  </div>
              </nav>
          </div>
          
        
          <nav className="mobile-only">
              <div className="link-container">
                  <a href="" className="nav-link" target="_blank">World</a>
              </div>
              <div className="link-container">
                  <a href="" className="nav-link" target="_blank">Business</a>
              </div>
              <div className="link-container">
                  <a href="" className="nav-link" target="_blank">Entertainment</a>
              </div>
              <div className="link-container">
                  <a href="" className="nav-link" target="_blank">Sports</a>
              </div>
              <div className="link-container">
                  <a href="" className="nav-link" target="_blank">Science</a>
              </div>
              <div className="link-container">
                  <a href="" className="nav-link" target="_blank">Health</a>
              </div>
              <div className="link-container">
                  <a href="" className="nav-link" target="_blank">Spotlight</a>
              </div>
          </nav>
          <div className="search mobile-only">
              <input type="text" className="search-field" placeholder="Search rumors..."/>
              <img src={searchIcon} className="search-icon" alt=""/>
          </div>
        </header>
        <MainPage/>
       <footer>
            <div className="container">
                <div className="square"></div>
                <div className="logo">
                    <div className="magazine-name">Rumors</div>
                    <div className="logo-text">News magazine</div>
                    <div className="logo-line"></div>
                </div>
                <div className="rumors-info flex-container">
                    <div className="text-about-site">
                        <span className="text-1">Too many of us look upon Americans as dollar chasers. This is a cruel
                            libel, even if it is reiterated thoughtlessly by the Americans themselves.</span>
                        <span className="text-2">This is a cruel libel, even if it is reiterated thoughtlessly by the
                            Americans themselves.</span>
                    </div>
                </div>
                <div className="rumors-contacts flex-container">
                    <div className="location">
                        <img src={locationIcon} alt="" className="location-img"/>
                        <span className="location-text">Salt Lake City, UT 87234</span>
                    </div>
                    <div className="phone">
                        <img src={phoneIcon} alt="" className="phone-img"/>
                        <span className="phone-text">(871) 321-6567</span>
                    </div>
                    <div className="email">
                        <img src={mailIcon} alt="" className="email-img"/>
                        <span className="email-text">awesome@website.com</span>
                    </div>
                </div>
                <div className="latest-news">
                    <div className="news-section-header">Latest News</div>
                    <div className="latest-news-block flex-container">
                        <div className="news-preview-1 flex-container">
                            <div className="side-with-img">
                                <img src={anistonPic} alt="Aniston" className="news-pic"/>
                            </div>
                            <div className="side-with-news-info">
                                <div className="news-header">Do Critics Think Jason Statham’s New Action Movie Kicks Ass?</div>
                                <div className="rating">
                                    <span className="star">★</span>
                                    <span className="star">★</span>
                                    <span className="star">★</span>
                                    <span className="star">★</span>
                                    <span className="star">★</span>
                                </div>
                                <div className="news-date">12 march 2013</div>
                            </div>
                        </div>
                        <div className="news-preview-2 flex-container">
                            <div className="side-with-img">
                                <img src={anistonPic} alt="Aniston" className="news-pic"/>
                            </div>
                            <div className="side-with-news-info">
                                <div className="news-header">Brad Pitt and Angelina Jolie set for May wedding</div>
                                <div className="rating">
                                    <span className="star">★</span>
                                    <span className="star">★</span>
                                    <span className="star">★</span>
                                    <span className="star">★</span>
                                    <span className="star">★</span>
                                </div>
                                <div className="news-date">12 march 2013</div>
                            </div>
                        </div>
                        <div className="news-preview-3 flex-container">
                            <div className="side-with-img">
                                <img src={anistonPic} alt="Aniston" className="news-pic"/>
                            </div>
                            <div className="side-with-news-info">
                                <div className="news-header">Scarlett Johansson & Romain Dauriac Are Not Engaged</div>
                                <div className="rating">
                                    <span className="star">★</span>
                                    <span className="star">★</span>
                                    <span className="star">★</span>
                                    <span className="star">★</span>
                                    <span className="star">★</span>
                                </div>
                                <div className="news-date">12 march 2013</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="most-popular-news">
                    <div className="news-section-header">most popular</div>
                    <div className="most-popular-news-block flex-container">
                        <div className="news-preview-1 flex-container">
                            <div className="side-with-img">
                                <img src={anistonPic} alt="Aniston" className="news-pic"/>
                            </div>
                            <div className="side-with-news-info">
                                <div className="news-header">Do Critics Think Jason Statham’s New Action Movie Kicks Ass?</div>
                                <div className="rating">
                                    <span className="star">★</span>
                                    <span className="star">★</span>
                                    <span className="star">★</span>
                                    <span className="star">★</span>
                                    <span className="star">★</span>
                                </div>
                                <div className="news-date">12 march 2013</div>
                            </div>
                        </div>
                        <div className="news-preview-2 flex-container">
                            <div className="side-with-img">
                                <img src={anistonPic} alt="Aniston" className="news-pic"/>
                            </div>
                            <div className="side-with-news-info">
                                <div className="news-header">Gerard Butler: 'Olympus Has Fallen' New York Screening!</div>
                                <div className="rating">
                                    <span className="star">★</span>
                                    <span className="star">★</span>
                                    <span className="star">★</span>
                                    <span className="star">★</span>
                                    <span className="star">★</span>
                                </div>
                                <div className="news-date">12 march 2013</div>
                            </div>
                        </div>
                        <div className="news-preview-3 flex-container">
                            <div className="side-with-img">
                                <img src={anistonPic} alt="Aniston" className="news-pic"/>
                            </div>
                            <div className="side-with-news-info">
                                <div className="news-header">Sexy Penelope Cruz Wears A Black Leather Coat Dress In Rome</div>
                                <div className="rating">
                                    <span className="star">★</span>
                                    <span className="star">★</span>
                                    <span className="star">★</span>
                                    <span className="star">★</span>
                                    <span className="star">★</span>
                                </div>
                                <div className="news-date">12 march 2013</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright flex-container">
                    <span className="text-1">Copyright 2013 @</span>
                    <span className="text-2">RUMORS.</span>
                    <span className="text-3">// A mega awesome NEWS MAGAZINE theme.</span>
                </div>
            </div>
        </footer>
  </div>
  );
}

export default App;
