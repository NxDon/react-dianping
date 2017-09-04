import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {getListData} from '../../../fetch/home/home';
import ListComponent from '../../../components/List';

class List extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: [],
            hasMore: false
        }
    }

    componentDidMount() {
        this.loadFirstPageData.call(this);
    }

    //首屏数据
    loadFirstPageData() {
        const cityName = this.props.cityName;
        const result = getListData(cityName, 0);
        this.resultHandler(result)
    }

    //数据处理函数
    resultHandler(result) {
        result.then((res) => {
            return res.json()
        }).then((json) => {
                this.setState({
                    hasMore: json.hasMore,
                    data: json.data
                })
            }
        )
    }

    render() {
        return (
            <div>
                <h2 className="home-list-title"></h2>
                {
                    this.state.data.length ?
                        <ListComponent data={this.state.data}/>
                        : <div>loading</div>
                }
            </div>
        )
    }
}

module.exports = List