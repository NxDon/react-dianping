import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {getAdData} from '../../../fetch/home/home';
import HomeAd from '../../../components/HomeAd';

class Ad extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        const result = getAdData();
        result.then((res) => {
            return res.json()
        }).then((json) => {
            this.setState({
                data: json
            })
        })
    }

    render() {
        return (
            <HomeAd promotions={this.state.data} />
        )
    }
}

// 使用 require.ensure 异步加载，还不支持 ES6 的 export
// export default NotF ound
module.exports = Ad