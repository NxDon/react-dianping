import React from 'react'
import DetailInfo from '../../../components/DetailInfo';
import {getInfoData} from '../../../fetch/detail/detai'

class Info extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            info: false
        }
    }

    componentDidMount() {
        // 获取商户信息
        const id = this.props.id;
        const result = getInfoData(id);
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
        console.log(this.state.info);
        return (
            <div>
                {
                    this.state.info
                        ? <DetailInfo data={this.state.info}/>
                        : ''
                }
            </div>
        )
    }
}

export default Info