import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {connect} from 'react-redux';
import {hashHistory} from 'react-router'

import * as useractions from '../../actions/userinfo';

import Header from '../../components/Header'
import CityList from '../../components/CityList'
import localStore from '../../util/localStore'
import {CITYNAME} from '../../config/localStoreKey'

import './index.less'

class City extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    changeCity(newCity) {
        if (newCity == null) {
            return
        }
        // 修改 redux
        const userinfo = this.props.currentCity
        userinfo.cityName = newCity
        console.log("this is " + this);
        this.props.userInfoActions(userinfo)

        // 修改 cookie
        localStore.setItem(CITYNAME, newCity)

        // 跳转页面
        hashHistory.push('/')
    }

    render() {
        return (
            <div>
                <Header title={this.props.currentCity.cityName}/>
                <div className="current-city">
                    <h2>当前城市:{this.props.currentCity.cityName}</h2>
                </div>
                <CityList changeFn={this.changeCity.bind(this)}/>
            </div>
        )
    }
}


function mapState(state) {
    return {
        currentCity: state.userinfo
    }
}

function mapDispatch(dispatch) {
    return {
        userInfoActions: (city) => {
           dispatch(useractions.update(city))
        }
    }

}

module.exports = connect(mapState, mapDispatch)(City);
