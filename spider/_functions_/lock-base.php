<?php

function _lockBase( ) {

}

function _lockBaseLocalExists( ) {

	if( file_exists( _configBaseQuery( "locklocalpath" ) ) ) {

		return( true ) ;
		
	}

	return( false ) ;

}

function _lockBaseLocalCreate( ) {

	$lid = _configBaseQuery( "spid" )."-"._configBaseQuery( "pid" )."-"._configBaseQuery( "basename" ).'-'._configBaseQuery( "parentname" ).'-'._configBaseQuery( "targetname" ) ;
	file_put_contents( _configBaseQuery( "locklocalpath" ) , "$lid\n" , FILE_APPEND | LOCK_EX ) ;
	chmod( _configBaseQuery( "locklocalpath" ) , 0777 ) ;

}

function _lockBaseLocalRemove( ) {

	unlink( _configBaseQuery( "locklocalpath" ) ) ;

}
