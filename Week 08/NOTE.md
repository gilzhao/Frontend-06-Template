学习笔记

## 有限状态机
* 每一个状态都是一个机器
    * 每一个机器里，都可以做计算、存储、输出...只关心本状态
    * 所有这些机器接受的输入时一致的
    * 状态机的每一个机器本身没有状态，用函数表示，应该是纯函数
* 每一个机器知道下一个状态
    * 每个机器都有确定的下一个状态（Moore）
    * 每个机器根据输入决定下一个状态（Mealy）

[Web 开发中无处不在的状态机](https://zhuanlan.zhihu.com/p/26524390)

## ISO-OSI 七层网络模型
应用层: HTTP require('http')   
表示层: HTTP require('http')
会话层: HTTP require('http')
传输层: TCP require('net')  流  端口 数据包
网络层: Internet
数据链路层: 4G/5G/Wifi
物理层: 4G/5G/Wifi

## 实现基础库
先从它的使用开始去设计它的接口的形式

### 实现流程
* HTTP 请求
    * 设计一个 HTTP 请求的类 Request
    * content-type 是一个必要的字段
    * body 是 KV 格式
    * 不同的 content-type 会影响 body 格式
 * send 函数
    * 将真实数据发送到服务器
    * 异步，返回一个 promise
 * 发送请求
    * 支持已有的 connection 或者新建自己的 connection
    * 收到的数据传给 parser
    * 根据 parser 的状态 reslove promise
 * ResponseParser
    * response 需要分段构造，所以用 responseParser 来装配
    * responseParser 分段处理 responseText，所以可以用状态机来解析。
 * BodyParser
    * Response 的 body 根据 Content-Type 有不同的结果，所以采用子 parser 来处理
    * 以 TrunkedBodyParser 为例，用状态机来处理 body 的格式

