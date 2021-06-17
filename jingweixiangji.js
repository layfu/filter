/*
yuandaojingweixiangji Chain breaker
QX:
https:\/\/toblog\.ctobsnssdk\.com\/service\/2\/app_log\/ url script-response-body https://raw.githubusercontent.com/layfu/filter/main/jingweixiangji.js
MITM = toblog.ctobsnssdk.com
*/
const gettime = "/2/app_log/";
var body = $response.body;

if ($request.url.indexOf(gettime) != -1) {
        var obj = JSON.parse(body);
	obj.server_time = 1623937315;
}
$done({body: JSON.stringify(obj)});
