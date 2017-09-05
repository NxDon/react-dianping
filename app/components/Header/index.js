import React from 'react'

import './index.less'
class Header extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    clickHandle() {
        window.history.back()
    }

    render() {
        return (
            <div id="common-header">
                <span className="back-icon" onClick={this.clickHandle.bind(this)}>
                    <i className="icon-chevron-left"></i>
                </span>
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}
 
export default Header