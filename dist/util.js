(function() {
    var util = {};

    function CreateXmlHttp() {
        var xhrobj = false;
        try {
            xhrobj = new ActiveXObject("Msxml2.XMLHTTP"); //ie msxml3.0+
        } catch (e) {
            try {
                xhrobj = new ActiveXObject("Microsoft.XMLHTTP"); //ie msxml 2.6
            } catch (e2) {
                xhrobj = false;
            }
        }
        if (!xhrobj && typeof XMLHttpRequest != 'undefined') { //firefox opera 8.0 safari
            xhrobj = new XMLHttpRequest();
        }
        return xhrobj;
    }

    var xhr = CreateXmlHttp();

    function Post(url, param, callback) {
        //1、设置请求方式、目标、是否异步
        //===============如果是Post方式，请按下面的进行设置====================
        //1.2 Post方式,如果是Post方式，还需要其他一些设置
        xhr.open("POST", url, true);
        //1.2.1设置HTTP的输出内容类型为：application/x-www-form-urlencoded
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        //1.2.2设置浏览器不使用缓存，服务器不从缓存中找，重新执行代码，而且服务器返回给浏览器的时候，告诉浏览器也不要保存缓存。
        xhr.setRequestHeader("If-Modified-Since", "0");

        //2、设置回调函数
        if (callback) {
            xhr.onreadystatechange = function() {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        var res = xhr.responseText; //获得服务器返回的字符串
                        callback(res);
                    }
                }
            };
        }

        //3、发送请求
        xhr.send(param || ''); //POST方式
    }


    function Get(url, callback) {
        //1、设置请求方式、目标、是否异步
        xhr.open("GET", url, true);
        //2、设置回调函数
        if (callback) {
            xhr.onreadystatechange = function() {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        var res = xhr.responseText; //获得服务器返回的字符串
                        callback(res);
                    }
                }
            };
        }
        //3、发送请求
        xhr.send(null);
    }

    util.xhr = xhr;
    util.get = Get;
    util.post = Post;

    // eval scripts from text (from mootools)
	function evalScripts(text){
	    var script, scripts;
	    scripts = [];
	    var regexp = /<script[^>]*>([\s\S]*?)<\/script>/gi;
	    while ((script = regexp.exec(text))) scripts.push(script[1]);
	    scripts = scripts.join('\n');
	 
	    if (scripts) (window.execScript) ? window.execScript(scripts) : window.setTimeout(scripts, 0);
	}
	util.evalScripts = evalScripts;
    window.util = util;
})(window);