学习笔记

执行动画的三种方式

1. setInterval

```
setInterval(()=> {}, 16)
```

2. setTimeout

```
let tick = () => {
    setTimeout(tick, 16)
}
```

3. RAF

```
let tick = () => {
    requestAnimationFrame(tick)
}
```

建议用 tick，因为 setInterval 可能会因为一些原因造成积压。
