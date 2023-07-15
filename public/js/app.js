"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var root = ReactDOM.createRoot(document.getElementById("root"));
var TodoApp = /*#__PURE__*/function (_React$Component) {
  _inherits(TodoApp, _React$Component);
  var _super = _createSuper(TodoApp);
  function TodoApp(props) {
    var _this;
    _classCallCheck(this, TodoApp);
    _this = _super.call(this, props);
    _this.clearItems = _this.clearItems.bind(_assertThisInitialized(_this));
    _this.addItem = _this.addItem.bind(_assertThisInitialized(_this));
    _this.deleteItem = _this.deleteItem.bind(_assertThisInitialized(_this));
    _this.state = {
      items: ["task 1", "task 2"]
    };
    return _this;
  }
  _createClass(TodoApp, [{
    key: "clearItems",
    value: function clearItems() {
      this.setState({
        items: []
      });
    }
  }, {
    key: "deleteItem",
    value: function deleteItem(item) {
      // console.log(item);
      this.setState(function (prevState) {
        var arr = prevState.items.filter(function (i) {
          return item != i;
        });
        //  console.log(arr+ " :trt9");
        return {
          items: arr
        };
      });
    }
  }, {
    key: "addItem",
    value: function addItem(item) {
      if (!item) {
        return "Enter the element you want to add.";
      } else if (this.state.items.indexOf(item) > -1) {
        return "The element you want to add already exists.";
      }
      this.setState(function (prevState) {
        return {
          items: prevState.items.concat(item)
        };

        // console.log(prevState);
      });

      // console.log(item);
    }
  }, {
    key: "render",
    value: function render() {
      var data = {
        title: "Todo App",
        description: "iyi telefonveff"
      };
      return /*#__PURE__*/React.createElement("div", {
        className: "container my-2"
      }, /*#__PURE__*/React.createElement("div", {
        className: "card"
      }, /*#__PURE__*/React.createElement("div", {
        className: "card-header"
      }, /*#__PURE__*/React.createElement(Header, {
        title: data.title
        // description={data.description}
        // gthh="hhgjgkj 1"
      })), /*#__PURE__*/React.createElement("div", {
        className: "card-body"
      }, /*#__PURE__*/React.createElement(TodoList, {
        tasks: this.state.items,
        clear: this.clearItems,
        deleteItem: this.deleteItem
      })), /*#__PURE__*/React.createElement("div", {
        className: "card-footer"
      }, /*#__PURE__*/React.createElement(NewItem, {
        addItem: this.addItem
      }))));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log("component didmount oldu");
      var json_obj = localStorage.getItem("items");
      var items = JSON.parse(json_obj);
      if (items) {
        this.setState({
          items: items
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.items.length != this.state.items.length) {
        var json_str = JSON.stringify(this.state.items);
        localStorage.setItem("items", json_str);
      }

      // const json_str = JSON.stringify(this.state.items);
      // console.log(json_str);
      //   localStorage.setItem("items",json_str);
      console.log("TodoApp component güncellendi.");
    }
  }]);
  return TodoApp;
}(React.Component);
var Header = function Header(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    className: "h3"
  }, props.title));
};
var TodoList = function TodoList(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("ul", {
    className: "list-group"
  }, props.tasks.map(function (task, index) {
    return /*#__PURE__*/React.createElement(TodoItem, {
      key: index,
      task: task,
      deleteItem: props.deleteItem
    });
  })), /*#__PURE__*/React.createElement("p", null, props.tasks.length > 0 ? /*#__PURE__*/React.createElement("button", {
    className: "btn btn-outline-danger mt-2 float-end",
    onClick: props.clear
  }, "Clear") : /*#__PURE__*/React.createElement("div", {
    className: "alert alert-warning"
  }, "Pls, add a task ")));
};
var TodoItem = function TodoItem(props) {
  // console.log("Todoıtem");
  return /*#__PURE__*/React.createElement("li", {
    className: "list-group-item"
  }, props.task, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-danger btn-sm float-end",
    onClick: function onClick() {
      props.deleteItem(props.task);
    }
  }, "x"));
};
var NewItem = /*#__PURE__*/function (_React$Component2) {
  _inherits(NewItem, _React$Component2);
  var _super2 = _createSuper(NewItem);
  function NewItem(props) {
    var _this2;
    _classCallCheck(this, NewItem);
    _this2 = _super2.call(this, props);
    _this2.onFormSubmit = _this2.onFormSubmit.bind(_assertThisInitialized(_this2));
    _this2.state = {
      error: ""
    };
    return _this2;
  }
  _createClass(NewItem, [{
    key: "onFormSubmit",
    value: function onFormSubmit(e) {
      e.preventDefault();
      var item = e.target.form.txtItem.value;
      e.target.form.txtItem.value = "";
      var error = this.props.addItem(item);
      this.setState({
        error: error
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, this.state.error && /*#__PURE__*/React.createElement("p", null, this.state.error), /*#__PURE__*/React.createElement("form", null, /*#__PURE__*/React.createElement("div", {
        className: "input-group"
      }, /*#__PURE__*/React.createElement("input", {
        className: "form-control",
        type: "text",
        name: "txtItem"
      }), /*#__PURE__*/React.createElement("button", {
        className: "btn btn-primary",
        type: "submit",
        onClick: this.onFormSubmit
      }, "Add"))));
    }
  }]);
  return NewItem;
}(React.Component);
root.render( /*#__PURE__*/React.createElement(TodoApp, null));