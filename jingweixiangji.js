/*
yuandaojingweixiangji Chain breaker
QX:
https:\/\/log-api\.pangolin-sdk-toutiao\.com\/service\/2\/app_log\/ url script-response-body https://raw.githubusercontent.com/layfu/filter/main/jingweixiangji.js
MITM = log-api.pangolin-sdk-toutiao.com
*/
const gettime = "/2/app_log/";
let obj = JSON.parse($response.body);

if ($request.url.indexOf(gettime) != -1) {
	obj.server_time = 1623937315;
}
$done({body: JSON.stringify(obj)});
