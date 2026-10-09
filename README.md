# 粤剧数字文化平台 · 南国红豆 粤韵新生

面向青年受众的粤剧数字文化网站，定位为「粤剧数字文化馆 + 互动学习 + 青年社区」。目标：让对粤剧不熟悉的大学生能在 3 分钟内建立基本认知，并产生进一步探索的兴趣。

本项目为**大创项目学术成果**。

## 技术栈

- **前端**：React 18 + TypeScript + Vite
- **样式**：Tailwind CSS（配色：中国红 `#C41E3A`、墨黑 `#1A1A1A`、宣纸白 `#F5F0E8`）
- **路由**：React Router v6（HashRouter）
- **图表**：Recharts（历史时间轴、行当/流派分布图）
- **数据**：无后端，全部数据为 `/src/data/` 下的 TypeScript 静态模块
- **字体**：Noto Serif SC（标题）/ Noto Sans SC（正文），Google Fonts CDN + 系统字体回退

## 运行命令

```bash
npm install     # 安装依赖
npm run dev     # 启动开发服务器（默认 http://localhost:5173）
npm run build   # 类型检查 + 生产构建（输出至 dist/）
npm run preview # 预览生产构建
```

> 说明：本机 PowerShell 存在执行策略限制时，请使用 `npm.cmd` 代替 `npm`。

## 文件结构

```
yueju_web/
├── index.html              # 入口 HTML（含 Google Fonts 引入）
├── package.json
├── vite.config.ts          # Vite 配置（含 vendor 分包）
├── tsconfig.json           # TypeScript 配置（strict 模式）
├── tsconfig.node.json
├── tailwind.config.js      # Tailwind 主题（配色/字体/动效）
├── postcss.config.js
├── public/
│   └── favicon.svg
└── src/
    ├── main.tsx            # React 入口
    ├── App.tsx             # 路由定义
    ├── index.css           # Tailwind 指令 + 全局样式
    ├── types/index.ts      # 全部共享 TypeScript 接口
    ├── data/               # 静态数据模块
    │   ├── masters.ts      # 名家数据
    │   ├── plays.ts        # 剧目数据
    │   ├── guideClips.ts   # 导赏数据
    │   ├── historyNodes.ts # 时间轴数据
    │   ├── glossary.ts     # 术语词典
    │   ├── resources.ts    # 片单书单
    │   ├── heritage.ts     # 非遗保护档案
    │   └── visual.ts       # 脸谱与服饰
    ├── lib/
    │   ├── theme.ts        # 颜色/断点常量
    │   └── audio.ts        # Web Audio「查笃撑」节奏合成
    ├── hooks/
    │   ├── useClipboard.ts # 复制结果文案
    │   └── usePageTitle.ts # 页面标题
    ├── components/
    │   ├── layout/         # Header / Footer / Layout
    │   ├── common/         # Card / ImagePlaceholder / Accordion / SectionTitle
    │   ├── home/           # Hero / QuickLinks / StatsBar
    │   └── interactive/    # RoleTest / RhythmGame
    └── pages/              # 页面组件
        ├── Home.tsx
        ├── Basics.tsx
        ├── History.tsx
        ├── Masters.tsx / MasterDetail.tsx
        ├── Plays.tsx / PlayDetail.tsx
        ├── Guide.tsx / GuideDetail.tsx
        ├── Interactive.tsx
        ├── Map.tsx
        ├── Culture.tsx
        └── NotFound.tsx
```

## 页面路由

| 路径 | 页面 |
|---|---|
| `#/` | 首页 |
| `#/basics` | 粤剧入门 |
| `#/history` | 历史时间轴 |
| `#/masters` | 名家列表 |
| `#/masters/:id` | 名家详情 |
| `#/plays` | 名剧库 |
| `#/plays/:id` | 名剧详情 |
| `#/guide` | 经典片段导赏 |
| `#/guide/:id` | 导赏详情 |
| `#/interactive` | 互动体验 |
| `#/map` | 粤剧地图 |
| `#/culture` | 文化百科（术语/片单书单/非遗档案/粤剧视觉） |

## 数据接口

数据接口统一定义于 `src/types/index.ts`，各数据文件以 `export const` 导出数组。

- `masters.ts` → `Master[]`：`id, name, role, birthYear, deathYear, troupe, signaturePlays[], description, timeline[], lineage[]`
- `plays.ts` → `Play[]`：`id, title, playwright, premiereYear, mainRoles[], synopsis, lyrics[]`
- `guideClips.ts` → `GuideClip[]`：`id, playTitle, ariaTitle, performer, duration, difficulty, lyrics[], notes, background`
- `historyNodes.ts` → `HistoryNode[]`：`id, era, year, title, description`
- `glossary.ts` → `GlossaryTerm[]`：`term, category, definition`
- `resources.ts` → `watchList` / `readingList`：`title, tier/author, note`
- `heritage.ts` → `inheritors` / `measures` / `digitalArchive`
- `visual.ts` → `masks` / `costumes`：脸谱与服饰数据

## 版权与免责声明

- 本网站为大创项目学术成果，所有音视频、图片资源均为占位符，正式上线前需获得授权或替换为公版/开放资源。
- 唱词、剧本内容来源于公开出版物，仅用于教学与研究目的。
- 项目不采集任何用户个人信息，投稿表单为纯前端演示。
