# 倾斜按钮
```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    .btn {
      width: 200px;
      height: 100px;
      line-height: 100px;
      text-align: center;
      margin: 100px auto;
      font-size: 18px;
      border-radius: 15px 0 15px 0;
      position: relative;
      background: cornflowerblue;
      /* 倾斜 */
      transform: skew(-17deg);
    }

    .btn::before {
      content: '';
      position: absolute;
      width: 20px;
      height: 20px;
      bottom: 0;
      left: -20px;
      background-color: red;
      background: radial-gradient(circle at 0 0,
          transparent 20px,
          cornflowerblue 21px);
    }

    .btn::after {
      content: '';
      position: absolute;
      width: 20px;
      height: 20px;
      top: 0;
      right: -20px;
      background-color: red;
      background: radial-gradient(circle at 100% 100%,
          transparent 20px,
          cornflowerblue 21px);
    }
  </style>
</head>

<body>
  <div class="btn">
    <span>倾斜按钮</span>
  </div>
</body>

</html>
```
