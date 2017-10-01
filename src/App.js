import React, { Component } from 'react';
import request from './utils/requests'
import NewsList from './components/news-list/'
import './App.css';
import InfiniteScroll from 'react-infinite-scroller';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        page:0,
        offset:0,
        limit:10,
        newsList:[],
        more:false
      };
    }
  componentDidMount(){
    this.loadMore()
  }
  async loadMore() {
    console.log(Date())
    let data = await request(this.state.offset, this.state.limit)
    this.setState({
      newsList:[...this.state.newsList,...data.results]
    })
    if(this.state.newsList.length<data.total){//如果总数没有超过已经加载数，则继续加载。
      this.setState({
        page:++this.state.page,
        offset:this.state.limit*this.state.page,
        more:true
      })
    }else{
      this.setState({
        more:false
      })
    }
    console.log(Date())
  }
  render() {
    return (
      <div className="App">
        <InfiniteScroll
            pageStart={0}
            loadMore={this.loadMore.bind(this)}
            hasMore={this.state.more}
            loader={<div className="loader">Loading ...</div>}>
            <NewsList data={this.state.newsList}/>
        </InfiniteScroll>
      </div>
    );
  }
}

export default App;
