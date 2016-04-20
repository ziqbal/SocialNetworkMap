<?php

function _appBase( ) {


}


function _appBaseStartUp( ) {

	_logBaseWrite( date( 'l jS \of F Y h:i:s A' ) , "BOOTUP" ) ;

	if( _lockBaseLocalExists( ) ) {

		_logBaseWrite( " Lock Local Exists! Exit!" ) ;
		exit( 1 ) ;

	}

	_lockBaseLocalCreate( ) ;

}

function _appBaseShutDown( ) {
	
	_lockBaseLocalRemove( ) ;

	_logBaseWrite( date( 'l jS \of F Y h:i:s A' ) , "BOOTDOWN" ) ;

}

	