
var AppDispatcher = require( "../dispatcher/AppDispatcher" );
var AlbumConstants = require( "../constants/AlbumConstants" );

var AlbumActions  = {

    filter: function( search ) {

        AppDispatcher.dispatch( {
            actionType: AlbumConstants.ALBUM_FILTER,
            text: search
        } );
    },
    loaded: function( collection, res, options ) {

        AppDispatcher.dispatch( {
            actionType: AlbumConstants.LOAD_DONE,
            collection: collection,
            res: res,
            options: options
        } );
    },
    loadError: function( collection, res, options ) {

    AppDispatcher.dispatch( {
            actionType: AlbumConstants.LOAD_ERROR,
            collection: collection,
            res: res,
            options: options
        } );
    }
};

module.exports = AlbumActions;
