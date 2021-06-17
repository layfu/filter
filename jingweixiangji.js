/*
yuandaojingweixiangji Chain breaker
QX:
https:\/\/toblog\.ctobsnssdk\.com\/service\/2\/app_log\/ url script-response-body https://raw.githubusercontent.com/layfu/filter/main/jingweixiangji.js
MITM = toblog.ctobsnssdk.com
*/
var body = $response.body;
        var obj = JSON.parse(body);
	obj.server_time = 1623937315;
$done({body: JSON.stringify(obj)});
