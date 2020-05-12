console.log('It Works');
const axios = require('axios').default;
async function retrieve(url) {
	var urls = url.split("?");
	var resp = await axios.get(urls[0]+"?__a=1");
	if (resp.data["graphql"]["shortcode_media"]["is_video"]) {
		return resp.data["graphql"]["shortcode_media"]["video_url"];
	} else {
		return resp.data["graphql"]["shortcode_media"]["display_url"]);
	};
};

let x = retrieve("https://www.instagram.com/p/B_-V0rilBwo/?igshid=ep45f75tyki9");
console.log(x);