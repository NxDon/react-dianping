import React from 'react'
import {connect} from 'react-redux';

import SearchHeader from '../../components/SearchHeader'
import SearchList from './subpage/SearchList';
import LoadMore from '../../components/LoadMore';



class Search extends React.Component {
    constructor(props, context) {
        super(props, context);

    }

    render() {
        const params = this.props.params;
        return (
            <div>
                <SearchHeader keyword={params.keyword}/>
                <SearchList keyword={params.keyword} category={params.type}/>
            </div>
        )
    }
}

function mapState(state) {
    return {
        userdata: state.userinfo
    }
}

// 使用 require.ensure 异步加载，还不支持 ES6 的 export
// export default Search
module.exports = connect(mapState)(Search);