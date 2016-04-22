/**
@license
Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
**/

require("./polymer-mini.js");

require("./src/standard/annotations.js");
require("./src/standard/events.js");
require("./src/standard/gestures.js");
require("./src/standard/utils.js");
require("./src/standard/effectBuilder.js");
require("./src/standard/configure.js");
require("./src/standard/notify-path.js");
require("./src/standard/resolveUrl.js");
require("./src/standard/styling.js");
require("./src/standard/x-styling.js");


  Polymer.Base._addFeature({

    _registerFeatures: function() {
      // identity
      this._prepIs();
      // factory
      this._prepConstructor();
      // styles
      this._prepStyles();
    },

    _finishRegisterFeatures: function() {
      // template
      this._prepTemplate();
      // style shimming
      this._prepShimStyles();
      // template markup
      this._prepAnnotations();
      // accessors
      this._prepEffects();
      // shared behaviors
      this._prepBehaviors();
      // fast access to property info
      this._prepPropertyInfo();
      // accessors part 2
      this._prepBindings();
      // dom encapsulation
      this._prepShady();
    },

    _prepBehavior: function(b) {
      this._addPropertyEffects(b.properties);
      this._addComplexObserverEffects(b.observers);
      this._addHostAttributes(b.hostAttributes);
    },

    _initFeatures: function() {
      // setup gestures
      this._setupGestures();
      // manage configuration
      this._setupConfigure();
      // setup style properties
      this._setupStyleProperties();
      // setup debouncers
      this._setupDebouncers();
      // setup shady
      this._setupShady();
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
        // concretize template references
        this._marshalAnnotationReferences();
      }
      // concretize effects on instance
      this._marshalInstanceEffects();
      // acquire instance behaviors
      this._marshalBehaviors();
      /*
      TODO(sorvell): It's *slightly() more efficient to marshal attributes prior 
      to installing hostAttributes, but then hostAttributes must be separately
      funneled to configure, which is cumbersome.
      Since this delta seems hard to measure we will not bother atm.
      */
      // install host attributes
      this._marshalHostAttributes();
      // acquire initial instance attribute values
      this._marshalAttributes();
      // top-down initial distribution, configuration, & ready callback
      this._tryReady();
    },

    _marshalBehavior: function(b) {
      // establish listeners on instance
      if (b.listeners) {
        this._listenListeners(b.listeners);
      }
    }

  });


require("./src/lib/custom-style.js");
require("./src/lib/template/dom-template.js");
require("./src/lib/template/dom-repeat.js");
require("./src/lib/template/array-selector.js");
require("./src/lib/template/dom-if.js");
require("./src/lib/template/dom-bind.js");
