# 保持元素宽高比

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    .item {
      width: 50%;
      background-color: red;
      margin: 0 auto;
      /* height: 300px; */
      /* 考虑兼容性 */
      /* aspect-ratio: 4 / 3; */
    }

    .inner {
      width: 100%;
      /* 重点 */
      padding-top: 75%;
      height: 0;
      position: relative;
    }

    .container {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-color: black;
    }
  </style>
</head>

<body>
  <div class="item">
    <div class="inner">
      <div class="container"></div>
    </div>
  </div>
</body>

</html>
```
