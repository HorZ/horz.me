
/*
 * GET home page.
 */
exports.test = function(req, res){
  var info = {};

  info['sessionID'] = req.sessionID;
  // info['req.params'] = req.params;
  // info['req.query'] = req.query;
  // info['req.route'] = req.route;
  // info['req.cookies'] = req.cookies;
  // info['req.get()'] = req.get();
  // info['req.accepts()'] = req.accepts();
  // info['req.accepted'] = req.accepted;
  // info['req.is()'] = req.is();
  // info['req.ip'] = req.ip;
  // info['req.ips'] = req.ips;
  // info['req.path'] = req.path;
  // info['req.host'] = req.host;
  info['req.fresh'] = req.fresh;
  info['req.stale'] = req.stale;
  info['req.xhr'] = req.xhr;
  info['req.protocal'] = req.protocal;
  info['req.subdomains'] = req.subdomains;
  info['req.originalUrl'] = req.originalUrl;

  res.locals = {
    title: 'horz.me', 
    zone: 'test zone', 
    anyinfo: JsonToString(info),
  }
  res.render('test', '');

};

/*
*
*/
exports.index = function(req, res){
  var values = {
    title: 'horz.me', 
    zone: 'test zone', 
    anyinfo: "fdsfdsfd"
  }

  res.render('index', values);

};

/*
* misc
*/
exports.bootstrap = function(req, res){
  var values = {
    title: 'horz.me', 
    zone: 'test zone', 
    anyinfo: ""
  }

  res.render('bootstrap', values);

};

function JsonToString(o) {    
    var arr = []; 
    var fmt = function(s) { 
        if (typeof s == 'object' && s != null) return JsonToString(s); 
        return /^(string|number)$/.test(typeof s) ? "\"" + s + "\"" : s; 
    } 
    for (var i in o) 
         arr.push("  \"" + i + "\": " + fmt(o[i])); 
    return "{\n" + arr.join(",\n") + "\n}"; 
} 