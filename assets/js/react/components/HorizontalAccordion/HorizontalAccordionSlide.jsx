import React from 'react';

var HorizontalAccordionSlide = React.createClass({
    calculateSlideWidth: function( availableSpace = 100, modifySlideCount = 0 ) {
        return availableSpace / ( this.props.slideCount + modifySlideCount ) + '%';
    },
    getInitialState: function () {
        return {
            style: this.getStyle(),
            isCurrentlyHoveredElement: false,
            baseClassName: 'horizontal-accordion__slide',
            className: 'horizontal-accordion__slide'
        }
    },
    getStyle: function () {
        return {
            backgroundColor: "white",
            width: this.calculateSlideWidth(),
            backgroundImage: 'url(' + this.props.imageUrl + ')'
        };
    },
    startHover: function () {
        this.setState({
            className: this.state.className + ' --actually-hovered'
        });
    },
    componentWillReceiveProps: function(nextProps) {
        let availableSpace = nextProps.isBeingHovered ? 40 : 100,
            modifySlideCount = nextProps.isBeingHovered ? -1 : 0;
        
        let newStyle = Object.assign({}, this.state.style, {width: this.calculateSlideWidth(availableSpace, modifySlideCount)});
        this.setState({
            style: newStyle
        });
    },
    endHover: function () {
        this.setState({
            className: this.state.baseClassName
        });
    },
    render: function () {
        return <div className={this.state.className} style={this.state.style} onMouseOver={this.startHover}
                    onMouseLeave={this.endHover}></div>;
    }
});

module.exports = HorizontalAccordionSlide;
module.hot.accept();