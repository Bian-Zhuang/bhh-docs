# 属性读取方式

```js
const obj = {}

// [[GET]](obj,'x',obj)
obj.xxx;
// [[GET]](obj,x是不是symbol ? x : String(x),obj)
obj['xxx'];

obj[0] = 1;
obj['0'] = 2;
```
