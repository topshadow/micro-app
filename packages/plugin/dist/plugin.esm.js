/**
 * hello 函数
 */
function hello() {}
/**
 * 主服务
 */
var master = {
  hello: hello
};



var index = {
    __proto__: null,
    master: master
};

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}

var SubAppLayout;
(function (SubAppLayout) {
  SubAppLayout["fullscreen"] = "fullscreen";
  SubAppLayout["embed"] = "embed";
})(SubAppLayout || (SubAppLayout = {}));
var EventListener = function EventListener() {};
/**消息中心状态 */
var EventBusStatus;
(function (EventBusStatus) {
  /**空闲 */
  EventBusStatus["free"] = "free";
  /** 处理中 */
  EventBusStatus["process"] = "process";
})(EventBusStatus || (EventBusStatus = {}));
var eventBus = /*#__PURE__*/new ( /*#__PURE__*/function () {
  function EventBus() {
    this.status = EventBusStatus.free;
    this.processTasks = [];
    this.listeners = new Map();
    this.callbacks = new Map();
  }
  var _proto = EventBus.prototype;
  _proto.callTask = function callTask(event, callback) {
    this.startTask(event);
    event.taskId = event.type + Date.now();
    var callbacks = this.callbacks.get(event.taskId);
    if (callbacks) {
      callbacks.push(callback);
    } else {
      this.callbacks.set(event.taskId, [callback]);
    }
    debugger;
    window.parent.postMessage(event, '*');
  };
  _proto.callMessage = function callMessage(event) {
    window.parent.postMessage(event, '*');
  };
  _proto.startTask = function startTask(command) {
    this.status = EventBusStatus.process;
    this.processTasks.push(command);
    if (this.onStarTask) {
      this.onStarTask(command);
    }
  };
  _proto.finishTask = function finishTask(taskId) {
    var task = this.processTasks.find(function (t) {
      return t.taskId == taskId;
    });
    var taskIndex = this.processTasks.findIndex(function (t) {
      return t.taskId == taskId;
    });
    if (taskIndex > -1) this.processTasks.splice(taskIndex, 1);
    if (this.onFinishTask) {
      this.onFinishTask(task);
    }
    debugger;
    if (this.processTasks.length == 0) {
      this.status = EventBusStatus.free;
    }
  };
  _proto.startEventListener = function startEventListener() {
    var _this = this;
    if (this.started) return;
    this.started = true;
    window.addEventListener('message', function (msg) {
      var taskId = msg.data.taskId;
      var listenerId = msg.data.listenerId;
      debugger;
      /**处理任务 */
      if (msg.data.command) {
        var callbacks = _this.listeners.get(msg.data.command);
        if (callbacks) {
          debugger;
          callbacks.forEach(function (c) {
            return c.handle(msg.data);
          });
          _this.finishTask(taskId);
        }
        return;
      } else {
        var _callbacks = _this.callbacks.get(taskId);
        if (_callbacks) {
          _callbacks.forEach(function (c) {
            return c(msg.data);
          });
        }
        _this.finishTask(taskId);
      }
      if (listenerId) {
        alert(listenerId);
      }
    });
  }
  // startCallback() {
  //     window.addEventListener('message', (msg) => {
  //         debugger;
  //         let type = msg.data.command
  //         let callbacks = this.callbacks.get(type);
  //         if (callbacks) {
  //             callbacks.forEach(c => c(msg.data))
  //         }
  //     })
  // }
  ;
  _proto.registerListener = function registerListener(eventType, listener) {
    var listeners = this.listeners.get(eventType);
    if (listeners) {
      listeners.push(listener);
    } else {
      this.listeners.set(eventType, [listener]);
    }
  };
  return EventBus;
}())();
var CalendarEvent = /*#__PURE__*/function (_EventListener) {
  _inheritsLoose(CalendarEvent, _EventListener);
  function CalendarEvent(handle) {
    var _this2;
    _this2 = _EventListener.call(this) || this;
    _this2.listenerId = 'calendar' + Date.now();
    /**事件堆栈 */
    _this2.eventStack = [];
    _this2.handle = function (data) {
      _this2.data = data;
      handle(data);
    };
    if (!eventBus.started) {
      eventBus.startEventListener();
    }
    debugger;
    eventBus.registerListener('test', _assertThisInitialized(_this2));
    return _this2;
  }
  var _proto2 = CalendarEvent.prototype;
  _proto2.emit = function emit(date) {
    // alert(JSON.stringify(this.data));
    debugger;
    window.frames[0].postMessage({
      date: date,
      taskId: this.data.taskId
    }, '*');
  };
  _proto2.startListen = function startListen() {};
  return CalendarEvent;
}(EventListener);
var SettingEvent = /*#__PURE__*/function (_EventListener2) {
  _inheritsLoose(SettingEvent, _EventListener2);
  function SettingEvent(handle) {
    var _this3;
    _this3 = _EventListener2.call(this) || this;
    _this3.listenerId = 'calendar' + Date.now();
    /**事件堆栈 */
    _this3.eventStack = [];
    _this3.handle = function (data) {
      _this3.data = data;
      handle(data);
    };
    if (!eventBus.started) {
      eventBus.startEventListener();
    }
    debugger;
    eventBus.registerListener('send-setting', _assertThisInitialized(_this3));
    return _this3;
  }
  var _proto3 = SettingEvent.prototype;
  _proto3.emit = function emit(date) {
    // alert(JSON.stringify(this.data));
    debugger;
    window.frames[0].postMessage({
      date: date,
      taskId: this.data.taskId
    }, '*');
  };
  _proto3.startListen = function startListen() {};
  return SettingEvent;
}(EventListener);

