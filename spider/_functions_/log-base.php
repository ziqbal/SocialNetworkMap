<?php


function _logBase( ) {


}

function _logBaseWrite( $msg , $key = 'DEBUG' ) {


	if( is_array( $msg ) ) {

		$msg = "ARRAYSTART\n".print_r( $msg , true ) ;
		
	}

	$lid = _configBaseQuery( "basename" ).'-'._configBaseQuery( "parentname" ).'-'._configBaseQuery( "targetname" ) ;

	$msg = _configBaseQuery( "spid" )."-"._configBaseQuery( "pid" ).",,,$lid,,,$key,,,".$msg;

	file_put_contents( "/tmp/"._configBaseQuery( "basename" ).".log" , "$msg\n" , FILE_APPEND | LOCK_EX ) ;

}
