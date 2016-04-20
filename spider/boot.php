<?php

include( "_functions_/boot-base.php" ) ;

_appBaseStartUp( ) ;

///////////////////////////////////////////////////////////////////////////////


_configBaseQuery( "broswerpath" , "/Users/zaf/Installed/phantomjs/phantomjs-2.1.1-macosx/bin/phantomjs" ) ;
_configBaseQuery( "broswerparameters" , "--ignore-ssl-errors=yes --ssl-protocol=any" ) ;

//_configBaseDebug( ) ;

sleep( 10 ) ;

///////////////////////////////////////////////////////////////////////////////

_appBaseShutDown( ) ;

