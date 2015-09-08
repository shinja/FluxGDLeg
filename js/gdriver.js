

// Your Client ID can be retrieved from your project in the Google
// Developer Console, https://console.developers.google.com
var CLIENT_ID = "167657978569-pnafvjl6otsb8hi0pi658oek8r0ulfdj.apps.googleusercontent.com";

var SCOPES = [
    "https://www.googleapis.com/auth/drive"
];

var oauthToken;

/**
* Check if current user has authorized this application.
*/
function checkAuth() {
    gapi.auth.authorize(
        {
            "client_id": CLIENT_ID,
            "scope": SCOPES,
            "immediate": false
        },
        handleAuthResult );
    }

    /**
    * Handle response from authorization server.
    *
    * @param {Object} authResult Authorization result.
    */
    function handleAuthResult( authResult ) {

        var authorizeDiv = document.getElementById( "authorize-div" );
        if ( authResult && !authResult.error ) {

            // Hide auth UI, then load client library.
            oauthToken = authResult.access_token;
        }
    }

    /**
    * Append a pre element to the body containing the given message
    * as its text node.
    *
    * @param {string} message Text to be placed in pre element.
    */
    function appendPre( message ) {
        var pre = document.getElementById( "output" );
        var textContent = document.createTextNode( message + "\n" );
        pre.appendChild( textContent );
    }

    function onApiLoad() {

        gapi.load( "auth", { "callback": checkAuth } );

        gapi.client.load( "drive", "v2", function() {

            console.log( "driver library loaded" );
            var fileref = document.createElement( "script" );
            fileref.setAttribute( "type", "text/javascript" );
            fileref.setAttribute( "src", "js/bundle.js" );
            document.getElementsByTagName("head")[0].appendChild(fileref);
        } );
    }
