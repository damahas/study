const $ = new API("jb-lhtj");

function runSign() {
  $.http.post({
         url: 'https://c2-openapi.longfor.com/riyuehu-miniapp-service-prod/ryh/user/info',
        headers: {
            'Host': 'c2-openapi.longfor.com',
            'Content-Type': 'application/json',
            'encryptByDesData': '26C88FDA04935E8DA8413B44C0D2309A9B6070569D479A73E7D2F2B548DDB73E',
            'token': '556019ffc2bc422cb942e70d8a3ba502',
            'userkey': 'oAjtH44Fde3CISRD05z5_no4jqyg',
            'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.14(0x18000e2d) NetType/WIFI Language/zh_CN',
            'Accept-Language': 'zh-cn'
        },
        body: {"data":{"projectId":"B79E72A1-2A5C-E311-8D79-0050568001F7"}}
  }).then(res=>{
    console.log(res);
  });
}

runSign();
