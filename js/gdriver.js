

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
            authorizeDiv.style.display = "none";
            oauthToken = authResult.access_token;
            // loadDriveApi();
        } else {
            // Show auth UI, allowing the user to initiate authorization by
            // clicking authorize button.
            authorizeDiv.style.display = "inline";
        }
    }

    /**
    * Load Drive API client library.
    */
    function loadDriveApi() {
        gapi.client.load( "drive", "v2", listFiles );
    }

    /**
    * Print files.
    */
    function listFiles() {

            //beautyleg folder id
            // "folderId": "0Bx4eBpnOrFyLfmlRb2FaRktYME10S184Wk5UQTR4WWJsNnpCMkUzVDJzZW1QUWVOVnFfa1U",

        var request = gapi.client.drive.files.list( {
            "maxResults": 10,
            "q": "title contains '0000'"
        } );

        request.execute( function( resp ) {
            appendPre( "Files:" );
            var files = resp.items;
            console.log( files );
            if ( files && files.length > 0 ) {
                for ( var i = 0; i < files.length; i++ ) {
                    var file = files[i];
                    appendPre( file.title + " (" + file.id + ")" );
                }
            } else {
                appendPre( "No files found." );
            }
        } );
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

        gapi.load('auth', {'callback': checkAuth});
        // gapi.client.load( "drive", "v2", listFiles );
        gapi.client.load( "drive", "v2", function() {
            console.log("driver library loaded");
        });
    }
