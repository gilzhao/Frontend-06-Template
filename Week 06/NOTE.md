学习笔记

# 范用语言分类方法

语言按语法分类
* 非形式语言
    * 中文、英文
* 形式语言（乔姆斯基谱系）
    * 0型 无限制文法
    * 1型 上下文相关文法
    * 2型 上下文无关文法
    * 3型 正则文法



# JS 类型 | Number
最小单位，字面值和运行时
## Atom
### Grammar：
* Literal
* Variable
* Keywords
* Whitespace
* Line Terminator

去组成 js 语言的最小的元素

### Runtime：
* Types：字面值类型
* Execution Context：变量存储变化

语法造成运行时的改变

## Types：
* Number
* String
* Boolean
* Object
* Null：有值，为空；尽量用 Null 赋值。
* Undefined：没有定义过该值，不会用 undefined 赋值，只会检查变量是否有该值，类似于 Number 中的 NAN（Not A Number）。JavaScript 客观上允许，但要克制。
* Symbol：一定层度上代替了 String 的作用，用于 Object 中的索引，与 String 的区别：String 都是一样的。Symbol 专门用于 Object 属性名。
* BigInt

常用：Number、String、Boolean、Object、Null

# Number
IEEE 754 Double Float
Sing（1）
Exponent（11）
Fraction（52）
精度损失

## Number-Grammar
* DecimalLiteral
    * 0
    * 0.
    * .2
    * 1e3
* BinaryIntegerLiteral
    * 0b111
* OctalIntegerLiteral
    * 0o10
* HexIntegerLiteral
    * 0xFF

语法冲突案例：0.toString() --> 0 .toString()

# String
* Character
* Code Point
* Encoding

# Null & Undefined
怎么样表示 Undefined 是最安全的？
一般不用全局变量 undefined，通常用 void 0 来产生 undefined。
语法上得到 undefined 最简洁的方法是使用 void 关键字来进行一次运算

