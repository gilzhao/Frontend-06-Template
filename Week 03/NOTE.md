学习笔记

## 四则运算

LL算法：从左到右扫描，从左到右规约的一个缩写

#### 词法定义
* TokenNumber：1、2、3、4、5、6、7、8、9、0 的组合
* Operator：+、-、*、/ 之一
* Whitespace：<SP>
* LineTerminator：<LF>、<CR>

#### 语法定义
加法和乘法有一定的优先级关系，所以要用 JavaScript 的产生式去定义它的加法和乘法运算。把加减乘除做成一个嵌套的结构。

加法是由左右两个乘法组成的，加法还可以进行连加；所以，加法是一个重复自身的序列。会有一个递归的产生式的结构。

递归结构：产生式中处理无限的列表的常用手法。

乘法
* 单独数字也认为是一种特殊的乘法，一个只有一项的乘法。
* 只有乘号，认为是一种特殊的加法，只有一项的加法。

MultiplicativeExpression，用乘号或者除号相连接的 Number 的序列

TerminalSymbol：<EOF>、<+>、<->、<Number>、<*>、</>。

```
<Expression>::=
    <AdditiveExpression><EOF>

<AdditiveExpression>::=
    <MultiplicativeExpression>
    |<AdditiveExpression><+><MultiplicativeExpression>
    |<AdditiveExpression><-><MultiplicativeExpression>

<MultiplicativeExpression>::=
    <Number>
    |<MultiplicativeExpression><*><Number>
    |<MultiplicativeExpression></><Number>
```
