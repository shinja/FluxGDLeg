
var Parse = require( "parse" ).Parse;
var EventEmitter = require( "events" ).EventEmitter;
var assign = require( "object-assign" );
var AppDispatcher = require( "../dispatcher/AppDispatcher" );
var AlbumConstants = require( "../constants/AlbumConstants" );
var AlbumActions = require( "../actions/AlbumActions" );

//Model & Collectoin
var Album = Parse.Object.extend( "album" );

var Albums = Parse.Collection.extend( {
    model: Album
} );

var _albums = new Albums();

//Debug
_albums.on( "all", function( e ) {
    console.log( "_albums events: ", e );
} );

var queryModelName = function( name ) {

    _albums.query = new Parse.Query( Album );
    _albums.query.startsWith( "model", name );

    //Using collection.fetch(),  _albums == collection
    _albums.fetch( {
        success: function( collection, res, options ) {
            AlbumActions.loaded( collection, res, options  );
        },
        error: function( collection, res, options ) {
            AlbumActions.loadError( collection, res, options );
        }
    } );
};

AppDispatcher.register( function( action ) {

    var text;

    switch ( action.actionType ) {

        case AlbumConstants.ALBUM_FILTER:
        text = action.text.trim();
        queryModelName( text );
        break;

        case AlbumConstants.LOAD_DONE:
        break;
    }
} );

module.exports = _albums;
