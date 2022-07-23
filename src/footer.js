import React from "react";
class FooterComponent extends React.Component {

    render() {
        const style = {
            position: 'relative'
        };

        return (
            <footer className="desktop-only">
                <div className="footer">
                    <div className="full-width-wrapper body-min-width">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="footer-top-row w-100">
                                        <div className="footer-wrapper d-flex flex-row w-100 justify-content-start flex-wrap">
                                            <div className="d-flex link-column flex-column">
                                                <div className="footer-title mb-3">
                                                    For Customers
                                                </div>
                                                <div className="links text-light-grey">
                                                    <div><a href="/en/in/">Find a Professional</a></div>
                                                    <div><a href="/en/in/how-it-works/customers/">How it works</a></div>
                                                    <div><a href="/en/in/login/">Login</a></div>
                                                </div>
                                            </div>
                                            <div className="d-flex link-column flex-column">
                                                <div className="footer-title pb-3">
                                                    For Professionals
                                                </div>
                                                <div className="links text-light-grey">
                                                    <div><a href="/en/in/how-it-works/sellers/">How it works</a></div>
                                                    <div><a href="/en/in/sellers/pricing/">Pricing</a></div>
                                                    <div><a href="/en/in/sellers/create/">Join as a Professional</a></div>
                                                    <div><a href="https://help.bark.com/">Help centre</a></div>
                                                    <div><a href="/en/in/get-the-app/sellers/">Mobile App</a></div>
                                                </div>
                                            </div>
                                            <div className="d-flex link-column flex-column">
                                                <div className="footer-title pb-3">
                                                    About
                                                </div>
                                                <div className="links text-light-grey">
                                                    <div><a href="/en/in/about-bark/">About Bark</a></div>
                                                    <div><a href="/en/in/team/">Team</a></div>
                                                    <div><a href="/en/in/careers/">Careers</a></div>
                                                    <div><a href="/blog/" target="_blank">Blog</a></div>
                                                </div>
                                            </div>
                                            <div className="d-flex flex-column contact-column align-items-end">
                                                <a href="mailto:india@bark.com">india@bark.com</a>
                                                <a className="pt-2" href="tel:+918037244341">+91 80372 44341</a>
                                                <div className="text-light-grey small pb-2">(Mon-Fri 9am-4pm)</div>
                                                <div className="d-flex flex-row social-icons-row">
                                                    <a href="https://twitter.com/barkteam?lang=en" rel="noreferrer" target="_blank"><img className="mr-3 loading" src="https://d18jakcjgoan9.cloudfront.net/s/img/images/material-icons/icon-twitter.png!d=2M4f26" title="Twitter Logo" alt="Twitter Logo" width="24" height="24" data-was-processed="true" /></a>
                                                    <a href="https://www.facebook.com/barkteam/" rel="noreferrer" target="_blank"><img className="mr-3 loading" src="https://d18jakcjgoan9.cloudfront.net/s/img/images/material-icons/icon-facebook.png!d=2M4f26" title="Facebook Logo" alt="Facebook Logo" width="24" height="24" data-was-processed="true" /></a>
                                                    <a href="https://www.linkedin.com/company/bark-com/about/" rel="noreferrer" target="_blank"><img src="https://d18jakcjgoan9.cloudfront.net/s/img/images/material-icons/icon-linkedin.png!d=2M4f26" title="LinkedIn Logo" alt="LinkedIn Logo" width="24" height="24" className="loading" data-was-processed="true" /></a>
                                                </div>

                                                <div className="country-selection-fake-dropdown rounded d-flex flex-row p-2 align-items-center mt-3">
                                                    <img className="flag mr-3 lazy loaded" alt="" data-src="https://d18jakcjgoan9.cloudfront.net/s/img/img/barkv2/flags/in-flag.png!d=2MasO" width="28" height="20" src="https://d18jakcjgoan9.cloudfront.net/s/img/img/barkv2/flags/in-flag.png!d=2MasO" data-was-processed="true" />
                                                    <p className="country-name mb-0">India</p>
                                                    <img className="chevron-down lazy loaded" data-src="https://d18jakcjgoan9.cloudfront.net/s/img/img/barkv2/custom-icons/downarrow-bleumarin.png!d=xX1sY" alt="" width="14" height="14" src="https://d18jakcjgoan9.cloudfront.net/s/img/img/barkv2/custom-icons/downarrow-bleumarin.png!d=xX1sY" data-was-processed="true" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="hr-1 w-100" />
                                    <div className="footer-bottom-row w-100">
                                        <div className="d-flex flex-row justify-content-between align-items-center">
                                            <div className="copyright text-light-grey mr-3">
                                                © 2022 Bark.com Global Limited.
                                                <span>
                                                    <a className="light-grey text-nowrap" href="/en/in/terms/"> Terms &amp; Conditions</a>
                                                </span> /
                                                <span>
                                                    <a className="light-grey text-nowrap" href="/en/in/cookies/"> Cookie policy</a>
                                                </span> /
                                                <span>
                                                    <a className="light-grey text-nowrap" href="/en/in/privacy/"> Privacy policy</a>
                                                </span>
                                            </div>
                                            <div className="trustpilot-widget ml-2" data-locale="en-IN" data-template-id="53aa8807dec7e10d38f59f32" data-businessunit-id="55bf24b60000ff000581b801" data-style-height="120px" data-style-width="100%" data-theme="light" data-stars="1,2,3,4,5" style={style}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default FooterComponent;