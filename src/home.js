import React from "react";
import { FindComponent } from "./find";
import Carousel from './home-carousel';
import DiscoverComponent from './discover';
import Homepage from "./homepage";
import TestimonalComponent from './testimonals';

export class HomeComponent extends React.Component {
    render() {
        return (
            <div className="home-component">
                <React.Fragment>
                    <Homepage></Homepage>
                </React.Fragment>
                <FindComponent></FindComponent>
                <React.Fragment>
                    <Carousel></Carousel>
                </React.Fragment>
                <React.Fragment>
                    <DiscoverComponent></DiscoverComponent>
                </React.Fragment>
                <React.Fragment>
                    <TestimonalComponent></TestimonalComponent>
                </React.Fragment>
            </div>
        );
    }
}