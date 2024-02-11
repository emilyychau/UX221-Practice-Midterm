<?php
// Needed because gethostbyname( 'wordpress.org' ) returns
    // a private network IP address for some reason.
    add_filter( 'allowed_redirect_hosts', function( $deprecated = '' ) {
        return array(
            'wordpress.org',
            'api.wordpress.org',
            'downloads.wordpress.org',
        );
    } );