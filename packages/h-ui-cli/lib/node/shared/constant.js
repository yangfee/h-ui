import { resolve } from 'path';
import { getDirname } from './fsUtils.js';
// h-ui/packages/h-ui-cli/  lib/node/shared/
export const dirname = getDirname(import.meta.url);
console.log('dirname', dirname);
export const CWD = process.cwd();
export const VARLET_CONFIG = resolve(CWD, 'varlet.config.mjs');
export const SRC_DIR = resolve(CWD, 'src');
export const ES_DIR = resolve(CWD, 'es');
export const LIB_DIR = resolve(CWD, 'lib');
export const UMD_DIR = resolve(CWD, 'umd');
export const TYPES_DIR = resolve(CWD, 'types');
export const ROOT_DOCS_DIR = resolve(CWD, 'docs');
export const ROOT_PAGES_DIR = resolve(CWD, 'pages');
// docs-vite 里面, 放组件文档的目录
export const DOCS_COMPONENTS_DIR = resolve(CWD, 'docs/components');
export const ESLINT_EXTENSIONS = ['.vue', '.ts', '.js', '.mjs', '.tsx', '.jsx'];
export const VITE_RESOLVE_EXTENSIONS = [
    '.vue',
    '.tsx',
    '.ts',
    '.jsx',
    '.js',
    '.less',
    '.css',
];
export const SCRIPTS_EXTENSIONS = ['.tsx', '.ts', '.jsx', '.js'];
export const PUBLIC_DIR_INDEXES = [
    'index.vue',
    'index.tsx',
    'index.ts',
    'index.jsx',
    'index.js',
];
export const STYLE_DIR_NAME = 'style';
export const EXAMPLE_DIR_NAME = 'example';
export const LOCALE_DIR_NAME = 'locale';
export const DOCS_DIR_NAME = 'docs';
export const DIR_INDEX = 'index.vue';
export const TESTS_DIR_NAME = '__tests__';
export const GENERATORS_DIR = resolve(dirname, '../../../template/generators');
export const UI_PACKAGE_JSON = resolve(CWD, 'package.json');
export const CLI_PACKAGE_JSON = resolve(dirname, '../../../package.json');
// site
export const SITE = resolve(dirname, '../../../site');
export const SITE_OUTPUT_PATH = resolve(CWD, 'site');
export const SITE_PUBLIC_PATH = resolve(CWD, 'public');
export const SITE_DIR = resolve(CWD, '.varlet/site');
export const SITE_PC_DIR = resolve(CWD, '.varlet/site/pc');
export const SITE_PC_ROUTES = resolve(CWD, '.varlet/pc.routes.ts');
export const SITE_MOBILE_ROUTES = resolve(CWD, '.varlet/mobile.routes.ts');
export const SITE_CONFIG = resolve(CWD, '.varlet/site.config.json');
// template highlight
// gen packages/varlet-ui/highlight/web-types.en-US.json 供 vsc extension 使用, 做自动补全
export const HL_DIR = resolve(CWD, 'highlight');
// xxx/button/docs/en_US.md --> 组件名称是 button
// export const HL_COMPONENT_NAME_RE = /.*(\/|\\)(.+)(\/|\\)docs(\/|\\)/
// packages/docs-vite/docs/components/demo/index.md  --> demo
export const HL_COMPONENT_NAME_RE = /.*docs(?:\/|\\)components(?:\/|\\)([^/\\]+)(\/|\\)/;
// ## API
export const HL_API_RE = /##\s*API(?:\r\n|\n)+/;
// ### Props
export const HL_EN_TITLE_ATTRIBUTES_RE = /###\s*Props(?:\r\n|\n)+/;
// ### Events
export const HL_EN_TITLE_EVENTS_RE = /###\s*Events(?:\r\n|\n)+/;
// ### slots
export const HL_EN_TITLE_SLOTS_RE = /###\s*Slots(?:\r\n|\n)+/;
// export const HL_EN_MD = 'en-US.md'
export const HL_EN_MD = 'index.md'; // markdown 文件名称
// 类型文件path packages/docs-vite/highlight/web-types.en-US.json
export const HL_EN_WEB_TYPES_JSON = resolve(HL_DIR, 'web-types.en-US.json');
export const HL_ZH_TITLE_ATTRIBUTES_RE = /###\s*属性(?:\r\n|\n)+/;
export const HL_ZH_TITLE_EVENTS_RE = /###\s*事件(?:\r\n|\n)+/;
export const HL_ZH_TITLE_SLOTS_RE = /###\s*插槽(?:\r\n|\n)+/;
export const HL_ZH_MD = 'zh-CN.md';
export const HL_ZH_WEB_TYPES_JSON = resolve(HL_DIR, 'web-types.zh-CN.json');
// icons
export const ICONS_DIST_DIR = resolve(CWD, 'dist');
export const ICONS_CSS_DIR = resolve(ICONS_DIST_DIR, 'css');
export const ICONS_PNG_DIR = resolve(ICONS_DIST_DIR, 'png');
export const ICONS_FONTS_DIR = resolve(ICONS_DIST_DIR, 'fonts');
export const ICONS_SVG_DIR = resolve(CWD, 'svg');
// extension
export const EXTENSION_ENTRY = resolve(CWD, 'src/extension.ts');
// jest
export const JEST_CONFIG = resolve(dirname, '../../../cjs/jest.config.cjs');
