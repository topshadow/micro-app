import { Plugin } from '../src/index.js';

alert('parent');
Plugin.event.registerListener('test', (msg) => alert(JSON.stringify('test')));