var index$1 = {
    __proto__: null,
    get SubAppLayout () { return SubAppLayout; },
    EventListener: EventListener,
    get EventBusStatus () { return EventBusStatus; },
    eventBus: eventBus,
    CalendarEvent: CalendarEvent,
    SettingEvent: SettingEvent
};

var AppLoadStatus;
(function (AppLoadStatus) {
  AppLoadStatus["Loading"] = "Loading";
  AppLoadStatus["Finished"] = "Finished";
  AppLoadStatus["Waiting"] = "Waiting";
})(AppLoadStatus || (AppLoadStatus = {}));
var LoadMethod;
(function (LoadMethod) {
  /**并行加载,加载优先级最高,使用预渲染与主应用同时加载,不易同时过多应用采用进行并行加载,虽然没有网络并发数量限制,但是流量压力过大 */
  LoadMethod["Parallel"] = "Parallel";
  /** 预加载  采用预加载  在主应用加载完成后，才会进行加载内容 */
  LoadMethod["Preload"] = "Preload";
  /** 懒加载  除非主动激活,或是调用其服务/命令  才会进行加载 */
  LoadMethod["LazyLoad"] = "LazyLoad";
  /** 惰性加载 当应用加载的方式为惰性加载时,通常处于禁用状态 */
  LoadMethod["InertLoad"] = "InertLoad";
})(LoadMethod || (LoadMethod = {}));

var ShellStatus;
(function (ShellStatus) {
  ShellStatus["LoadingApp"] = "LoadingApp";
  ShellStatus["FinishLoading"] = "FinishLoading";
})(ShellStatus || (ShellStatus = {}));
/**
 *  应用管理 ,请在主应用中使用
 *
 * let appShell= new AppSchell();
 * 在ssr 中可以使用
 * appShell.addApps();
 *
 *
*/
var AppSchell = /*#__PURE__*/function () {
  function AppSchell() {
    this.apps = [];
  }
  var _proto = AppSchell.prototype;
  _proto.addApps = function addApps(app_list) {
    var _this$apps;
    (_this$apps = this.apps).push.apply(_this$apps, app_list);
  }
  /** 获取并行加载app */;
  _proto.loadParallel = function loadParallel() {
    var parallelApps = this.apps.filter(function (app) {
      return app.loadMethod == LoadMethod.Parallel;
    });
    return parallelApps;
  }
  /**
   * 获取预加载app
   */;
  _proto.getPreloadApps = function getPreloadApps() {
    var parallelApps = this.apps.filter(function (app) {
      return app.loadMethod == LoadMethod.Preload;
    });
    return parallelApps;
  }
  /**
   * 获取惰性加载app
   * @returns
   */;
  _proto.getInertLoadApps = function getInertLoadApps() {
    var parallelApps = this.apps.filter(function (app) {
      return app.loadMethod == LoadMethod.InertLoad;
    });
    return parallelApps;
  }
  /**获取懒加载apps */;
  _proto.getLazyLoadApps = function getLazyLoadApps() {
    var parallelApps = this.apps.filter(function (app) {
      return app.loadMethod == LoadMethod.LazyLoad;
    });
    return parallelApps;
  }
  /**
   * 移除apps
   * @param app_list
   */;
  _proto.removeApps = function removeApps() {
    var _this = this;
    for (var _len = arguments.length, app_list = new Array(_len), _key = 0; _key < _len; _key++) {
      app_list[_key] = arguments[_key];
    }
    app_list.forEach(function (app) {
      var indexOf = _this.apps.findIndex(function (a) {
        return a.id == app.id;
      });
      if (indexOf > -1) _this.apps.splice(indexOf, 1);
    });
  };
  _proto.setMasterStatus = function setMasterStatus(appStatus) {
    this.getMasterApp().loadStatus = appStatus;
  };
  _proto.setAppStatus = function setAppStatus(appId, loadStatus) {
    var app = this.apps.find(function (app) {
      return app.id == appId;
    });
    if (app) {
      app.loadStatus = loadStatus;
    }
    debugger;
    if (this.onAppChange) {
      this.onAppChange(this.apps);
    }
  };
  _proto.getAppStatus = function getAppStatus(appId) {
    var app = this.apps.find(function (app) {
      return app.id == appId;
    });
    return app ? app.loadStatus : null;
  };
  _proto.getMasterApp = function getMasterApp() {
    return this.apps.find(function (app) {
      return app.isMaster;
    });
  };
  return AppSchell;
}();



