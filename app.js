
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var wechat = require('./routes/wechat');
var http = require('http');
var path = require('path');

var app = express();

app.engine('html', require('hogan-express'));
// app.enable('view cache');

// all environments
app.set('port', process.env.PORT || 80);

//set view engine
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

//set app level partials
var site_partials = {
	site_header_css:  'site_header_css',
	site_header: 'site_header',
	site_footer: 'site_footer',
	site_aside:  'site_aside'
}
app.set('partials', site_partials);


app.use(express.compress());
app.use(express.favicon(path.join(__dirname, 'public/images/favicon.ico')));
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public'), { maxAge: 31557600000 }));

// Handle 404
app.use(function(req, res) {
  res.status(404);
  res.render('404.html');
});

// Handle 500
app.use(function(error, req, res, next) {
  res.status(500);
  res.render('500.html');
});

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/wechat', wechat.wechat);
app.get('/whatsup', routes.index);
app.get('/bio', routes.index);
app.get('/about', routes.index);
app.get('/test', routes.test);
app.get('/about.html', routes.static_page);
app.get('/whatsup.html', routes.static_page);
app.get('/bio.html', routes.static_page);
app.get('/baidumap.html', routes.static_page);
// app.get('/bootstrap', routes.bootstrap);
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
