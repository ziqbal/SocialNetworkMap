<?php


$_CONFIG_ = array( ) ;

function _configBase( ) {

	date_default_timezone_set( 'UTC' ) ;

	_configBaseInit( ) ;
	
}

function _configBaseInit( ) {

	global $argv ;


	_configBaseQuery( "scriptdir" , dirname( __DIR__ ) ) ;

	_configBaseQuery( "pid" , getmypid( ) ) ;
	_configBaseQuery( "originalargs" , $argv ) ;
	_configBaseQuery( "targetdir" , $argv[ 1 ] ) ;
	_configBaseQuery( "hostname" , $argv[ 2 ] ) ;
	_configBaseQuery( "timestamp" , $argv[ 3 ] ) ;
	_configBaseQuery( "spid" , $argv[ 4 ] ) ;

	_configBaseQuery( "basename" , $argv[ 5 ] ) ;
	_configBaseQuery( "parentname" , basename( dirname( _configBaseQuery( "scriptdir" ) ) ) ) ;
	_configBaseQuery( "targetname" , basename( _configBaseQuery( "targetdir" ) ) ) ;

	_configBaseQuery( "cachelocaldir" , _configBaseQuery( "scriptdir" )."/_cache_" ) ;
	_configBaseQuery( "cacheparentdir" ,  _configBaseQuery( "scriptdir" )."/../_cache_"  ) ;

	_configBaseQuery( "cachetargetdir" ,  _configBaseQuery( "targetdir" )."/_cache_" )  ;

	_configBaseQuery( "locklocalpath" ,  _configBaseQuery( "cachelocaldir" )."/lock.tmp" )  ;

/*
	if( ! file_exists( _configBaseQuery( "locklocalpath" ) ) ) {

		file_put_contents( _configBaseQuery( "locklocalpath" ) , time()."\n" ) ;

	}
*/

	if( ! file_exists( _configBaseQuery( "cachetargetdir" ) ) ) {

		mkdir( _configBaseQuery( "cachetargetdir" ) ) ;
		chmod( _configBaseQuery( "cachetargetdir" ) , 0777 ) ;

	}		

	if( ! file_exists( _configBaseQuery( "cachelocaldir" ) ) ) {

		mkdir( _configBaseQuery( "cachelocaldir" ) ) ;
		chmod( _configBaseQuery( "cachelocaldir" ) , 0777 ) ;

	}

	if( ! file_exists( _configBaseQuery( "cacheparentdir" ) ) ) {

		mkdir( _configBaseQuery( "cacheparentdir" ) ) ;
		chmod( _configBaseQuery( "cacheparentdir" ) , 0777 ) ;

	}	

	_configBaseQuery( "cacheparentdir" ,  realpath( _configBaseQuery( "cacheparentdir" ) ) ) ;

}

function _configBaseDebug( ) {

	global $_CONFIG_ ;

	print_r( $_CONFIG_ ) ;

}

function _configBaseQuery(  ) {

	global $_CONFIG_ ;

	$args = func_get_args( ) ;

	if( count( $args ) == 1 ) {

		if( !isset( $_CONFIG_[ $args[ 0 ] ] ) ) {

			return( NULL ) ;

		} else {

			return( $_CONFIG_[ $args[ 0 ] ] ) ;

		}

	}

	$_CONFIG_[ $args[ 0 ]  ] = $args[ 1 ]  ;

} 

