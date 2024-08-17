# Web Worker

## 是什么?

Web Worker 是一种浏览器提供的 API，用于在后台线程中运行 JavaScript 代码，而不会阻塞主线程（即用户界面线程）。这使得 Web
应用能够执行耗时的计算或处理大量数据而不会影响页面的响应能力。

## 用途优点

1. **并行计算**： Web Worker 提供了一个在后台线程中执行 JavaScript 代码的环境，可以在这个环境中进行并行计算，提高页面性能和响应速度。
2. **执行耗时任务**：对于需要较长时间来完成的任务，比如大量数据处理、复杂算法运算、图片处理等，可以将这些任务放在 Web Worker
   中执行，避免阻塞渲染线程。
3. **提高用户体验**：通过将一些耗时的操作放在 Web Worker 中执行，可以提高页面的响应速度和用户体验，使用户感受到页面更加流畅。
4. **并发处理**：使用多个 Web Worker 实例可以实现更高级的并发处理，从而更有效地利用多核 CPU

---
:::tip

1. **无法访问 DOM**：Web Worker 运行在独立的线程中，无法直接访问 DOM 和一些浏览器 API，因此主要用于处理纯粹的计算任务和网络请求。
2. **通信开销**：由于 Web Worker 与主线程是隔离的，它们之间的通信需要通过消息传递，因此可能会存在一定的通信开销。
3. **内存消耗**：每个 Web Worker 都会占用一定的内存，如果过多地创建 Web Worker，可能会导致内存消耗过大。
   :::

## 示例

```js
// main.js
const worker = new Worker('worker.js');

// 接受 Worker 中返回的消息
worker.onmessage = function (event) {
    console.log('Worker返回的数据:', event.data);
};
// 监听 Worker 中的错误
worker.onerror = function (event) {
    console.error('Worker返回的错误', event.message);
    // 可以在这里进行错误处理，比如显示错误信息或重新启动 Worker
};

const largeArray = new Array(1000000).fill(1);
worker.postMessage(largeArray); // 向 worker 线程发送消息，对应 worker 线程中的 event.data
```

```js
// worker.js
// 引入外部函数
importScripts('https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js');

// 接受消息
self.onmessage = function (event) {
    // 处理复杂的计算或者耗时的业务逻辑
    const data = event.data;
    // 模拟错误
    // throw new Error('错误信息')

    // 正常情况下会返回消息
    let result = _.map(data, item => item * 2);
    postMessage(result); // 向主线程发送消息
};
```

|   事件    |          描述           |
|:-------:|:---------------------:|
| message | 当 Worker 接收到主线程的消息时触发 |
|  error  |   当worker内部出现错误时触发    |

|    方法     |      描述       |
|:---------:|:-------------:|
| terminate | 终止 Web Worker |

	
	
	

