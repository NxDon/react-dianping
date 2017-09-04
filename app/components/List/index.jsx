import React from 'react'
import './index.less';
import Item from './Item';

class List extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const datas = this.props.data
        return (
            <div className="list-container">{
                datas.map((obj, index) => {
                    return <Item key={index} data={obj}></Item>
                })
            }</div>
        )
    }
}

export default List;