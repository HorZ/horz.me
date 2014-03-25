/*
*
*/
exports.wechat = function(req, res){
  var values = {
    title: 'horz.me', 
    zone: 'test zone', 
    anyinfo: "fdsfdsfd"
  }

  res.send(req.query.echostr);

};