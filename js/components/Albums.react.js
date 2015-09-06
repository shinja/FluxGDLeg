
var React = require('react');
var Album = require("./Album.react");
var AlbumStore = require("../stores/AlbumStore");

var Albums = React.createClass({

    getInitialState: function() {
        return {
            albums: AlbumStore
        };
    },
    componentDidMount: function() {

        console.log("componentDidMount", this.state.albums);
        //register albums reset callback, update while store changed.
        this.state.albums.on("reset", function(collection, options) {
            this.forceUpdate();
        }.bind(this));
    },
    componentWillUnmount: function() {
        this.state.albums.off();
    },
    render:  function() {

        var albums = this.state.albums.map(function (item) {
            return <Album key={item.cid} album={item} />
        });

        return (
            <div style={{
                    flex: 1,
                    width: '80%'
                }} >
                {albums}
            </div>
        );
    }
});

module.exports = Albums;
