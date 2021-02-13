学习笔记

# 组件化

## 组件

### 基本概念

- 与 UI 强相关，某种意义上可以认为是特殊模块或者是特殊对象；既是对象又是模块，可以以树形结构来进行组合，并且有一定的模板化配置的能力。

### 基本组成部分

- 对象与组件的区别

	- 对象

		- 三大要素

			- Properties

				- 属性

			- Methods

				- 方法

			- Inherit

				- 继承关系

					- JavaScript 运行时默认采用的是原型继承

	- 组件

		- Properties

			- 属性

		- Methods

			- 方法

		- Inherit

			- 继承

		- Attribute

			- 特性

		- Config & State

			- 配置与状态

				- Config

					- 构造函数创建对象的时候会用到 Config ，传入构造函数的参数就叫 “Config（配置 ）”

				- State

					- 当用户去操作或者是一些方法被调用的时候， State 就会发生变化。这个 State 就是组件的状态，State 是会随着一些行为而改变的。
					- State 和 Properties、Attributes、Config 都有可能是相似或者相通的。

		- Event

			- 事件

				- 组件往外去传递东西

					- 只要是用来描述 UI 的东西，基本上都会有 event 的需求，来实现它的某种类型的交互。

		- Lifecycle

			- 生命周期

		- Children

			- 子组件

				- 树形结构的一个必要性，没有 Children 组件就不能形成树形结构，描述界面的能力就会差很多

### 生命周期

- created
- destroy

## Attribute VS Property

### Attribute

- 强调描述属性

### Property

- 强调从属关系

