import React from 'react'
import {getCommentData} from '../../../fetch/detail/detai';


class Comment extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {
        const id = this.props.id;
        const result = getCommentData(id);
        result.then(res => {
            return res.json()
        }).then(json => {
            this.setState({
                info: json
            })
        }).catch(ex => {
            if (__DEV__) {
                console.error('详情页，获取商户信息出错')
            }
        })
    }

    render() {
        return (
            <div>I ms</div>
        )
    }
}

export default Comment