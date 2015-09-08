

var React = require('react');
var mui = require('material-ui');
var AlbumActions = require('../actions/AlbumActions');

var injectTapEventPlugin = require("react-tap-event-plugin");
//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

var ThemeManager = new mui.Styles.ThemeManager();
var  TextField = mui.TextField;

var SearchBar = React.createClass({

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
            value: "Chu"
        };
    },

    componentDidMount: function() {
        AlbumActions.filter(this.state.value);
    },
    render: function() {
        return (
            <TextField
                hintText="search model..."
                defaultValue={this.state.value}
                onChange={this._onChange} />
        );
    },

    _onChange: function(e) {
        AlbumActions.filter(e.target.value);
    }
});

module.exports = SearchBar;
