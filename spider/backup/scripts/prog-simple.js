


var page = require( 'webpage' ).create( ) ;

var testindex = 0, loadInProgress = false;

page.onConsoleMessage = function( msg , lineNum , sourceId ) {
  console.log('CONSOLE: ' + msg + ' (from line #' + lineNum + ' in "' + sourceId + '")');
};


page.settings.userAgent = 'ZMozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2062.120 Safari/537.36' ;

page.customHeaders = {

  "Referer": "https://www.google.co.uk"

} ;

page.onLoadStarted = function( ) {

    page.customHeaders = { } ;

} ;
 
page.open( 'https://192.168.1.100/_craft_/socialnetworkmap/phantomjs/wwwtest/' , function( status ) {

  console.log( "Status: " + status ) ;

  if( status === "success" ) {

    	page.render( 'example.png' ) ;

  }

  phantom.exit( ) ;

} ) ;


page.onResourceError = function( resourceError ) {

    console.error( resourceError.url + ': ' + resourceError.errorString ) ;

} ;