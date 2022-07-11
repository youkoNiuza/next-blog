// eslint-disable-next-line react-hooks/rules-of-hooks
/** @format */

// http://eslint.cn/docs/rules/#possible-errors
// 其他配置详解参考：https://segmentfault.com/a/1190000017461203

const path = require('path');
const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
  // 运行环境，eslint就能够自动识别对应环境所有的全局变量
    env: {
        browser: true,
        es2020: true, // ES6第六版之后
        node: true,
    },
    settings: {
        'import/resolver': {
            typescript: {
            project: path.resolve(__dirname, 'tsconfig.json'),
            },
        },
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
    },
    parserOptions: {
        ecmaVersion: 12, // 支持的ECMAScript语言版本。12相当于而是2021
        sourceType: 'module', // ES模块模式
        // 设置一些额外的语言特性
        ecmaFeatures: {
            impliedStrict: true, // 全局strict模式
            jsx: true,
        },
    },
    parser: '@typescript-eslint/parser', // ESLint的解析器，支持对TS文件的解析
    plugin: [
        "react",
        "react-dom",
        "react-hooks",
        '@typescript-eslint'
    ],
  // 手动修改通过rules属性来手动修改ESLint相关配置
  // 在根目录配置已有的rules无需在写一遍
    rules: {
    'max-len': [
        ERROR,
        {
            code: 120,
            ignoreComments: true,
            ignoreTrailingComments: true,
            ignoreUrls: true,
            ignoreStrings: true,
            ignoreTemplateLiterals: true,
            ignoreRegExpLiterals: true,
        },
    ],
    'jsx-quotes': [ERROR, 'prefer-single'],
    'react-hooks/rules-of-hooks': ERROR,
    'react-hooks/exhaustive-deps': WARN,
    'react/no-array-index-key': OFF, // 防止在键中使用数组索引

    'import/no-extraneous-dependencies': [ERROR, { devDependencies: true }], // 模块引入检查
    'import/no-unresolved': OFF, // 确保导入的模块可以解析为本地文件系统上的模块
    'import/no-dynamic-require': OFF, // 禁止 require 使用表达式

    '@typescript-eslint/explicit-module-boundary-types': OFF, // 函数需设置返回值和返回值类型
    '@typescript-eslint/no-non-null-assertion': OFF, // 禁止使用!后缀运算符进行非空断言
    '@typescript-eslint/no-explicit-any': OFF, // 禁止使用any类型
    '@typescript-eslint/no-var-requires': OFF,
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],

    'react/no-children-prop': OFF, // 子项不应该作为属性进行传递
    'react/jsx-props-no-spreading': OFF, // jsx 文件子项不应该作为属性进行传递
    'react/react-in-jsx-scope': OFF, // 限制可能包含 JSX 扩展名
    'react/jsx-filename-extension': [WARN, { extensions: ['.tsx', 'ts', '.jsx', 'js'] }], // 使用 JSX 时防止丢失 React
    'react/state-in-constructor': OFF, // 强制状态初始化风格
    'react/jsx-indent-props': [ERROR, 2], // 验证 JSX 中的属性和方法缩进
    'react/jsx-indent': [ERROR, 2], // 验证 JSX 缩进
    'react/jsx-one-expression-per-line': OFF, // 每行一个 JSX 元素

    'jsx-a11y/click-events-have-key-events': OFF, // 单击事件具有键事件
    'jsx-a11y/no-noninteractive-element-interactions': OFF, // 非 非交互元素交互
    'jsx-a11y/no-static-element-interactions': OFF, // 非静态元素交互
    'jsx-a11y/label-has-associated-control': OFF, // 标签关联控制
    'no-console': OFF, // 页面禁止console
    'no-shadow': OFF, // 禁止局部变量和它外层｜全局变量使用相同名称
    'no-unused-expressions': OFF, // 禁止写入未使用的表达式
    'no-unused-vars': OFF, // 禁止写入未使用的变量

    'no-restricted-syntax': OFF, // 禁止某些指定的语法
    'no-plusplus': OFF, // 不校验++和--
    'no-use-before-define': WARN, // 禁止提前使用
    'no-continue': OFF, // 禁止continue声明
    'jsx-quotes': [ERROR, 'prefer-double'], // 强制在 JSX 属性中一致使用双引号或单引号
    'default-case': OFF, // switch语句必须要写 default 语句
    'global-require': OFF,
    'lines-between-class-members': [ERROR, 'always'], // 要求或禁止类成员之间的空行（行间类成员）
    // indent: [ERROR, 2, { SwitchCase: 1 }],
    quotes: [ERROR, 'single'], // 强制一致使用双引号或单引号
    semi: [ERROR, 'always'], // 需要在语句末尾使用分号
    },
};
