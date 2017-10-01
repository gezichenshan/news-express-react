import React, { Component } from 'react';
import './index.css'

class NewsItem extends Component {
	to3rdPage(item){
		window.open(item.link)
	}
  	render() {
  		const {item} = this.props
    	return (
	      	<div onClick={()=>this.to3rdPage(item)} className="item-container" style={{width:document.documentElement.clientWidth,maxWidth:640}}>
	      		<div>
	      			<h3 className="item-title">{item.title}</h3>
	      		</div>
	      		<div>
	      			{
	      				item.author?
	      				<span>{item.author}</span>
	      				:
	      				<span>Unknown</span>
	      			}
	      		</div>
	      		<div>
	      			{item.publication_time}
	      		</div>
	      		<div>
	      			{item.source}
	      		</div>
	      		<div className="item-abstract align-left" dangerouslySetInnerHTML={{__html: item.abstract}}>
	      		</div>
	      		<div className="read-more-text align-left">
	      			阅读更多
	      		</div>
	      	</div>
    	);
  	}
}

export default NewsItem;
