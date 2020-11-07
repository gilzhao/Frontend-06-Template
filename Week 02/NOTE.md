学习笔记


#### MouseEvent.button

A number representing a given button:
* Main button pressed, usually the left button or the un-initialized state
* Auxiliary button pressed, usually the wheel button or the middle button (if present)
* Secondary button pressed, usually the right button
* Fourth button, typically the Browser Back button
* Fifth button, typically the Browser Forward button
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/button


#### MouseEvent.which(Non-standard)

A number representing a given button:
* No button
* Left button
* Middle button (if present)
* Right button
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/which

#### 寻路问题的解法

寻路问题的解法，就是不断的把这些点的周围的上下左右的点加进集合里，并且在这个集合里面再次展开，再把它周围的点再去加进集合里面。

递归：深度优先搜索
寻路问题：适合广度优先搜索
集合：所有搜索算法的灵魂，所有搜索算法的差异部分就在 quque 集合里
queue：先进先出

#### JavaScript 数组：

天然队列
天然栈

队列：
push shift  广度优先
unshift pop

栈：
push pop    深度优先
shift unshift（不推荐）考虑到 JavaScript 数组的实现，性能会变低


深度优先搜索和广度优先搜索，用代码来表达，就只差在数据结构上

#### 通过异步编程

调试问题：可视化方法

async
await
