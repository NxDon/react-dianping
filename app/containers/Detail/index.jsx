import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import Info from './subpage/DetailInfo.js';
import Header from '../../components/Header';

class Detail extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        const id = this.props.params.id;//从路由获取id

        return (
            <div>
                <Header title="商户详情"/>
                <Info id={id}/>

            </div>
        )
    }
}

// 使用 require.ensure 异步加载，还不支持 ES6 的 export 
// export default Detail
module.exports = Detail