var index$2 = {
    __proto__: null,
    get ShellStatus () { return ShellStatus; },
    AppSchell: AppSchell,
    get AppLoadStatus () { return AppLoadStatus; },
    get LoadMethod () { return LoadMethod; }
};

if (window['id'] == 'child') {
  var resultEl = /*#__PURE__*/document.getElementById('result');
  eventBus.startEventListener();
  var taskNumEl = /*#__PURE__*/document.getElementById('taskNum');
  var statusEl = /*#__PURE__*/document.getElementById('status');
  eventBus.onStarTask = function (data) {
    taskNumEl.value = eventBus.processTasks.length + '';
    statusEl.innerText = eventBus.status;
  };
  eventBus.onFinishTask = function (data) {
    taskNumEl.value = eventBus.processTasks.length + '';
    statusEl.innerText = eventBus.status;
  };
  window['child'] = {
    sendMessage: function sendMessage() {
      return eventBus.callMessage({
        command: 'test',
        type: 'message'
      });
    },
    callTask: function callTask() {
      return eventBus.callTask({
        command: 'test',
        type: 'task'
      }, function (data) {
        debugger;
        resultEl.innerText = data.date;
      });
    }
  };
}

// import { AppSchell } from '../shell/index';
if (window['id'] == 'parent') {
  var statusEl$1 = /*#__PURE__*/document.getElementById('status');
  var calenderEl = /*#__PURE__*/document.getElementById('calender');
  eventBus.startEventListener();
  eventBus.onStarTask = function (cmd) {
    statusEl$1.innerText = eventBus.status;
    alert('开始任务' + cmd.command);
  };
  // eventBus.startCallback();
  var eventListen = /*#__PURE__*/new CalendarEvent(function (_) {
    calenderEl.value = '';
    calenderEl.placeholder = '显示日期';
  });
  // eventBus.registerListener('test', (_: any) => alert('command'));
  window['p'] = {
    backData: function backData() {
      return eventListen.emit(new Date(calenderEl.value));
    },
    removeListener: function removeListener() {
      return eventListen.data;
    },
    displayEventData: function displayEventData() {
      return alert(JSON.stringify(eventListen.data));
    }
  };
}

if (window.name == 'shell-parent') {
  var status = /*#__PURE__*/document.getElementById('status');
  var child1_status = /*#__PURE__*/document.getElementById('child1_status');
  var app_num = /*#__PURE__*/document.getElementById('app_num');
  var app_finish_num = /*#__PURE__*/document.getElementById('app_finish_num');
  eventBus.startEventListener();
  new SettingEvent(function (data) {
    return alert("setting");
  });
  var child1 = 'child1';
  var child2 = 'child2';
  var appShell = /*#__PURE__*/new AppSchell();
  appShell.addApps([{
    id: 'master',
    url: 'http://localhost:3000/test/shell/parent.html',
    loadMethod: LoadMethod.Parallel,
    isMaster: true
  }, {
    id: 'child1',
    url: 'http://localhost:3000/test/shell/child1.html',
    loadMethod: LoadMethod.Preload
  }, {
    id: 'child2',
    url: 'http://localhost:3000/test/shell/child2.html',
    loadMethod: LoadMethod.LazyLoad
  }]);
  appShell.onAppChange = function (apps) {
    debugger;
    child1_status.innerText = appShell.getAppStatus(child1);
    app_num.innerText = appShell.apps.length + '';
    app_finish_num.innerText = appShell.apps.filter(function (app) {
      return app.loadStatus == AppLoadStatus.Finished;
    }).length + '';
  };
  appShell.setMasterStatus(AppLoadStatus.Finished);
  status.innerText = AppLoadStatus.Finished;
  window['parent'] = {
    onChildLoad: function onChildLoad(appId) {
      appShell.setAppStatus(appId, AppLoadStatus.Finished);
    },
    addChild2: function addChild2() {
      var iframe = document.createElement('iframe');
      iframe.src = "http://localhost:3000/test/shell/child2.html";
      iframe.onload = function () {
        alert("child2 load");
        appShell.setAppStatus(child2, AppLoadStatus.Finished);
      };
      document.body.append(iframe);
    }
  };
}

if (window.name == 'shell-child1') {
  // alert('child1')
  eventBus.startEventListener();
  setTimeout(function () {
    eventBus.callMessage({
      command: 'send-setting',
      type: 'message'
    });
  }, 1000);
}



var index$3 = {
    __proto__: null
};

export { index as ServiceInvoke, index$1 as event, index$2 as shell, index$3 as test };
//# sourceMappingURL=plugin.esm.js.map
