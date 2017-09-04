import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './index.less';

class HomeAd extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (
            <div>
                {
                    this.props.promotions.map((obj, index) => {
                        return <div key={index} className="ad-item float-left">
                            <a href="" target="_blank">
                                <img src={obj.img} alt={obj.title}/>
                            </a>
                        </div>
                    })
                }
            </div>
        )
    }
}

export default HomeAd