import React from 'react';
import HorizontalAccordionSlide from './HorizontalAccordionSlide';

var HorizontalAccordion =  React.createClass({
    getInitialState: function() {
        return {
            slides: this.props.data.slides,
            isBeingHovered: false
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
            returnSlides.push(<HorizontalAccordionSlide key={ 'horizontalAccordionSlide-' + slide } imageUrl={currentSlide.imageURL} slideCount={this.state.slides.length} isBeingHovered={this.state.isBeingHovered} />);
        }
        return returnSlides;
    },
    startHover: function() {
      this.setState({ isBeingHovered: true });
    },
    endHover: function() {
      this.setState({ isBeingHovered: false });
    },
    render: function () {
        var slides = this.getSlides();
        return <div className="horizontal-accordion" onMouseOver={this.startHover}
                    onMouseLeave={this.endHover}>{slides}</div>;
    }
});

module.exports = HorizontalAccordion;