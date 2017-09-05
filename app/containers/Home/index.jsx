import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {connect} from 'react-redux';

import Ad from './subpage/Ad';
import HomeHeader from '../../components/HomeHeader';
import Categore from '../../components/Category'
import List from './subpage/List';

class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (
            <div>
                <HomeHeader cityName={this.props.cityName} style={{textDecoration:null}}/>
                <Categore/>
                <div style={{height: '15px'}}></div>
                <Ad/>
                <List cityName={this.props.cityName}/>
            </div>
        )
    }
}

function mapState(state) {
    return {
        cityName: state.userinfo.cityName
    }
}

export default connect(mapState, null)(Home);
