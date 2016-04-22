/**
@license
Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
**/

require("./polymer-micro.js");

require("./src/mini/template.js");
require("./src/mini/ready.js");
require("./src/mini/shady.js");
require("./src/mini/shadow.js");
require("./src/mini/debouncer.js");


  Polymer.DomModule = document.createElement('dom-module');

  Polymer.Base._addFeature({

    _registerFeatures: function() {
      // identity
      this._prepIs();
      // shared behaviors
      this._prepBehaviors();
      // factory
      this._prepConstructor();
      // template
      this._prepTemplate();
      // dom encapsulation
      this._prepShady();
      // fast access to property info
      this._prepPropertyInfo();
    },

    _prepBehavior: function(b) {
      this._addHostAttributes(b.hostAttributes);
    },

    _initFeatures: function() {
      this._registerHost();
      if (this._template) {
        // manage local dom
        this._poolContent();
        // host stack
        this._beginHosting();
        // instantiate template
        this._stampTemplate();
        // host stack
        this._endHosting();
      }
      // install host attributes
      this._marshalHostAttributes();
      // setup debouncers
      this._setupDebouncers();
      // instance shared behaviors
      this._marshalBehaviors();
      // top-down initial distribution, configuration, & ready callback
      this._tryReady();
    },

    _marshalBehavior: function(b) {
    }

  });


