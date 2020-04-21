"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Authenticator =
/*#__PURE__*/
function () {
  function Authenticator() {
    _classCallCheck(this, Authenticator);

    this.isAuthenticated = false;
    this.users = [{
      username: "user1",
      password: "pass1"
    }, {
      username: "user2",
      password: "pass2"
    }];
  }

  _createClass(Authenticator, [{
    key: "authenticate",
    value: function authenticate(username, password, cb) {
      var _this = this;

      setTimeout(function () {
        var validUser = _this.users.find(function (u) {
          return u.username === username && u.password === password;
        });

        _this.isAuthenticated = validUser ? true : false;
        cb(_this.isAuthenticated);
      }, 100);
    }
  }, {
    key: "signout",
    value: function signout(cb) {
      this.isAuthenticated = false;
      setTimeout(cb, 100);
    }
  }]);

  return Authenticator;
}();

var _default = new Authenticator();

exports["default"] = _default;