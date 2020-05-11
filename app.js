console.log('It Works');
const axios = require('axios').default;
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("url > ", function(url) {
	urls = url.split("?")
	console.log(urls[0]+"?__a=1")
	axios.get(urls[0]+"?__a=1")
		.then(function (response) {
			if (response.data["graphql"]["shortcode_media"]["is_video"]) {
				console.log(response.data["graphql"]["shortcode_media"]["video_url"]);
			} else {
				console.log(response.data["graphql"]["shortcode_media"]["display_url"]);
			};
			console.log(response.status);
			console.log(response.statusText);
	});
	rl.close();
});