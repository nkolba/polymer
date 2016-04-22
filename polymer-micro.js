/**
@license
Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
**/
require("./src/polymer-lib.js");
require("./src/micro/tag.js");
require("./src/micro/behaviors.js");
require("./src/micro/extends.js");
require("./src/micro/constructor.js");
require("./src/micro/properties.js");
require("./src/micro/attributes.js");

  Polymer.version = 'master';

  Polymer.Base._addFeature({

    _registerFeatures: function() {
      // identity
      this._prepIs();
      // shared behaviors
      this._prepBehaviors();
      // factory
      this._prepConstructor();
      // fast access to property info
      this._prepPropertyInfo();
    },

    _prepBehavior: function(b) {
      this._addHostAttributes(b.hostAttributes);
    },

    _marshalBehavior: function(b) {
    },

    _initFeatures: function() {
      // install host attributes
      this._marshalHostAttributes();
      // acquire behaviors
      this._marshalBehaviors();
    }

  });



