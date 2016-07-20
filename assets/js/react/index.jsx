import React from 'react';
import {render} from 'react-dom';
import HorizontalAccordion from './components/HorizontalAccordion/HorizontalAccordion';


var App =  React.createClass({
    render: function () {
        return <HorizontalAccordion data={horizontalAccordionJSON} />;
    }
});

render(<App/>, document.getElementById('app'));
module.hot.accept();