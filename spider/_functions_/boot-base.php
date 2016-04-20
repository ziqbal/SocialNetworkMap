<?php

include( "config-base.php" ) ;
include( "log-base.php" ) ;
include( "app-base.php" ) ;
include( "lock-base.php" ) ;

_bootBase( ) ;

function _bootBase( ) {

	_configBase( ) ;
	_logBase( ) ;
	_lockBase( ) ;
	_appBase( ) ;

}

