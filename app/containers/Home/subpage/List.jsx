import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {getListData} from '../../../fetch/home/home';
import ListComponent from '../../../components/List';
import LoadMore from '../../../components/LoadMore';

class List extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: [],//储存列表的所有信息
            hasMore: false,//是否接下来还有页面
            isLoadingMore: false,//记录当期那是加载中。。。还是"点击加载更多"
            page: 1//下一页的页数
        }
    }

    loadMoreData() {
        //下载更多数据
        this.setState({
            isLoadingMore: true
        })
        const city = this.props.cityName;
        const page = this.state.page;//下一页
        const result = getListData(city, page);
        this.setState({
            page: page + 1,
            isLoadingMore: false//此时已经加载完成
        })
        this.resultHandler(result)

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
            console.log("get res");
            return res.json()
        }).then((json) => {
                this.setState({
                    hasMore: json.hasMore,
                    data: this.state.data.concat(json.data)
                })
            console.log(this.state.data);
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
                {
                    this.state.hasMore ?
                        <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFunction={this.loadMoreData.bind(this)}/> : null
                }
            </div>
        )
    }
}

module.exports = List