/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

var Parse = require('parse').Parse;
var React = require('react');
var AlbumApp = require('./components/AlbumApp.react');

// Initialize Parse with your Parse application javascript keys
Parse.initialize( "0xLZ0FvupNbg1rDPslgyN7jNt9MOS6oUTUMO34vu",
"oxDwaNIkgvfkzyN4WhcCtlavPF7lwhY6IyaClQeV" );

React.render(
    <AlbumApp />,
    document.getElementById('app')
);
