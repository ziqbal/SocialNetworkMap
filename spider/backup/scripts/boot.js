


var page = require( 'webpage' ).create( ) ;

var testindex = 0, loadInProgress = false;

page.onConsoleMessage = function( msg , lineNum , sourceId ) {
  console.log('CONSOLE,,,' + msg );
};


page.settings.userAgent = 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2062.120 Safari/537.36' ;
//page.settings.javascriptEnabled = false ;
page.settings.loadImages = false ;

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

    // Output content of page to stdout after form has been submitted
    page.evaluate( function( ) {

    console.log("####");


	var matches = document.querySelectorAll(".profile-card");
	for( i = 0 ; i < matches.length ; i++ ) {

		//console.log(matches[ i ].innerHTML);

		var el1= matches[ i ].querySelectorAll("a");
		if(el1.length>0){
			console.log("LINK,,,"+el1[0].getAttribute( 'href' ));
			console.log("NAME,,,"+el1[1].innerHTML);
		}

		var el2 = matches[ i ].querySelectorAll("p");
		if(el2.length>0){
		console.log("ROLE,,,"+el2[0].innerHTML);
		}

		var el3 = matches[ i ].querySelectorAll("img");
		if(el3.length>0){
			if(el3[0].getAttribute( 'data-delayed-url' )===null){
				console.log("IMAGE,,,"+el3[0].getAttribute( 'src' ));
			}else{
				console.log("IMAGE,,,"+el3[0].getAttribute( 'data-delayed-url' ));

			}
		}
	}




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

