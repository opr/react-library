import React from 'react';

var HorizontalAccordionSlide = React.createClass({
    getInitialState: function () {
        return {
            style: this.getStyle(),
            baseClassName: 'horizontal-accordion__slide',
            className: 'horizontal-accordion__slide',
            currentlyHovered: false
        }
    },
    getStyle: function () {
        return {
            backgroundImage: 'url(' + this.props.imageUrl + ')',
            width: (100-this.props.hoveredWidth) / this.props.slideCount + '%'
        };
    },
    hover: function() {
        let newStyle = Object.assign({}, this.state.style, { width: this.props.hoveredWidth + '%' });
        this.setState({
            style: newStyle
        });
    },
    unhover: function(){
        let newStyle = Object.assign({}, this.state.style, { width:  (100-this.props.hoveredWidth) / this.props.slideCount + '%' });
        this.setState({
            style: newStyle
        });
    },
    render: function () {
        return <div className={this.state.className} style={this.state.style} onMouseOver={this.hover} onMouseLeave={this.unhover} ></div>;
    }
});

module.exports = HorizontalAccordionSlide;
module.hot.accept();