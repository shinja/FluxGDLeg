

var React = require('react');
var SearchBar = require("./SearchBar.react")
var Albums = require("./Albums.react")

var App = React.createClass({

    render: function() {
        return (
            <div>
                <SearchBar />
                <Albums />
            </div>
        );
    }
});

module.exports = App;
