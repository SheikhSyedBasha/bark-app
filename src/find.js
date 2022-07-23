import React from "react";

export class FindComponent extends React.PureComponent {
    render() {
        return (
            <div className="container">
                <section id="page-header">
                    <div className="splash-screen-container">
                        <div className="row">
                            <div className="col-12 col-md-10 col-lg-6 offset-lg-2 offset-md-1">
                                <h1 className="page-title h2 mb-1">
                                    Find the perfect <br /> professional for you
                                </h1>
                                <h4 className="text-light-grey mb-4">
                                    Get free quotes within minutes
                                </h4>
                            </div>
                        </div>
                        <form can-popup="" id="project-create-form" autoComplete="off" method="post" action="/find/">
                            <input type="hidden" name="source" value="site_home_create_bark_1" />
                            <div className="row">
                                <div className="col-12 col-md-10 col-lg-8 offset-lg-2 offset-md-1 create-frm-container">
                                    <div className="d-flex flex-row justify-content-start section-padding">
                                        <div className="d-flex flex-row input-and-btn-row w-100">
                                            <div className="large-split-input d-flex ">
                                                <div className="d-flex input-group left-input">
                                                    <input type="text" autoComplete="off" name="category_name" id="category_name" className="form-control category-input-v2" placeholder="What service are you looking for?" />
                                                    <input type="hidden" name="category_id" id="category_id" value="" />
                                                    <input type="hidden" name="bark_mode" id="bark_mode" value="home" />
                                                    <input type="hidden" name="category_name_hidden" id="category_name_hidden" value="" />
                                                </div>
                                                <div className="input-group icon-left right-input align-items-center full-postcode-input">
                                                    <span className="py-2 pl-2 pr-2 locicon">
                                                        <img alt="" width="20" height="20" title="" data-src="https://d18jakcjgoan9.cloudfront.net/s/img/icons/icon-locationmarker.png!d=rNqfn" srcSet="https://d18jakcjgoan9.cloudfront.net/s/img/icons/icon-locationmarker.png!d=rNqfn 1x, https://d18jakcjgoan9.cloudfront.net/s/img/icons/icon-locationmarker.png!d=5GOHq 2x" className="lazy loaded" src="https://d18jakcjgoan9.cloudfront.net/s/img/icons/icon-locationmarker.png!d=rNqfn" data-was-processed="true" />
                                                    </span>
                                                    <input type="text" className="form-control pl-0 postcode-input-v2" autoComplete="off" placeholder="Pin Code" name="postcode" id="postcode" />
                                                    <input type="hidden" name="postcode_id" id="postcode_id" value="" />
                                                    <input type="hidden" name="postcode_type" id="postcode_type" value="" />
                                                </div>
                                            </div>
                                            <div className="pl-2 d-flex align-items-center search-button desktop-only">
                                                <div className="btn btn-primary large-btn" id="bark_submit">Search</div>
                                            </div>
                                            <div className="pl-2 d-flex align-items-center search-button mobile-only">
                                                <div className="d-flex btn btn-primary large-btn-mobile js-search-professional-mobile"><img src="https://d18jakcjgoan9.cloudfront.net/s/img/images/icons/magnifier-mobile.png!d=5K1So" alt="" width="19" height="19" /></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-column align-items-left">
                                        <div id="category_error" className="error py-2"></div>
                                        <div id="postcode_error" className="error py-2"></div>
                                    </div>
                                    <div className="py-3">
                                        <p className="text-xs-14 text-light-grey">
                                            <span className="text-light-grey">Popular:</span>
                                            <span data-caid="1212" className="carousel-link cursor-pointer">House Cleaning</span>,                                            <span data-caid="1505" className="carousel-link cursor-pointer">Web Design</span>,                                            <span data-caid="74" className="carousel-link cursor-pointer">Personal Trainers</span>                                    </p>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        );
    }
}