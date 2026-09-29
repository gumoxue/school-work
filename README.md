# 就诊记录（医院信息系统 - 实验三）

基于 React + Vite + react-router-dom 的"就诊记录"页面，用于实验三《Vibe Coding 标准工作流与 Git 版本管理》。

## 功能

- 就诊记录列表：展示患者姓名、科室、诊断、就诊时间
- 点击记录进入详情页：患者信息、主诉、诊断、医嘱
- 关键字搜索（姓名 / 诊断 / 医生 / 就诊号）+ 科室筛选

## 运行

```powershell
npm install
npm run dev      # 开发预览，默认 http://localhost:5173
npm run build    # 生产构建
```

## 目录结构

```
src/
  data/visits.js          本地 mock 就诊记录数据
  pages/
    VisitList.jsx         列表页（含关键字/科室筛选）
    VisitDetail.jsx       详情页（路由 /visits/:id）
  App.jsx                 路由配置
  index.css               全局基础样式
docs/
  git-commands.md         Git 核心命令速查
  实验三-过程记录.md        五步工作流 / 分支 / 回滚 过程记录
  screenshots/            验证与回滚演练截图
```

## Git 提交规范

采用约定式提交：`feat` / `fix` / `docs` / `style` / `refactor` / `chore`。
