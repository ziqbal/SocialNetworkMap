


var page = require( 'webpage' ).create( ) ;

var testindex = 0, loadInProgress = false;

page.onConsoleMessage = function( msg , lineNum , sourceId ) {
  console.log('CONSOLE: ' + msg + ' (from line #' + lineNum + ' in "' + sourceId + '")');
};


page.settings.userAgent = 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2062.120 Safari/537.36' ;

page.customHeaders = {

  "Referer": "https://www.google.co.uk"

} ;

page.onLoadStarted = function( ) {


    page.customHeaders = { } ;
	loadInProgress = true;
	//console.log("load started");

} ;
 

page.onResourceError = function( resourceError ) {

    console.error( resourceError.url + ': ' + resourceError.errorString ) ;

} ;



page.onLoadFinished = function() {

	var currentUrl = page.evaluate( function( ) {
		return window.location.href ;
	} ) ;
	console.log( 'URL=' + currentUrl ) ;


	loadInProgress = false;

};

var steps = [

  function( ) {

    page.open( "https://192.168.1.100/_craft_/socialnetworkmap/phantomjs/wwwtest/" ) ;

  } ,

  function( ) {

    page.evaluate( function( ) {

      var arr = document.getElementsByClassName( "login-form" ) ;
      var i ;

      // console.log(arr.length );

      for( i = 0 ; i < arr.length ; i++ ) {

        if( arr[ i ].getAttribute( 'method' ) == "POST" ) {

          arr[ i ].elements[ "email" ].value = "eee@eee.com" ;
          arr[ i ].elements[ "password" ].value = "ppppp" ;
          return ;

        }

      }

    } ) ;

  } ,

  function( ) {

    page.evaluate(function() {

      var arr = document.getElementsByClassName( "login-form" ) ;
      var i ;

      // console.log( arr.length );

      for( i = 0 ; i < arr.length ; i++ ) {

        if( arr[ i ].getAttribute( 'method' ) == "POST" ) {

          arr[ i ].submit( ) ;

          return ;

        }

      }

    } ) ;

  } ,

  function( ) {

    // Output content of page to stdout after form has been submitted
    page.evaluate( function( ) {
      //console.log( document.querySelectorAll( 'html' )[0].outerHTML ) ;
    } ) ;

  }

] ;


interval = setInterval(function() {
  if (!loadInProgress && typeof steps[testindex] == "function") {
    console.log("step " + (testindex + 1));
    steps[testindex]();
    testindex++;
  }
  if (typeof steps[testindex] != "function") {
    //console.log("test complete!");
    phantom.exit();
  }
}, 50);

