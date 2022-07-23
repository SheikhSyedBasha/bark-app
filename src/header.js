import React from "react";
import Explore from "./explore";
import test from './test.svg';
import test1 from './test1.svg';

export class HeaderComponent extends React.PureComponent {
    render() {
        return (
            <><Explore></Explore><nav className="navbar sticky-top navbar-expand bark-header  body-min-width header-shadow background-color-white py-0"
                id="bark-header">
                <a className="navbar-brand not-logged-in" href="/en/in/">
                    <img className="img-fluid loading" src="public/logo192.png"
                        width="106" height="32" title="Bark Logo" alt="Bark Logo" data-was-processed="true" />
                </a>
                <div className="js-explore-container explore-container ml-0 ml-sm-1">
                    <span className="js-trigger-explore trigger-explore cursor-pointer">
                        <span className="align-middle hover-underline">
                            Explore
                        </span>
                        <span className="align-middle trigger-explore-chevron d-inline-block">
                            <span className="bark-svg-icon bsi-primary-dark-blue bsi-xs d-inline-block w-100">
                                <img src={test1} className="App-logo" alt="logo" />
                            </span>
                        </span>
                    </span>
                    <div
                        className="js-explore-items-container d-none explore-items-container bg-white border border-grey-100 rounded mt-2 overflow-auto">
                        <div className="js-explore-mobile-header explore-mobile-headers no-gutters px-4">
                            <div className="col-6 d-flex align-items-center"><span className="mobile-explore-text">Explore</span></div>
                            <div className="col-6 d-flex align-items-center justify-content-end">
                                <span className="close-mobile-explore js-close-mobile-explore"></span>
                            </div>
                        </div>
                        <div className="d-flex no-gutters overflow-x-hidden h-100">
                            <div className="js-first-page first-page py-4 px-4 col-12">
                                <div className="explore-categories">
                                    <div className="d-flex justify-content-between no-gutters mb-3">
                                        <p className="mr-5 mb-0">Services</p>
                                        <a href="/" data-n="click:main" data-i="see-all"
                                            className="js-xrt text-grey-600 text-hover-dark-blue text-focus-dark-blue text-xs-14"><u>See all</u></a>
                                    </div>
                                    <div className="category-links">
                                        <a href="/"
                                            className="js-explore-pseudo-link d-flex no-gutters text-xs-14 text-grey-600 text-hover-dark-blue text-focus-dark-blue justify-content-between py-1"
                                            data-category="business">
                                            <div className="d-flex align-items-center">
                                                <span className="explore-icon-container mr-3">
                                                    <span className="bark-svg-icon bsi-primary-grey-400">
                                                        <img src={test} className="App-logo" alt="logo" />
                                                    </span>
                                                </span>

                                                <span>Business</span>
                                            </div>
                                            <span className="bark-svg-icon bsi-primary-grey-600 bsi-sm ml-2 cursor-pointer arrow-right">
                                                <img src={test1} className="App-logo" alt="logo" />
                                            </span>
                                        </a>
                                        <a href="/"
                                            className="js-explore-pseudo-link d-flex no-gutters text-xs-14 text-grey-600 text-hover-dark-blue text-focus-dark-blue justify-content-between py-1"
                                            data-category="events">
                                            <div className="d-flex align-items-center">
                                                <span className="explore-icon-container mr-3">
                                                    <span className="bark-svg-icon bsi-primary-grey-400">
                                                        <img src={test1} className="App-logo" alt="logo" />
                                                    </span>
                                                </span>

                                                <span>Events &amp; Entertainers</span>
                                            </div>
                                            <span className="bark-svg-icon bsi-primary-grey-600 bsi-sm ml-2 cursor-pointer arrow-right">
                                                <img src={test1} className="App-logo" alt="logo" />
                                            </span>
                                        </a>
                                        <a href="/"
                                            className="js-explore-pseudo-link d-flex no-gutters text-xs-14 text-grey-600 text-hover-dark-blue text-focus-dark-blue justify-content-between py-1"
                                            data-category="health">
                                            <div className="d-flex align-items-center">
                                                <span className="explore-icon-container mr-3">
                                                    <span className="bark-svg-icon bsi-primary-grey-400">
                                                        <img src={test1} className="App-logo" alt="logo" />
                                                    </span>
                                                </span>

                                                <span>Health &amp; Wellness</span>
                                            </div>
                                            <span className="bark-svg-icon bsi-primary-grey-600 bsi-sm ml-2 cursor-pointer arrow-right">
                                                <img src={test1} className="App-logo" alt="logo" />
                                            </span>
                                        </a>
                                        <a href="/"
                                            className="js-explore-pseudo-link d-flex no-gutters text-xs-14 text-grey-600 text-hover-dark-blue text-focus-dark-blue justify-content-between py-1"
                                            data-category="home">
                                            <div className="d-flex align-items-center">
                                                <span className="explore-icon-container mr-3">
                                                    <span className="bark-svg-icon bsi-primary-grey-400">
                                                        <img src={test1} className="App-logo" alt="logo" />
                                                    </span>
                                                </span>

                                                <span>House &amp; Home</span>
                                            </div>
                                            <span className="bark-svg-icon bsi-primary-grey-600 bsi-sm ml-2 cursor-pointer arrow-right">
                                                <img src={test1} className="App-logo" alt="logo" />
                                            </span>
                                        </a>
                                        <a href="/"
                                            className="js-explore-pseudo-link d-flex no-gutters text-xs-14 text-grey-600 text-hover-dark-blue text-focus-dark-blue justify-content-between py-1"
                                            data-category="lessons">
                                            <div className="d-flex align-items-center">
                                                <span className="explore-icon-container mr-3">
                                                    <span className="bark-svg-icon bsi-primary-grey-400">
                                                        <img src={test1} className="App-logo" alt="logo" />
                                                    </span>
                                                </span>

                                                <span>Lessons &amp; Training</span>
                                            </div>
                                            <span className="bark-svg-icon bsi-primary-grey-600 bsi-sm ml-2 cursor-pointer arrow-right">
                                                <img src={test1} className="App-logo" alt="logo" />
                                            </span>
                                        </a>
                                        <a href="/"
                                            className="js-explore-pseudo-link d-flex no-gutters text-xs-14 text-grey-600 text-hover-dark-blue text-focus-dark-blue justify-content-between py-1"
                                            data-category="more">
                                            <div className="d-flex align-items-center">
                                                <span className="explore-icon-container mr-3">
                                                    <span className="bark-svg-icon bsi-primary-grey-400">
                                                        <img src={test1} className="App-logo" alt="logo" />
                                                    </span>
                                                </span>

                                                <span>More</span>
                                            </div>
                                            <span className="bark-svg-icon bsi-primary-grey-600 bsi-sm ml-2 cursor-pointer arrow-right">
                                                <img src={test1} className="App-logo" alt="logo" />
                                            </span>
                                        </a>

                                    </div>
                                </div>
                                <div className="explore-popular pt-4">
                                    <div className="d-flex justify-content-between no-gutters mb-3">
                                        <p className="mr-5 mb-0">Popular Services</p>
                                        <a href="/" data-n="click:popular" data-i="see-all"
                                            className="js-xrt text-grey-600 text-hover-dark-blue text-focus-dark-blue text-xs-14"><u>See all</u></a>
                                    </div>
                                    <div className="category-links">
                                        <div>
                                            <a className="js-xrt text-xs-14 text-grey-600 py-1 d-inline-block text-hover-dark-blue text-focus-dark-blue"
                                                data-n="click:popular" data-i="pet-grooming" href="/">Dog &amp; Pet Grooming</a>
                                        </div>
                                        <div>
                                            <a className="js-xrt text-xs-14 text-grey-600 py-1 d-inline-block text-hover-dark-blue text-focus-dark-blue"
                                                data-n="click:popular" data-i="dog-training" href="/en/in/dog-training/">Dog Training</a>
                                        </div>
                                        <div>
                                            <a className="js-xrt text-xs-14 text-grey-600 py-1 d-inline-block text-hover-dark-blue text-focus-dark-blue"
                                                data-n="click:popular" data-i="dog-walking" href="/">Dog Walking</a>
                                        </div>
                                        <div>
                                            <a className="js-xrt text-xs-14 text-grey-600 py-1 d-inline-block text-hover-dark-blue text-focus-dark-blue"
                                                data-n="click:popular" data-i="life-coaching" href="/en/in/life-coaching/">Life Coaching</a>
                                        </div>
                                        <div>
                                            <a className="js-xrt text-xs-14 text-grey-600 py-1 d-inline-block text-hover-dark-blue text-focus-dark-blue"
                                                data-n="click:popular" data-i="limousine-hire" href="/en/in/limousine-hire/">Luxury Car &amp;
                                                Limousine Hire</a>
                                        </div>
                                        <div>
                                            <a className="js-xrt text-xs-14 text-grey-600 py-1 d-inline-block text-hover-dark-blue text-focus-dark-blue"
                                                data-n="click:popular" data-i="magician" href="/en/in/magician/">Magician</a>
                                        </div>
                                        <div>
                                            <a className="js-xrt text-xs-14 text-grey-600 py-1 d-inline-block text-hover-dark-blue text-focus-dark-blue"
                                                data-n="click:popular" data-i="private-investigators" href="/en/in/private-investigators/">Private
                                                Investigators</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="js-second-page second-page py-4 px-4 col-12">
                                <div className="js-second-page-inner">
                                    <div className="back-to-explore pb-3 border-bottom border-grey-100">
                                        <span className="js-explore-back-to-main cursor-pointer">
                                            <span className="bark-svg-icon bsi-primary-dark-blue bsi-sm d-inline-block align-middle mr-2">
                                                <img src={test1} className="App-logo" alt="logo" />
                                            </span>
                                            <span className="align-middle hover-underline">Back to Explore</span>
                                        </span>
                                    </div>
                                    <div className="js-explore-category-container js-explore-category-business parent-category-list d-none">
                                        <div className="d-flex no-gutters text-xs-14 justify-content-between py-4">
                                            <div className="d-flex align-items-center text-lg">
                                                <span className="bark-svg-icon bsi-primary-grey-600 mr-2">
                                                    <img src={test1} className="App-logo" alt="logo" />
                                                </span>

                                                <span>Business</span>
                                            </div>
                                            <a href="/en/in/business/" className="js-xrt text-xs-14 text-grey-600" data-n="click:child"
                                                data-i="see-all"><u>See all</u></a>
                                        </div>
                                        <div className="category-links">
                                            <div>
                                                <a className="js-xrt text-xs-14 text-grey-600 py-1 d-inline-block text-hover-dark-blue text-focus-dark-blue"
                                                    data-n="click:child" data-i="accountants" href="/en/in/accountants/">Accounting</a>
                                            </div>
                                            <div>
                                                <a className="js-xrt text-xs-14 text-grey-600 py-1 d-inline-block text-hover-dark-blue text-focus-dark-blue"
                                                    data-n="click:child" data-i="business-consulting" href="/en/in/business-consulting/">Business
                                                    Consulting</a>
                                            </div>
                                            <div>
                                                <a className="js-xrt text-xs-14 text-grey-600 py-1 d-inline-block text-hover-dark-blue text-focus-dark-blue"
                                                    data-n="click:child" data-i="mobile-software-development"
                                                    href="/en/in/mobile-software-development/">Mobile Software Development</a>
                                            </div>
                                            <div>
                                                <a className="js-xrt text-xs-14 text-grey-600 py-1 d-inline-block text-hover-dark-blue text-focus-dark-blue"
                                                    data-n="click:child" data-i="search-engine-optimization"
                                                    href="/en/in/search-engine-optimization/">Search Engine Optimization (SEO) Specialists</a>
                                            </div>
                                            <div>
                                                <a className="js-xrt text-xs-14 text-grey-600 py-1 d-inline-block text-hover-dark-blue text-focus-dark-blue"
                                                    data-n="click:child" data-i="security-guards" href="/en/in/security-guards/">Security Guard
                                                    Services</a>
                                            </div>
                                            <div>
                                                <a className="js-xrt text-xs-14 text-grey-600 py-1 d-inline-block text-hover-dark-blue text-focus-dark-blue"
                                                    data-n="click:child" data-i="social-media-marketing" href="/en/in/social-media-marketing/">Social
                                                    Media Marketing</a>
                                            </div>
                                            <div>
                                                <a className="js-xrt text-xs-14 text-grey-600 py-1 d-inline-block text-hover-dark-blue text-focus-dark-blue"
                                                    data-n="click:child" data-i="web-design" href="/en/in/web-design/">Web Design</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="js-explore-category-container js-explore-category-events parent-category-list d-none">
                                        <div className="d-flex no-gutters text-xs-14 justify-content-between py-4">
                                            <div className="d-flex align-items-center text-lg">
                                                <span className="bark-svg-icon bsi-primary-grey-600 mr-2">
                                                    <img src={test1} className="App-logo" alt="logo" />
                                                </span>

                                                <span>Events &amp; Entertainers</span>
                                            </div>
                                            <a href="/en/in/events/" className="js-xrt text-xs-14 text-grey-600" data-n="click:child"
                                                data-i="see-all"><u>See all</u></a>
                                        </div>
                                        <div className="category-links">
                                            <div>
                                                <a className="js-xrt text-xs-14 text-grey-600 py-1 d-inline-block text-hover-dark-blue text-focus-dark-blue"
                                                    data-n="click:child" data-i="caterers" href="/en/in/caterers/">Catering</a>
                                            </div>
                                            <div>
                                                <a className="js-xrt text-xs-14 text-grey-600 py-1 d-inline-block text-hover-dark-blue text-focus-dark-blue"
                                                    data-n="click:child" data-i="dj-hire" href="/en/in/dj-hire/">DJ</a>
                                            </div>
                                            <div>
                                                <a className="js-xrt text-xs-14 text-grey-600 py-1 d-inline-block text-hover-dark-blue text-focus-dark-blue"
                                                    data-n="click:child" data-i="party-event-planners" href="/en/in/party-event-planners/">Event &amp;
                                                    Party Planners</a>
                                            </div>
                                            <div>
                                                <a className="js-xrt text-xs-14 text-grey-600 py-1 d-inline-block text-hover-dark-blue text-focus-dark-blue"
                                                    data-n="click:child" data-i="magician" href="/en/in/magician/">Magician</a>
                                            </div>
                                            <div>
                                                <a className="js-xrt text-xs-14 text-grey-600 py-1 d-inline-block text-hover-dark-blue text-focus-dark-blue"
                                                    data-n="click:child" data-i="wedding-cakes" href="/en/in/wedding-cakes/">Wedding Cakes</a>
                                            </div>
                                            <div>
                                                <a className="js-xrt text-xs-14 text-grey-600 py-1 d-inline-block text-hover-dark-blue text-focus-dark-blue"
                                                    data-n="click:child" data-i="wedding-car-hire" href="/en/in/wedding-car-hire/">Wedding Car
                                                    Hire</a>
                                            </div>
                                            <div>
                                                <a className="js-xrt text-xs-14 text-grey-600 py-1 d-inline-block text-hover-dark-blue text-focus-dark-blue"
                                                    data-n="click:child" data-i="wedding-catering" href="/en/in/wedding-catering/">Wedding
                                                    Catering</a>
                                            </div>
                                            <div>
                                                <a className="js-xrt text-xs-14 text-grey-600 py-1 d-inline-block text-hover-dark-blue text-focus-dark-blue"
                                                    data-n="click:child" data-i="wedding-flowers" href="/en/in/wedding-flowers/">Wedding Flowers</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="js-explore-category-container js-explore-category-health parent-category-list d-none">
                                        <div className="d-flex no-gutters text-xs-14 justify-content-between py-4">
                                            <div className="d-flex align-items-center text-lg">
                                                <span className="bark-svg-icon bsi-primary-grey-600 mr-2">
                                                    <img src={test1} className="App-logo" alt="logo" />
                                                </span>

                                                <span>Health &amp; Wellness</span>
                                            </div>
                                            <a href="/en/in/health/" className="js-xrt text-xs-14 text-grey-600" data-n="click:child"
                                                data-i="see-all"><u>See all</u></a>
                                        </div>
                                        <div className="category-links">
                                            <div>
                                                <a className="js-xrt text-xs-14 text-grey-600 py-1 d-inline-block text-hover-dark-blue text-focus-dark-blue"
                                                    data-n="click:child" data-i="counselling" href="/en/in/counselling/">Counselling</a>
                                            </div>
                                            <div>
                                                <a className="js-xrt text-xs-14 text-grey-600 py-1 d-inline-block text-hover-dark-blue text-focus-dark-blue"
                                                    data-n="click:child" data-i="hypnotherapy" href="/en/in/hypnotherapy/">Hypnotherapy</a>
                                            </div>
                                            <div>
                                                <a className="js-xrt text-xs-14 text-grey-600 py-1 d-inline-block text-hover-dark-blue text-focus-dark-blue"
                                                    data-n="click:child" data-i="massage-therapy" href="/en/in/massage-therapy/">Massage Therapy</a>
                                            </div>
                                            <div>
                                                <a className="js-xrt text-xs-14 text-grey-600 py-1 d-inline-block text-hover-dark-blue text-focus-dark-blue"
                                                    data-n="click:child" data-i="nutritionist" href="/en/in/nutritionist/">Nutritionists &amp;
                                                    Dietitians</a>
                                            </div>
                                            <div>
                                                <a className="js-xrt text-xs-14 text-grey-600 py-1 d-inline-block text-hover-dark-blue text-focus-dark-blue"
                                                    data-n="click:child" data-i="personal-trainer" href="/en/in/personal-trainer/">Personal
                                                    Trainers</a>
                                            </div>
                                            <div>
                                                <a className="js-xrt text-xs-14 text-grey-600 py-1 d-inline-block text-hover-dark-blue text-focus-dark-blue"
                                                    data-n="click:child" data-i="relationship-and-marriage-counselling"
                                                    href="/en/in/relationship-and-marriage-counselling/">Relationship and Marriage Counselling</a>
                                            </div>
                                            <div>
                                                <a className="js-xrt text-xs-14 text-grey-600 py-1 d-inline-block text-hover-dark-blue text-focus-dark-blue"
                                                    data-n="click:child" data-i="therapy" href="/en/in/therapy/">Therapist</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="js-explore-category-container js-explore-category-home parent-category-list d-none">
                                        <div className="d-flex no-gutters text-xs-14 justify-content-between py-4">
                                            <div className="d-flex align-items-center text-lg">
                                                <span className="bark-svg-icon bsi-primary-grey-600 mr-2">
                                                    <img src={test1} className="App-logo" alt="logo" />
                                                </span>

                                                <span>House &amp; Home</span>
                                            </div>
                                            <a href="/en/in/home/" className="js-xrt text-xs-14 text-grey-600" data-n="click:child"
                                                data-i="see-all"><u>See all</u></a>
                                        </div>
                                        <div className="category-links">
                                            <div>
                                                <a className="js-xrt text-xs-14 text-grey-600 py-1 d-inline-block text-hover-dark-blue text-focus-dark-blue"
                                                    data-n="click:child" data-i="architects" href="/en/in/architects/">Architectural Services</a>
                                            </div>
                                            <div>
                                                <a className="js-xrt text-xs-14 text-grey-600 py-1 d-inline-block text-hover-dark-blue text-focus-dark-blue"
                                                    data-n="click:child" data-i="cctv-installation" href="/en/in/cctv-installation/">CCTV
                                                    Installation</a>
                                            </div>
                                            <div>
                                                <a className="js-xrt text-xs-14 text-grey-600 py-1 d-inline-block text-hover-dark-blue text-focus-dark-blue"
                                                    data-n="click:child" data-i="fence-installers" href="/en/in/fence-installers/">Fence &amp; Gate
                                                    Installation</a>
                                            </div>
                                            <div>
                                                <a className="js-xrt text-xs-14 text-grey-600 py-1 d-inline-block text-hover-dark-blue text-focus-dark-blue"
                                                    data-n="click:child" data-i="garden-clearance" href="/en/in/garden-clearance/">Garden
                                                    Clearance</a>
                                            </div>
                                            <div>
                                                <a className="js-xrt text-xs-14 text-grey-600 py-1 d-inline-block text-hover-dark-blue text-focus-dark-blue"
                                                    data-n="click:child" data-i="gardeners" href="/en/in/gardeners/">Gardening</a>
                                            </div>
                                            <div>
                                                <a className="js-xrt text-xs-14 text-grey-600 py-1 d-inline-block text-hover-dark-blue text-focus-dark-blue"
                                                    data-n="click:child" data-i="gutter-cleaning-repairs"
                                                    href="/en/in/gutter-cleaning-repairs/">Gutter Cleaning</a>
                                            </div>
                                            <div>
                                                <a className="js-xrt text-xs-14 text-grey-600 py-1 d-inline-block text-hover-dark-blue text-focus-dark-blue"
                                                    data-n="click:child" data-i="cleaners" href="/en/in/cleaners/">House Cleaning</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="js-explore-category-container js-explore-category-lessons parent-category-list d-none">
                                        <div className="d-flex no-gutters text-xs-14 justify-content-between py-4">
                                            <div className="d-flex align-items-center text-lg">
                                                <span className="bark-svg-icon bsi-primary-grey-600 mr-2">
                                                    <img src={test1} className="App-logo" alt="logo" />
                                                </span>

                                                <span>Lessons &amp; Training</span>
                                            </div>
                                            <a href="/en/in/lessons/" className="js-xrt text-xs-14 text-grey-600" data-n="click:child"
                                                data-i="see-all"><u>See all</u></a>
                                        </div>
                                        <div className="category-links">
                                            <div>
                                                <a className="js-xrt text-xs-14 text-grey-600 py-1 d-inline-block text-hover-dark-blue text-focus-dark-blue"
                                                    data-n="click:child" data-i="business-career-coaching"
                                                    href="/en/in/business-career-coaching/">Business &amp; Career Coaching</a>
                                            </div>
                                            <div>
                                                <a className="js-xrt text-xs-14 text-grey-600 py-1 d-inline-block text-hover-dark-blue text-focus-dark-blue"
                                                    data-n="click:child" data-i="english-lessons" href="/en/in/english-lessons/">English Lessons</a>
                                            </div>
                                            <div>
                                                <a className="js-xrt text-xs-14 text-grey-600 py-1 d-inline-block text-hover-dark-blue text-focus-dark-blue"
                                                    data-n="click:child" data-i="guitar-lessons" href="/en/in/guitar-lessons/">Guitar Lessons</a>
                                            </div>
                                            <div>
                                                <a className="js-xrt text-xs-14 text-grey-600 py-1 d-inline-block text-hover-dark-blue text-focus-dark-blue"
                                                    data-n="click:child" data-i="maths-tutors" href="/en/in/maths-tutors/">Maths Tutoring</a>
                                            </div>
                                            <div>
                                                <a className="js-xrt text-xs-14 text-grey-600 py-1 d-inline-block text-hover-dark-blue text-focus-dark-blue"
                                                    data-n="click:child" data-i="piano-lessons" href="/en/in/piano-lessons/">Piano Lessons</a>
                                            </div>
                                            <div>
                                                <a className="js-xrt text-xs-14 text-grey-600 py-1 d-inline-block text-hover-dark-blue text-focus-dark-blue"
                                                    data-n="click:child" data-i="singing-lessons" href="/en/in/singing-lessons/">Singing Lessons</a>
                                            </div>
                                            <div>
                                                <a className="js-xrt text-xs-14 text-grey-600 py-1 d-inline-block text-hover-dark-blue text-focus-dark-blue"
                                                    data-n="click:child" data-i="private-tuition" href="/en/in/private-tuition/">Tutoring</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="js-explore-category-container js-explore-category-more parent-category-list d-none">
                                        <div className="d-flex no-gutters text-xs-14 justify-content-between py-4">
                                            <div className="d-flex align-items-center text-lg">
                                                <span className="bark-svg-icon bsi-primary-grey-600 mr-2">
                                                    <img src={test1} className="App-logo" alt="logo" />
                                                </span>

                                                <span>More</span>
                                            </div>
                                            <a href="/en/in/more/" className="js-xrt text-xs-14 text-grey-600" data-n="click:child"
                                                data-i="see-all"><u>See all</u></a>
                                        </div>
                                        <div className="category-links">
                                            <div>
                                                <a className="js-xrt text-xs-14 text-grey-600 py-1 d-inline-block text-hover-dark-blue text-focus-dark-blue"
                                                    data-n="click:child" data-i="airport-transfers" href="/en/in/airport-transfers/">Airport
                                                    Transfers</a>
                                            </div>
                                            <div>
                                                <a className="js-xrt text-xs-14 text-grey-600 py-1 d-inline-block text-hover-dark-blue text-focus-dark-blue"
                                                    data-n="click:child" data-i="photographer" href="/en/in/photographer/">General Photography</a>
                                            </div>
                                            <div>
                                                <a className="js-xrt text-xs-14 text-grey-600 py-1 d-inline-block text-hover-dark-blue text-focus-dark-blue"
                                                    data-n="click:child" data-i="graphic-design" href="/en/in/graphic-design/">Graphic Design</a>
                                            </div>
                                            <div>
                                                <a className="js-xrt text-xs-14 text-grey-600 py-1 d-inline-block text-hover-dark-blue text-focus-dark-blue"
                                                    data-n="click:child" data-i="immigration-lawyer" href="/en/in/immigration-lawyer/">Immigration
                                                    Lawyers</a>
                                            </div>
                                            <div>
                                                <a className="js-xrt text-xs-14 text-grey-600 py-1 d-inline-block text-hover-dark-blue text-focus-dark-blue"
                                                    data-n="click:child" data-i="limousine-hire" href="/en/in/limousine-hire/">Luxury Car &amp;
                                                    Limousine Hire</a>
                                            </div>
                                            <div>
                                                <a className="js-xrt text-xs-14 text-grey-600 py-1 d-inline-block text-hover-dark-blue text-focus-dark-blue"
                                                    data-n="click:child" data-i="private-investigators" href="/en/in/private-investigators/">Private
                                                    Investigators</a>
                                            </div>
                                            <div>
                                                <a className="js-xrt text-xs-14 text-grey-600 py-1 d-inline-block text-hover-dark-blue text-focus-dark-blue"
                                                    data-n="click:child" data-i="wills-and-estate-planning"
                                                    href="/en/in/wills-and-estate-planning/">Wills and Estate Planning</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="collapse navbar-collapse has-explore" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto d-flex align-items-center">
                        <li className="navitem-mobsearch">
                            <span className="mob-init-search micons-magnifier"></span>
                        </li>
                        <li className="post_bark_top">
                            <div className="input-group category_name_top_container">
                                <input type="text" autoComplete="off" name="category_name_top" id="category_name_top"
                                    className="form-control category_name_top" placeholder="Search for a service" />
                                <div className="input-group-append">
                                    <button className="btn_submit_top btn" type="button" id="bark_submit_top">
                                        <span className="micons-magnifier"></span>
                                    </button>
                                </div>
                            </div>
                            <input type="hidden" name="category_id" id="category_id_top" />
                            <input type="hidden" name="postcode_id" id="postcode_id_top" />
                            <input type="hidden" name="postcode_type" id="postcode_type_top" />
                        </li>
                        <li className="align-self-center">
                            <a className="ml-1 ml-sm-3 mr-0 mr-sm-3 text-dark-blue" href="/en/in/login/">
                                Login
                            </a>
                        </li>

                        <li className="navitem-regpro">
                            <a className="btn btn-primary btn-rounded d-inline-flex seller-create-button header-become-pro"
                                href="/en/in/sellers/create/">
                                <div className="avatar mr-2 d-inline-flex">
                                    <img
                                        src="{test1}"
                                        alt="" width="24" height="24" className="loading" data-was-processed="true" />
                                </div>
                                <span className="long">Join as a Professional</span>
                                <span className="short">Join as a Pro</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav></>
        );
    }
}
