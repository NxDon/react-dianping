import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import LocalStore from '../util/localStore'
import {CITYNAME} from "../config/localStoreKey"
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as userInfoActions from '../actions/userinfo';

class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            initDone: false
        };
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    componentDidMount() {
        let cityName = LocalStore.getItem(CITYNAME)//从localstorage取出城市;
        if (cityName == null) {
            cityName = '北京'
        }
        console.log("current city is " + cityName);
        //获取到城市之后触发updatecityname动作
        this.props.userInfoActions.update({
                cityName: cityName
            }
        );

        this.setState({
            initDone: true
        })
    }

    render() {
        return (
            <div>
                {this.state.initDone ?
                    this.props.children :
                    <div> 加载中</div>
                }
            </div>
        )
    }
}


function mapDispatch(dispatch) {
    return{
        userInfoActions : bindActionCreators(userInfoActions,dispatch)
    }
}

export default connect(
    null,mapDispatch
)(App);
