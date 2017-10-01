import React, { Component } from 'react';
import NewsItem from '../news-item/'

class NewsList extends Component {

  	render() {
    	return (
	      	<div>
	      		{
		        	this.props.data.map(function (item, i) {
	                    return (
	                        <NewsItem item={item} key={i}/>
	                    );
	                })
            	}
	      	</div>
    	);
  	}
}

export default NewsList;
