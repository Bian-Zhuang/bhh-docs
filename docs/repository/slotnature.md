# 插槽的本质(函数)
```
{
    default: function (xxx){},
    slot1: function (xxx){},
    slot2: function (xxx){},
}
```
```vue
<template>
  <Comp>
    <p>default slot</p>
    <p>default slot</p>
    <p>default slot</p>
    <p>default slot</p>
    <template #slot1>
      <p>slot1</p>
    </template>
    <template #slot2="{msg}">
      <p>slot2: {{ msg }}</p>
    </template>
  </Comp>
</template>

<script setup>
  import Comp from './Component/comp.js'
</script>
```
```js
// comp.js
export default {
  // 第一个参数是属性 第二个参数解构出来 表示传递过来的插槽
  setup(props, { slots }) {
    console.log(props, slots);
    const defaultVNoode = slots.default()
    const slot1VNoode = slots.slot1()
    const slot2VNoode = slots.slot2({ msg: '随便传什么' })
    return () => {
      return createElementVNode('div', null, [
        ...defaultVNoode,
        ...slot1VNoode,
        ...slot2VNoode
      ])
    }
  }
}
```
```vue
<template>
  <!--默认插槽-->
  <slot></slot>
  <!--具名插槽-->
  <slot name="slot1"></slot>
  <!--作用域插槽-->
  <slot name="slot2" mes="hello world"></slot>
</template>
```
