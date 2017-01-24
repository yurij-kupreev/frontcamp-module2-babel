"use strict";

window.onload = () => MainFunc();

function MainFunc() {
	require(['./lib/newsApp'], function(appClass) {
	    const config = {
	        newsUrl: 'https://newsapi.org/v1/articles?source=bbc-news&apiKey=94d2597308124d9aa8d8c2ef9abf27a3',
	        newsElementId: 'articles'
	    };
	    const app = new appClass.NewsApp(config);
	    app.run();
	}
}