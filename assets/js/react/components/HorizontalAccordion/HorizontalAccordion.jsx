import React from 'react';
import HorizontalAccordionSlide from './HorizontalAccordionSlide';

var HorizontalAccordion =  React.createClass({
    getInitialState: function() {
        return {
            slides: this.props.data.slides,
            isBeingHovered: false,
            slideCount: this.props.data.slides.length,
            hoveredWidth: this.props.data.hoveredWidth
        }
    },
    getSlides: function() {
        let returnSlides = [];
        if( typeof this.state.slides == 'undefined' ) {
            console.error( 'no slides are initialised' );
            return;
        }
        for( var slide in this.state.slides ) {
            let currentSlide = this.state.slides[slide];
            returnSlides.push(<HorizontalAccordionSlide hoveredWidth={this.state.hoveredWidth} slideCount={this.state.slideCount} key={ 'horizontalAccordionSlide-' + slide } imageUrl={currentSlide.imageURL} />);
        }
        return returnSlides;
    },
    render: function () {
        var slides = this.getSlides();
        return <div className="horizontal-accordion">{slides}</div>;
    }
});

module.exports = HorizontalAccordion;