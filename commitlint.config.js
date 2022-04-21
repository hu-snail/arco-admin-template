// commitlint.config.js

module.exports = {
  // ↓忽略包含init的提交消息
  ignores: [(commit) => commit.includes('init')],
  // ↓按照传统消息格式来验证
  extends: ['@commitlint/config-conventional'],
  // 自定义解析器
  parserPreset: {
    // 解析器配置
    parserOpts: {
      // commit 提交头的规则限制
      headerPattern: /^(\w*|[\u4e00-\u9fa5]*)(?:[\(\（](.*)[\)\）])?[\:\：] (.*)/,
      // 匹配分组
      headerCorrespondence: ['type', 'scope', 'subject'],
      // 引用
      referenceActions: ['close', 'closes', 'closed', 'fix', 'fixes', 'fixed', 'resolve', 'resolves', 'resolved'],
      // 对应issue要携带#符号
      issuePrefixes: ['#'],
      // 不兼容变更
      noteKeywords: ['BREAKING CHANGE'],
      fieldPattern: /^-(.*?)-$/,
      revertPattern: /^Revert\s"([\s\S]*)"\s*This reverts commit (\w*)\./,
      revertCorrespondence: ['header', 'hash'],
      warn() {},
      mergePattern: null,
      mergeCorrespondence: null
    }
  },
  // ↓自定义提交消息规则
  rules: {
    // ↓body以空白行开头
    'body-leading-blank': [2, 'always'],
    // ↓footer以空白行开头
    'footer-leading-blank': [1, 'always'],
    // ↓header的最大长度
    'header-max-length': [2, 'always', 108],
    // ↓subject为空
    'subject-empty': [2, 'never'],
    // ↓type为空
    'type-empty': [2, 'never'],
    // ↓type的类型
    'type-enum': [2, 'always', ['feat', 'fix', 'perf', 'style', 'docs', 'test', 'refactor', 'build', 'ci', 'chore', 'revert', 'wip', 'workflow', 'types', 'release', 'update']]
  }
};

/** type：用于说明 commit 的类型，被指定在 commitlint.config.js 的 type-enum
feat：新功能（feature）
fix：修补bug
意为：修复（修复bug）有时可在相关commit上加上修复的bug的等级
如：
  Blocker (中断) : 客户端程序无响应，无法执行下一步操作
  Critical (严重)：功能点缺失
  Major (较严重)：功能点没有满足需求
  Normal (普通)：数值计算错误，js错误
  Minor (次要)：界面UI与需求不符
  Trivial (轻微)：辅助描述说明不清楚，提示语句错误之类…
docs：文档
style： 格式（不影响代码运行的变动）
refactor：重构（即不是新增功能，也不是修改bug的代码变动）
test：增加测试
chore：构建过程或辅助工具的变动
revert: 回滚到上一个版本
*/
