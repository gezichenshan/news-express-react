import React, { Component } from 'react';
import request from './utils/requests'
import NewsList from './components/news-list/'
import Loading from './components/loading/'
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
        more:false,
        loading:true
      };
    }
  componentDidMount(){
    this.loadMore()
  }
  async loadMore() {
    let data = await request(this.state.offset, this.state.limit)
    this.setState({
      newsList:[...this.state.newsList,...data.results]
    })
    this.setState({
      loading:false
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
  }
  render() {
    return (
      <div className="App">
        {this.state.loading&&<Loading/>}
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
