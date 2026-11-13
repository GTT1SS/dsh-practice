# todo-demo

一个最小的 Todo 网页应用（纯 HTML + 原生 JS，无构建），用来给 dsh-superagent 练手。

## 现状

- 添加待办
- 勾选完成 / 取消完成
- 删除待办
- 一键清除所有已完成项
- 数据存在 `localStorage`，刷新不丢

## 运行

直接双击 `index.html`，或用任意静态服务器：

```sh
python -m http.server 8080
```

## 给 agent 的任务示例

在 Issue 或评论里 @ 它，例如：

- 「给待办加一个‘全部清除已完成’按钮」
- 「支持按完成状态筛选：全部 / 未完成 / 已完成」
