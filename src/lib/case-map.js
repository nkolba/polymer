/**
@license
Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
**/

  Polymer.CaseMap = {

    _caseMap: {},
    _rx: {
      dashToCamel: /-[a-z]/g,
      camelToDash: /([A-Z])/g
    },

    dashToCamelCase: function(dash) {
      return this._caseMap[dash] || (
        this._caseMap[dash] = dash.indexOf('-') < 0 ? dash : dash.replace(this._rx.dashToCamel,
          function(m) {
            return m[1].toUpperCase();
          }
        )
      );
    },

    camelToDashCase: function(camel) {
      return this._caseMap[camel] || (
        this._caseMap[camel] = camel.replace(this._rx.camelToDash, '-$1').toLowerCase()
      );
    }

  };
