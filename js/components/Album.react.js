
var React = require('react');
var mui = require('material-ui');

var injectTapEventPlugin = require("react-tap-event-plugin");
//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

var ThemeManager = new mui.Styles.ThemeManager();
var  Paper = mui.Paper;

var Album = React.createClass({

    //For material ui
    // Important!
      childContextTypes: {
        muiTheme: React.PropTypes.object
      },

      // Important!
      getChildContext: function() {
        return {
          muiTheme: ThemeManager.getCurrentTheme()
        };
    },

    getInitialState: function() {
        return {
            image: ""
        };
    },
    componentDidMount: function() {
        this._query();
    },
    render: function() {

        var album = this.props.album;
        console.log(album);

        // {album.get("model")}, {album.get("no")} {this.state.image.id}
        return (
            <Paper zDepth={3} rounded={true}
                style={{
                    float: 'left',
                    margin: '3px'
                }} >
                <img src={this.state.image.thumbnailLink} />
            </Paper>
        );
    },
    _query: function() {

        var request = gapi.client.drive.files.list( {
            "maxResults": 1,
            "q": "title = 'beautyleg-" + this.props.album.get("no") + "-0000.jpg'"
        } );

        request.execute( function( resp ) {
            var files = resp.items;
            console.log( files);
            if ( files && files.length > 0 ) {
                files[0].thumbnailLink = files[0].thumbnailLink.replace('s220', 's300');
                this.setState({image: files[0]});
            }
        }.bind(this) );
    }
});

module.exports = Album;
