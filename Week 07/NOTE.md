学习笔记

以下优先级逐级降低
### member expression
1. a.b
2. a[b]
3. foo`string`
4. super.b
5. spuer['b']
6. new.target
7. new Foo()

### call expression
call 表达式后面的 member expression 会降级为 call expression
1. foo()
2. super()
3. foo()['b']
4. foo().b
5. foo()`abc`

## 语句

### 运行时
Completion Record：记录语句的完成状态

### 简单语句
	ExpressionStatement
	EmptyStatement
	DubuggerStatement
	ThrowStatement
	CountinueStatement
	BreakStatement
	ReturnStatement

### 复合语句
	BlockStatement，type:normal
	IfStatement
	SwitchStatement
	IterationStatement，let 声明的域 for语句会产生独立的作用域，type: break 、continue，target:label
	WithStatement
	LabeledStatement，多层循环时可以调到指定的label循环
	TryStatement，type:return，target:label，try 里return了finally还是会执行

### 声明
	FunctionDeclaration
	GeneratorDeclaration
	AsyncFunctionDeclaration
	AsyncGeneratorDeclaration
	VariableStatement
	ClassDeclaration
	LexicalDeclaration

#### 预处理
`var let const class`声明的变量都存在经由引擎预处理导致的提升现象 ，只不过非`var`的声明会使得声明前调用抛错。

### 闭包
闭包实现依赖函数声明时生成的`environment record`，其记载当前环境可用变量，this指向之类的信息，并在函数嵌套式形成链式结构，老版本中所谓的“作用域链”。
### Realm

不是很理解，先记录一下学习链接：

[阮一峰 ECMAScript 6 (ES6) 标准入门教程 第三版 Realm API](https://www.bookstack.cn/read/es6-3rd/spilt.8.docs-proposals.md)


[ECMAScript spec proposal for Realms API](https://github.com/tc39/proposal-realms)


[JS dialects with ES6 Realms](https://gist.github.com/dherman/9146568)

[ecma262/#sec-code-realms](https://tc39.es/ecma262/#sec-code-realms)

[Draft Proposal for SES (Secure EcmaScript)](https://github.com/tc39/proposal-ses)

[Realm Shim](https://github.com/Agoric/realms-shim)