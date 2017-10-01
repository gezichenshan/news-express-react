import $ from 'jquery'

export default (offset,limit)=>{
	let url = "http://52.214.109.210:5000/news";
	let requestUrl = url + "?offset=" + offset + "&limit=" + limit;
	console.log(requestUrl)
	return new Promise(function (resolve, reject) {
        $.get(requestUrl, function(data) {
        	resolve(data)
	    })
    })
}