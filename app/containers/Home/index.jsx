import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {connect} from 'react-redux';

import Ad from './subpage/Ad';
import HomeHeader from '../../components/HomeHeader';
import Categore from '../../components/Category'

class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (
            <div>
                <HomeHeader cityName={this.props.currentCity}/>
                <Categore/>
                <div style={{height: '15px'}}>
                    <Ad/>
                </div>
            </div>
        )
    }
}

function mapState(state) {
    return {
        currentCity: state.userinfo.cityName
    }
}

export default connect(mapState, null)(Home);
