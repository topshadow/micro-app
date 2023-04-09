/**
 * hello 函数
 */
function hello() {}
/**
 * 主服务
 */
let master = {
  hello
};



var index = {
    __proto__: null,
    master: master
};

var SubAppLayout;
(function (SubAppLayout) {
  SubAppLayout["fullscreen"] = "fullscreen";
  SubAppLayout["embed"] = "embed";
})(SubAppLayout || (SubAppLayout = {}));
class EventListener {}
/**消息中心状态 */
var EventBusStatus;
(function (EventBusStatus) {
  /**空闲 */
  EventBusStatus["free"] = "free";
  /** 处理中 */
  EventBusStatus["process"] = "process";
})(EventBusStatus || (EventBusStatus = {}));
let eventBus = /*#__PURE__*/new class EventBus {
  constructor() {
    this.status = EventBusStatus.free;
    this.processTasks = [];
    this.listeners = new Map();
    this.callbacks = new Map();
  }
  callTask(event, callback) {
    this.startTask(event);
    event.taskId = event.type + Date.now();
    let callbacks = this.callbacks.get(event.taskId);
    if (callbacks) {
      callbacks.push(callback);
    } else {
      this.callbacks.set(event.taskId, [callback]);
    }
    debugger;
    window.parent.postMessage(event, '*');
  }
  callMessage(event) {
    window.parent.postMessage(event, '*');
  }
  startTask(command) {
    this.status = EventBusStatus.process;
    this.processTasks.push(command);
    if (this.onStarTask) {
      this.onStarTask(command);
    }
  }
  finishTask(taskId) {
    let task = this.processTasks.find(t => t.taskId == taskId);
    let taskIndex = this.processTasks.findIndex(t => t.taskId == taskId);
    if (taskIndex > -1) this.processTasks.splice(taskIndex, 1);
    if (this.onFinishTask) {
      this.onFinishTask(task);
    }
    debugger;
    if (this.processTasks.length == 0) {
      this.status = EventBusStatus.free;
    }
  }
  startEventListener() {
    if (this.started) return;
    this.started = true;
    window.addEventListener('message', msg => {
      let taskId = msg.data.taskId;
      let listenerId = msg.data.listenerId;
      debugger;
      /**处理任务 */
      if (msg.data.command) {
        let callbacks = this.listeners.get(msg.data.command);
        if (callbacks) {
          debugger;
          callbacks.forEach(c => c.handle(msg.data));
          this.finishTask(taskId);
        }
        return;
      } else {
        let callbacks = this.callbacks.get(taskId);
        if (callbacks) {
          callbacks.forEach(c => c(msg.data));
        }
        this.finishTask(taskId);
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
  registerListener(eventType, listener) {
    let listeners = this.listeners.get(eventType);
    if (listeners) {
      listeners.push(listener);
    } else {
      this.listeners.set(eventType, [listener]);
    }
  }
}();
class CalendarEvent extends EventListener {
  constructor(handle) {
    super();
    this.listenerId = 'calendar' + Date.now();
    /**事件堆栈 */
    this.eventStack = [];
    this.handle = data => {
      this.data = data;
      handle(data);
    };
    if (!eventBus.started) {
      eventBus.startEventListener();
    }
    debugger;
    eventBus.registerListener('test', this);
  }
  emit(date) {
    // alert(JSON.stringify(this.data));
    debugger;
    window.frames[0].postMessage({
      date,
      taskId: this.data.taskId
    }, '*');
  }
  startListen() {}
}
class SettingEvent extends EventListener {
  constructor(handle) {
    super();
    this.listenerId = 'calendar' + Date.now();
    /**事件堆栈 */
    this.eventStack = [];
    this.handle = data => {
      this.data = data;
      handle(data);
    };
    if (!eventBus.started) {
      eventBus.startEventListener();
    }
    debugger;
    eventBus.registerListener('send-setting', this);
  }
  emit(date) {
    // alert(JSON.stringify(this.data));
    debugger;
    window.frames[0].postMessage({
      date,
      taskId: this.data.taskId
    }, '*');
  }
  startListen() {}
}

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
class AppSchell {
  constructor() {
    this.apps = [];
  }
  addApps(app_list) {
    this.apps.push(...app_list);
  }
  /** 获取并行加载app */
  loadParallel() {
    let parallelApps = this.apps.filter(app => app.loadMethod == LoadMethod.Parallel);
    return parallelApps;
  }
  /**
   * 获取预加载app
   */
  getPreloadApps() {
    let parallelApps = this.apps.filter(app => app.loadMethod == LoadMethod.Preload);
    return parallelApps;
  }
  /**
   * 获取惰性加载app
   * @returns
   */
  getInertLoadApps() {
    let parallelApps = this.apps.filter(app => app.loadMethod == LoadMethod.InertLoad);
    return parallelApps;
  }
  /**获取懒加载apps */
  getLazyLoadApps() {
    let parallelApps = this.apps.filter(app => app.loadMethod == LoadMethod.LazyLoad);
    return parallelApps;
  }
  /**
   * 移除apps
   * @param app_list
   */
  removeApps(...app_list) {
    app_list.forEach(app => {
      let indexOf = this.apps.findIndex(a => a.id == app.id);
      if (indexOf > -1) this.apps.splice(indexOf, 1);
    });
  }
  setMasterStatus(appStatus) {
    this.getMasterApp().loadStatus = appStatus;
  }
  setAppStatus(appId, loadStatus) {
    let app = this.apps.find(app => app.id == appId);
    if (app) {
      app.loadStatus = loadStatus;
    }
    debugger;
    if (this.onAppChange) {
      this.onAppChange(this.apps);
    }
  }
  getAppStatus(appId) {
    let app = this.apps.find(app => app.id == appId);
    return app ? app.loadStatus : null;
  }
  getMasterApp() {
    return this.apps.find(app => app.isMaster);
  }
}



var index$2 = {
    __proto__: null,
    get ShellStatus () { return ShellStatus; },
    AppSchell: AppSchell,
    get AppLoadStatus () { return AppLoadStatus; },
    get LoadMethod () { return LoadMethod; }
};

if (window['id'] == 'child') {
  let resultEl = /*#__PURE__*/document.getElementById('result');
  eventBus.startEventListener();
  let taskNumEl = /*#__PURE__*/document.getElementById('taskNum');
  let statusEl = /*#__PURE__*/document.getElementById('status');
  eventBus.onStarTask = data => {
    taskNumEl.value = eventBus.processTasks.length + '';
    statusEl.innerText = eventBus.status;
  };
  eventBus.onFinishTask = data => {
    taskNumEl.value = eventBus.processTasks.length + '';
    statusEl.innerText = eventBus.status;
  };
  window['child'] = {
    sendMessage: () => eventBus.callMessage({
      command: 'test',
      type: 'message'
    }),
    callTask: () => eventBus.callTask({
      command: 'test',
      type: 'task'
    }, data => {
      debugger;
      resultEl.innerText = data.date;
    })
  };
}

// import { AppSchell } from '../shell/index';
if (window['id'] == 'parent') {
  let statusEl = /*#__PURE__*/document.getElementById('status');
  let calenderEl = /*#__PURE__*/document.getElementById('calender');
  eventBus.startEventListener();
  eventBus.onStarTask = cmd => {
    statusEl.innerText = eventBus.status;
    alert('开始任务' + cmd.command);
  };
  // eventBus.startCallback();
  let eventListen = /*#__PURE__*/new CalendarEvent(_ => {
    calenderEl.value = '';
    calenderEl.placeholder = '显示日期';
  });
  // eventBus.registerListener('test', (_: any) => alert('command'));
  window['p'] = {
    backData: () => eventListen.emit(new Date(calenderEl.value)),
    removeListener: () => eventListen.data,
    displayEventData: () => alert(JSON.stringify(eventListen.data))
  };
}

if (window.name == 'shell-parent') {
  let status = /*#__PURE__*/document.getElementById('status');
  let child1_status = /*#__PURE__*/document.getElementById('child1_status');
  let app_num = /*#__PURE__*/document.getElementById('app_num');
  let app_finish_num = /*#__PURE__*/document.getElementById('app_finish_num');
  eventBus.startEventListener();
  new SettingEvent(data => alert(`setting`));
  let child1 = 'child1';
  let child2 = 'child2';
  let appShell = /*#__PURE__*/new AppSchell();
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
  appShell.onAppChange = apps => {
    debugger;
    child1_status.innerText = appShell.getAppStatus(child1);
    app_num.innerText = appShell.apps.length + '';
    app_finish_num.innerText = appShell.apps.filter(app => app.loadStatus == AppLoadStatus.Finished).length + '';
  };
  appShell.setMasterStatus(AppLoadStatus.Finished);
  status.innerText = AppLoadStatus.Finished;
  window['parent'] = {
    onChildLoad: appId => {
      appShell.setAppStatus(appId, AppLoadStatus.Finished);
    },
    addChild2: () => {
      let iframe = document.createElement('iframe');
      iframe.src = "http://localhost:3000/test/shell/child2.html";
      iframe.onload = () => {
        alert(`child2 load`);
        appShell.setAppStatus(child2, AppLoadStatus.Finished);
      };
      document.body.append(iframe);
    }
  };
}

if (window.name == 'shell-child1') {
  // alert('child1')
  eventBus.startEventListener();
  setTimeout(() => {
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
