# 深浅拷贝

## 1. 使用 slice() 方法 (浅拷贝)

```js
let originalArray = [1, 2, 3, 4];
let clonedArray = originalArray.slice();
```

## 2. 使用 concat() 方法 (浅拷贝)

```js
let originalArray = [1, 2, 3, 4];
let clonedArray = [].concat(originalArray);
```

## 3. 使用展开运算符 (浅拷贝)

```js
let originalArray = [1, 2, 3, 4];
let clonedArray = [...originalArray];
```

## 4. 使用 Array.from() (浅拷贝)

```js
let originalArray = [1, 2, 3, 4];
let clonedArray = Array.from(originalArray);
```

## 5. 使用 lodash 的 clone(浅拷贝) 或 cloneDeep(深拷贝) 方法

```js
let _ = require('lodash');

let originalArray = [1, 2, 3, 4];
let shallowClonedArray = _.clone(originalArray);
let deepClonedArray = _.cloneDeep(originalArray);
```

## 6. 使用 JSON 序列化与反序列化 (适用于深拷贝)

```js
let originalArray = [{a: 1}, {b: 2}];
let clonedArray = JSON.parse(JSON.stringify(originalArray));
```

:::tip
#### 无法处理函数:
问题: JSON 序列化无法处理函数，因此如果对象中包含函数，使用 JSON 序列化后这些函数会丢失。
```js
let obj = {
  a: 1,
  b: function() { return 2; }
};
let copiedObj = JSON.parse(JSON.stringify(obj));
console.log(copiedObj.b); // 输出: undefined
```
:::

:::tip
#### 无法处理特殊对象类型:
问题: JSON 序列化会将 Date 对象转换为字符串，会完全忽略 undefined、NaN、Infinity 等值，还会丢失 RegExp、Set、Map 等对象类型。
```js
let obj = {
  date: new Date(),
  regex: /test/i,
  set: new Set([1, 2, 3]),
  map: new Map([[1, 'one'], [2, 'two']]),
  nan: NaN,
  infinity: Infinity,
  undefinedValue: undefined
};
let copiedObj = JSON.parse(JSON.stringify(obj));
/* 输出:
{
  "date": "2024-08-16T00:00:00.000Z",
  "regex": {},
  "set": {},
  "map": {},
  "nan": null,
  "infinity": null,
  "undefinedValue": undefined
}
*/
```
:::

:::tip
#### 循环引用问题
问题: 如果对象中存在循环引用（即对象的某个属性引用了对象本身），则 JSON.stringify() 会抛出错误，因为 JSON 格式不支持循环引用。
```js
let obj = {};
obj.self = obj;
// 这将会抛出错误: "TypeError: Converting circular structure to JSON"
let copiedObj = JSON.parse(JSON.stringify(obj));
```
:::

:::tip
#### 原型链信息丢失
问题: JSON 序列化只会保存对象的可枚举属性，并不会保留对象的原型链信息。因此，使用 JSON 序列化后，新对象将变成一个普通的对象，原对象的继承链信息将丢失。
```js
function MyClass() {
  this.a = 1;
}
MyClass.prototype.b = 2;

let obj = new MyClass();
let copiedObj = JSON.parse(JSON.stringify(obj));
console.log(copiedObj instanceof MyClass); // 输出: false
console.log(copiedObj.b); // 输出: undefined
```
:::


## 7. 使用 map() 方法（浅拷贝）

```js
let originalArray = [1, 2, 3, 4];
let clonedArray = originalArray.map(item => item);
```
