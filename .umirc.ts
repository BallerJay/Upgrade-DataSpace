import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max',
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: '权限演示',
      path: '/access',
      component: './Access',
    },
    {
      name: ' CRUD 示例',
      path: '/table',
      component: './Table',
    },
  ],
  npmClient: 'pnpm',
  verifyCommit: {
    scope: [
      'art', // 改进代码结构/代码格式
      'zap', // 提高性能
      'fire', // 删除代码或文件
      'bug', // 修复 bug
      ':ambulance: ', // 重要补丁
      ':sparkles: ', // 引入新功能
      ':memo: ', // 写文档
      ':rocket: ', // 部署功能
      ':lipstick: ', // 更新 UI 和样式文件
      ':tada', // 初次提交
      ':white_check_mark: ', // 添加测试
      ':lock: ', // 修复安全问题
      ':apple: ', // 修复 macOS 下的问题
      ':penguin: ', // 修复 Linux 下的问题
      ':checkered_flag: ', // 修复 Windows 下的问题
      ':robot: ', // 修复 Android 上的问题
      ':green_apple: ', // 修复 iOS 上的问题
      ':bookmark: ', // 发布/版本标签
      ':rotating_light: ', // 移除 linter 警告
      ':construction: ', // 工作进行中
      ':green_heart: ', // 修复 CI 构建
      ':arrow_down: ', // 降级依赖
      ':arrow_up: ', // 升级依赖
      ':pushpin: ', // 将依赖项固定到特定版本
      ':construction_worker: ', // 添加 CI 构建系统
      ':chart_with_upwards_trend: ', // 添加分析或跟踪代码
      ':recycle: ', // 重构代码
      ':heavy_plus_sign: ', // 添加依赖
      ':heavy_minus_sign: ', // 删除依赖
      ':wrench: ', // 修改配置文件
      ':hammer: ', // 重大重构
      ':globe_with_meridians: ', // 国际化和本地化
      ':pencil2: ', // 修正错别字
      ':poop: ', // 编写需要改进的糟糕代码
      ':rewind: ', // 恢复更改
      ':twisted_rightwards_arrows: ', // 合并分支
      ':package: ', // 更新编译的文件或包
      ':alien: ', // 由于外部 API 更改而更新代码
      ':truck: ', // 移动或重命名文件
      ':page_facing_up: ', // 添加或更新许可证
      ':boom: ', // 引入重大更改
      ':bento: ', // 添加或更新资源
      ':wheelchair: ', // 提高可访问性
      ':bulb: ', // 添加或更新注释
      ':beers: ', // 醉酒编程
      ':speech_balloon: ', // 添加或更新文本和字面量
      ':card_file_box: ', // 执行与数据库相关的更改
      ':loud_sound: ', // 添加或更新日志
      ':mute: ', // 删除日志
    ],
  },
});
