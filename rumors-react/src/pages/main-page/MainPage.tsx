import React from 'react';
import './MainPage.scss';
import hangoverSlider from '../../img/slider/Hangover3-Movie.jpg';
import bradWedding from '../../img/entertainment/brad-angelina-wedding-photos.jpg';
import hangover from '../../img/entertainment/hangover.jpg';
import hangoverTrilogy from '../../img/entertainment/hangover-trilogy.jpg';
import ironMan3 from '../../img/entertainment/iron-man3.jpg';
import johansonDauric from '../../img/entertainment/johanson-and-dauric.jpg';
import hoverArrow from '../../img/hover-img-arrow.png';
import ads from '../../img/ads/mac.jpg';
import statham from '../../img/entertainment/Statham.jpg';
import aniston from '../../img/entertainment/aniston.jpg';

export const MainPage= () => {
    return(
        <div>
            <section className="slider">
                <div className="top-slider flex-container">
                    <div className="current-slide">
                        <img src={hangoverSlider} alt="Hangover 3 Movie pic" className="current-slide-pic"/>
                        <div className="slider-arrows flex-container">
                            <button className="slide-button"><i className="fas fa-chevron-left"></i></button>
                            <button className="slide-button"><i className="fas fa-chevron-right"></i></button>
                        </div>
                        <div className="slider-arrows-line"></div>
                        <div className="current-slide-item flex-container">
                            <div className="current-news-info flex-container">
                                <div className="current-news-header">The Hangover 3: The Trilogy Finale Teaser Trailer</div>
                                <div className="current-news-description">Ever since the first ‘The Hangover’ movie (which also had an equally amazing movie trailer), people across the country have been enamored by the magic of black-out drinking...</div>                                    
                            </div>
                            <div className="current-news-date flex-container">
                                <div className="current-news-date-day"><span>12</span></div>
                                <div className="current-news-date-month"><span>March</span></div>
                            </div>
                        </div> 
                    </div>
                    <div className="slider-news">
                        <div className="slider-news-list flex-container">
                            <div className="slider-news-preview flex-container">
                                <div className="news-preview-picture">
                                    <img src="#" alt="news-preview" className="news-preview-pic"/>
                                </div>
                                <div className="news-prev-item">
                                    <div className="news-header-selected"><span className="news-header-title">The Hangover 3: The Trilogy Finale Teaser Trailer Leaked Online</span></div>
                                    <span className="news-comments">15 comments</span>
                                    <span className="news-date">// 12 March</span>
                                </div>
                            </div>
                            <div className="slider-news-preview flex-container">
                                <div className="news-preview-picture">
                                    <img src='#' alt="news-preview" className="news-preview-pic"/>
                                </div>
                                <div className="news-prev-item">
                                    <div className="news-header"><span className="news-header-title">The Hangover 3: The Trilogy Finale Teaser Trailer Leaked Online</span></div>
                                    <span className="news-comments">15 comments</span>
                                    <span className="news-date">// 12 March</span>
                                </div>
                            </div>
                            <div className="slider-news-preview flex-container">
                                <div className="news-preview-picture">
                                    <img src='#' alt="news-preview" className="news-preview-pic"/>
                                </div>
                                <div className="news-prev-item">
                                    <div className="news-header"><span className="news-header-title">The Hangover 3: The Trilogy Finale Teaser Trailer Leaked Online</span></div>
                                    <span className="news-comments">15 comments</span>
                                    <span className="news-date">// 12 March</span>
                                </div>
                            </div>
                            <div className="slider-news-preview flex-container">
                                <div className="news-preview-picture">
                                    <img src='#' alt="news-preview" className="news-preview-pic"/>
                                </div>
                                <div className="news-prev-item">
                                    <div className="news-header"><span className="news-header-title">The Hangover 3: The Trilogy Finale Teaser Trailer Leaked Online</span></div>
                                    <span className="news-comments">15 comments</span>
                                    <span className="news-date">// 12 March</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

<div className="container flex-container">
    <section className="left-column">
        <div className="top-part">
            <div className="news-column">
                <div className="news-column-header">
                    <div className="news-section-header">Hot news</div>
                    <div className="section-header-line"></div>
                </div>
                <div className="news-list flex-container">
                    <div className="news-preview flex-container">
                        <div className="side-with-img">
                            <img src={statham} alt="Statham" className="news-pic"/>
                        </div>
                        <div className="side-with-news-info">
                            <div className="news-date">12 march 2013</div>                    
                            <div className="news-header">'Iron Man 3' Secrets Revealed: Robert Downey Jr. Explains It All</div>
                            <div className="rating">
                                <span className="star">★</span>
                                <span className="star">★</span>
                                <span className="star">★</span>
                                <span className="star">★</span>
                                <span className="star">★</span>
                            </div> 
                        </div> 
                    </div>
                    <div className="news-preview flex-container">
                        <div className="side-with-img">
                            <img src={statham} alt="Statham" className="news-pic"/>
                        </div>
                        <div className="side-with-news-info">
                            <div className="news-date">12 march 2013</div>                    
                            <div className="news-header">Brad Pitt and Angelina Jolie set for May wedding</div>
                            <div className="rating">
                                <span className="star">★</span>
                                <span className="star">★</span>
                                <span className="star">★</span>
                                <span className="star">★</span>
                                <span className="star">★</span>
                            </div> 
                        </div> 
                    </div>
                    <div className="news-preview flex-container">
                        <div className="side-with-img">
                            <img src={statham} alt="Statham" className="news-pic"/>
                        </div>
                        <div className="side-with-news-info">
                            <div className="news-date">12 march 2013</div>                    
                            <div className="news-header">Sexy Penelope Cruz Wears A Black Leather Coat Dress In Rome</div>
                            <div className="rating">
                                <span className="star">★</span>
                                <span className="star">★</span>
                                <span className="star">★</span>
                                <span className="star">★</span>
                                <span className="star">★</span>
                            </div> 
                        </div>
                    </div>
                    <div className="news-preview flex-container">
                        <div className="side-with-img">
                            <img src={statham} alt="Statham" className="news-pic"/>
                        </div>
                        <div className="side-with-news-info">
                            <div className="news-date">12 march 2013</div>                    
                            <div className="news-header">Gerard Butler: 'Olympus Has Fallen' New York Screening!</div>
                            <div className="rating">
                                <span className="star">★</span>
                                <span className="star">★</span>
                                <span className="star">★</span>
                                <span className="star">★</span>
                                <span className="star">★</span>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
            <div className="news-column">
                <div className="news-column-header">
                    <div className="news-section-header">Popular news</div>
                    <div className="section-header-line"></div>
                </div>
                <div className="news-list flex-container">
                    <div className="news-preview flex-container">
                        <div className="side-with-img">
                            <img src={statham} alt="Statham" className="news-pic"/>
                        </div>
                        <div className="side-with-news-info">
                            <div className="news-date">12 march 2013</div>                    
                            <div className="news-header">Paris Hilton & River Viiperi Remind Us How Cute Their Future Babies Will Look!</div>
                            <div className="rating">
                                <span className="star">★</span>
                                <span className="star">★</span>
                                <span className="star">★</span>
                                <span className="star">★</span>
                                <span className="star">★</span>
                            </div> 
                        </div>
                    </div>
                    <div className="news-preview flex-container">
                        <div className="side-with-img">
                            <img src={statham} alt="Statham" className="news-pic"/>
                        </div>
                        <div className="side-with-news-info">
                            <div className="news-date">12 march 2013</div>                    
                            <div className="news-header">Paris Hilton & River Viiperi Remind Us How Cute Their Future Babies Will Look!</div>
                            <div className="rating">
                                <span className="star">★</span>
                                <span className="star">★</span>
                                <span className="star">★</span>
                                <span className="star">★</span>
                                <span className="star">★</span>
                            </div> 
                        </div> 
                    </div>
                    <div className="news-preview flex-container">
                        <div className="side-with-img">
                            <img src={statham} alt="Statham" className="news-pic"/>
                        </div>
                        <div className="side-with-news-info">
                            <div className="news-date">12 march 2013</div>                    
                            <div className="news-header">Do Critics Think Jason Statham’s New Action Movie Kicks Ass?</div>
                            <div className="rating">
                                <span className="star">★</span>
                                <span className="star">★</span>
                                <span className="star">★</span>
                                <span className="star">★</span>
                                <span className="star">★</span>
                            </div> 
                        </div>
                    </div>
                    <div className="news-preview flex-container">
                        <div className="side-with-img">
                            <img src={statham} alt="Statham" className="news-pic"/>
                        </div>
                        <div className="side-with-news-info">
                            <div className="news-date">12 march 2013</div>                    
                            <div className="news-header">Scarlett Johansson & Romain Dauriac Are Not Engaged</div>
                            <div className="rating">
                                <span className="star">★</span>
                                <span className="star">★</span>
                                <span className="star">★</span>
                                <span className="star">★</span>
                                <span className="star">★</span>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
            <div className="be-social mobile-only">
                <div className="news-column-header">
                    <div className="news-section-header">Be social</div>
                    <div className="section-header-line"></div>
                </div>
                <div className="social flex-container">
                    <div className="social-net">
                        <div className="facebook-icon"><a href="" className="social-netlink" target="_blank"><i className="fab fa-facebook-f"></i></a></div>
                        <div className="fans">
                            <span className="count-fans">24215</span> <br/>
                            <span className="social-net-text">facebook fans</span>
                        </div>
                    </div>
                    <div className="social-net">
                        <div className="twitter-icon"><a href="" className="social-netlink" target="_blank"><i className="fab fa-twitter"></i></a></div>
                        <div className="fans">
                            <span className="count-fans">14019</span> <br/>
                            <span className="social-net-text">twitter fans</span>
                        </div>
                    </div>
                    <div className="social-net">
                        <div className="rss-icon"><a href="" className="social-netlink" target="_blank"><i className="fas fa-rss"></i></a></div>
                        <div className="fans">
                            <span className="count-fans">45221</span> <br/>
                            <span className="social-net-text">subscribers</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ads subsection mobile-only">
                <div className="news-section-header">ADS</div>
                <img src={ads} alt="" className="ads-banner"/>
            </div>
            <div className="entertainment subsection">
                <div className="news-section-header">Entertainment</div>
                <div className="opened-news">
                    <div className="img-with-stars">                           
                        <img src={hangoverTrilogy}  alt="hangover-part3" className="news-pic"/>
                        <div className="hover-img-block">
                            <img src={hoverArrow} className="hover-arrow" alt="hover-img"/>
                        </div> 
                        <div className="rating-bg">
                            <div className="rating">
                                <span className="star">★</span>
                                <span className="star">★</span>
                                <span className="star">★</span>
                                <span className="star">★</span>
                                <span className="star">★</span>
                            </div>
                        </div>                            
                    </div>
                    <div className="news-header">The Hangover 3: The Trilogy Finale Teaser Trailer Leaked Online</div>
                    <div className="news-date">12 march 2013 // 45 Comments</div>
                    <div className="news-info">Ever since the first ‘The Hangover’ movie (which also had an equally
                        amazing movie trailer), people across the country have been enamored by the magic of
                        black-out drinking...</div>
                </div>
                <div className="news-preview flex-container">
                    <div className="side-with-img">                           
                        <img src={statham} alt="Statham" className="news-pic"/>                           
                        <div className="hover-img-block">
                            <img src={hoverArrow} className="hover-arrow" alt="hover-img"/>
                        </div>  
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
                <div className="news-preview flex-container">
                    <div className="side-with-img">      
                        <img src={statham} alt="Statham" className="news-pic"/>        
                        <div className="hover-img-block">
                            <img src={hoverArrow} className="hover-arrow" alt="hover-img"/>
                        </div> 
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
            </div>
            <div className="business subsection">
                <div className="news-section-header">Business</div>
                <div className="opened-news">
                    <div className="img-with-stars">
                        <img src={ironMan3} alt="iron-man3" className="news-pic"/>
                        <div className="hover-img-block">
                            <img src={hoverArrow} className="hover-arrow" alt="hover-img"/>
                        </div>
                        <div className="rating-bg">
                            <div className="rating">
                                <span className="star">★</span>
                                <span className="star">★</span>
                                <span className="star">★</span>
                                <span className="star">★</span>
                                <span className="star">★</span>
                            </div>
                        </div>      
                    </div>
                    <div className="news-header">'Iron Man 3' Secrets Revealed: Robert Downey Jr. Explains It All</div>
                    <div className="news-date">12 march 2013 // 45 Comments</div>
                    <div className="news-info">Ever since the first ‘The Hangover’ movie (which also had an equally
                        amazing movie trailer), people across the country have been enamored by the magic of
                        black-out drinking...</div>
                </div>
                <div className="news-preview flex-container">
                    <div className="side-with-img">
                        <img src={johansonDauric} alt="johanson-and-dauric" className="news-pic"/>
                        <div className="hover-img-block">
                            <img src={hoverArrow} className="hover-arrow" alt="hover-img"/>
                        </div>    
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
                <div className="news-preview flex-container">
                    <div className="side-with-img">
                        <img src={aniston} alt="Aniston" className="news-pic"/>
                        <div className="hover-img-block">
                            <img src={hoverArrow} className="hover-arrow" alt="hover-img"/>
                        </div>    
                    </div>
                    <div className="side-with-news-info">
                        <div className="news-header">Jennifer Aniston planning 'fresh start' by changing her name</div>
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
            <div className="tags subsection mobile-only">
                <div className="news-section-header">Tags</div>
                <div className="flex-container">
                    <div className="tag">entertainment</div>
                    <div className="tag">rumors</div>
                    <div className="tag">business</div>
                    <div className="tag">popular news</div>
                    <div className="tag">rumors</div>
                    <div className="tag">business</div>
                    <div className="tag">popular news</div>
                    <div className="tag">spotlight</div>
                    <div className="tag">entertainment</div>
                    <div className="tag">rumors</div>
                    <div className="tag">business</div>
                    <div className="tag">popular news</div>
                    <div className="tag">rumors</div>
                    <div className="tag">business</div>
                    <div className="tag">popular news</div>
                    <div className="tag">spotlight</div>
                    <div className="tag">entertainment</div>
                    <div className="tag">rumors</div>
                    <div className="tag">business</div>
                    <div className="tag">popular news</div>
                </div>
            </div>
        </div>
        <div className="bottom-part">
            <div className="science subsection">
                <div className="news-section-header">science</div>
            </div>
            <div className="science-block">
                <div className="opened-news">
                    <div className="img-with-stars">
                        <img src={ironMan3} alt="iron-man3" className="news-pic"/>
                        <div className="rating-bg">
                            <div className="rating">
                                <span className="star">★</span>
                                <span className="star">★</span>
                                <span className="star">★</span>
                                <span className="star">★</span>
                                <span className="star">★</span>
                            </div>
                        </div>  
                    </div>
                    <div className="news-header">Will Smith Considering Hancock 2. when will this movie be released?</div>
                    <div className="news-date">12 march 2013 / / 45 Comments</div>
                    <div className="news-info">Ever since the first ‘The Hangover’ movie (which also had an equally
                        amazing movie trailer), people across the country have been enamored by the magic of
                        black-out drinking...</div>
                </div>
                <div className="science-news-preview-block flex-container">
                    <div className="news-preview-1 flex-container">
                        <img src={aniston} alt="Aniston" className="news-pic"/>
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
                        <img src={aniston} alt="Aniston" className="news-pic"/>
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
                        <img src={aniston} alt="Aniston" className="news-pic"/>
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
        </div>
    </section>
    <section className="right-column flex-container desktop-only">
        <div className="be-social">
            <div className="news-column-header">
                <div className="news-section-header">Be social</div>
                <div className="section-header-line"></div>
            </div>
            <div className="social flex-container">
                <div className="social-net">
                    <div className="facebook-icon"><a href="" className="social-netlink" target="_blank"><i className="fab fa-facebook-f"></i></a></div>
                    <div className="fans">
                        <span className="count-fans">24215</span> <br/>
                        <span className="social-net-text">facebook fans</span>
                    </div>
                </div>
                <div className="social-net">
                    <div className="twitter-icon"><a href="" className="social-netlink" target="_blank"><i className="fab fa-twitter"></i></a></div>
                    <div className="fans">
                        <span className="count-fans">14019</span> <br/>
                        <span className="social-net-text">twitter fans</span>
                    </div>
                </div>
                <div className="social-net">
                    <div className="rss-icon"><a href="" className="social-netlink" target="_blank"><i className="fas fa-rss"></i></a></div>
                    <div className="fans">
                        <span className="count-fans">45221</span> <br/>
                        <span className="social-net-text">subscribers</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="ads subsection">
            <div className="news-section-header">ADS</div>
            <img src={ads} alt="" className="ads-banner"/>
        </div>
        <div className="tags subsection">
            <div className="news-section-header">Tags</div>
            <div className="flex-container">
                <div className="tag">entertainment</div>
                <div className="tag">rumors</div>
                <div className="tag">business</div>
                <div className="tag">popular news</div>
                <div className="tag">rumors</div>
                <div className="tag">business</div>
                <div className="tag">popular news</div>
                <div className="tag">spotlight</div>
                <div className="tag">entertainment</div>
                <div className="tag">rumors</div>
                <div className="tag">business</div>
                <div className="tag">popular news</div>
                <div className="tag">rumors</div>
                <div className="tag">business</div>
                <div className="tag">popular news</div>
                <div className="tag">spotlight</div>
                <div className="tag">entertainment</div>
                <div className="tag">rumors</div>
                <div className="tag">business</div>
                <div className="tag">popular news</div>
            </div>
        </div>
        <div className="sorted-news flex-container">
                <div className="sorted-news-header">
                    <div className="news-section-header">Latest</div>
                    <div className="news-section-header">Popular</div>
                    <div className="news-section-header">Commented</div>
                    <div className="section-header-line"></div>
                </div>
                <div className="news-preview">
                    <div className="news-header">Do Critics Think Jason Statham’s New Action Movie Kicks Ass?</div>
                    <div className="news-info">
                        <span className="news-date">12 march 2013</span>
                        <span className="news-section">// entertainment //</span>
                        <span className="news-comments">47 comments</span>
                    </div>
                    <div className="rating">
                        <span className="star">★</span>
                        <span className="star">★</span>
                        <span className="star">★</span>
                        <span className="star">★</span>
                        <span className="star">★</span>
                    </div> 
                </div>
                <div className="news-preview">
                    <div className="news-header">Brad Pitt and Angelina Jolie set for May wedding</div>
                    <div className="news-info">
                        <span className="news-date">12 march 2013</span>
                        <span className="news-section">// entertainment //</span>
                        <span className="news-comments">47 comments</span>
                    </div>
                    <div className="rating">
                        <span className="star">★</span>
                        <span className="star">★</span>
                        <span className="star">★</span>
                        <span className="star">★</span>
                        <span className="star">★</span>
                    </div> 
                </div>
                <div className="news-preview">
                    <div className="news-header">Scarlett Johansson & Romain Dauriac Are Not Engaged</div>
                    <div className="news-info">
                        <span className="news-date">12 march 2013</span>
                        <span className="news-section">// entertainment //</span>
                        <span className="news-comments">47 comments</span>
                    </div>
                    <div className="rating">
                        <span className="star">★</span>
                        <span className="star">★</span>
                        <span className="star">★</span>
                        <span className="star">★</span>
                        <span className="star">★</span>
                    </div> 
                </div>
                <div className="news-preview">
                    <div className="news-header">Gerard Butler: 'Olympus Has Fallen' New York Screening!</div>
                    <div className="news-info">
                        <span className="news-date">12 march 2013</span>
                        <span className="news-section">// entertainment //</span>
                        <span className="news-comments">47 comments</span>
                    </div>
                    <div className="rating">
                        <span className="star">★</span>
                        <span className="star">★</span>
                        <span className="star">★</span>
                        <span className="star">★</span>
                        <span className="star">★</span>
                    </div> 
                </div>
        </div>
    </section>
</div>
        </div>
    )
}

   

