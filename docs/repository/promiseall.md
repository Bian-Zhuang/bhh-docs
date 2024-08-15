# 手写Promise.all

```js
Promise.myAll = function (prams) {
    // prams不一定是数组 官方描述是任何可迭代对象 集合用size 数组用length 
    let res, rej;
    const p = new Promise((resolve, reject) => {
        res = resolve
        rej = reject
    });
    let i = 0;
    const result = []
    for (const pram of prams) {
        const index = i;
        i++;
        // 归一化 所有变成Promise
        // 传入拒绝的Promise 根据原本all的处理 返回的Promise也是拒绝的
        Promise.resolve(pram).then((data) => {
            // 1. 将完成的数据加入到最终结果
            result[index] = data
            // 2. 判断是否全部完成
            i--;
            if (i === 0) {
                res(result)
            }
        }, rej)
    }
    if (i === 0) {
        res([])
    }
    // 控制Promise的完成和拒绝
    // res();
    // rej();

    // 返回Promise
    return p
}

// 传入Promise多次被拒绝无需处理 状态一旦确定无法更改 
Promise.myAll([1,2,3,4]).then(res => {
    console.log(res);
}, (error) => {
    console.log(error);
})
```
