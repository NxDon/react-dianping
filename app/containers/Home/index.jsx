import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import HomeHeader from '../../components/HomeHeader';
import {connect} from 'react-redux';

class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (
            <div>
                <HomeHeader cityName={this.props.currentCity}/>
            </div>
        )
    }
}

function mapState(state) {
    return {
        currentCity:state.userinfo.cityName
    }
}

export default connect(mapState, null)(Home);
