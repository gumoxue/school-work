# Git 核心命令速查（实验三 任务1）

## 三区模型

```
工作区 (Working Directory)  --git add-->  暂存区 (Staging / Index)  --git commit-->  本地仓库 (Repository)
        ↑                                                                                      |
        └──────────────────────────  git checkout -- / git reset  <───────────────────────────┘
```

| 区域 | 含义 | 常用查看命令 |
|---|---|---|
| 工作区 | 正在编辑的文件 | `git status`、`git diff` |
| 暂存区 | 已 `add`、准备提交的快照 | `git diff --cached` |
| 本地仓库 | 已 `commit` 的历史版本 | `git log --oneline` |

## 六个核心命令

| 命令 | 作用 | 备注 |
|---|---|---|
| `git add <文件>` | 工作区 → 暂存区 | `git add .` 添加全部改动 |
| `git commit -m "信息"` | 暂存区 → 仓库，生成一个版本 | 信息用约定式提交前缀 |
| `git log --oneline` | 查看提交历史（简洁） | 找到要回滚的版本号 |
| `git diff` | 对比工作区与暂存区 | 未 `add` 的改动 |
| `git diff --cached` | 对比暂存区与仓库 | 已 `add` 的改动 |
| `git checkout -- <文件>` | 撤销工作区改动 | 丢弃未 `add` 的修改 |
| `git branch` | 查看 / 管理分支 | `git branch xxx` 新建 |
| `git reset --hard <版本号>` | 回滚到指定版本 | 会丢弃之后所有改动 |

## 约定式提交前缀（Commit Convention）

| 前缀 | 用途 |
|---|---|
| `feat:` | 新增功能 |
| `fix:` | 修复缺陷 |
| `docs:` | 文档 |
| `style:` | 格式/样式（不影响逻辑） |
| `refactor:` | 重构 |
| `chore:` | 构建/工具/杂项 |
