// 变量
// 全局变量
site: 网站变量
page: 针对该页面的内容以及front-matter所设定的变量
config: 网站配置
theme: 主题配置
_: Lodash.js函数库
// path: 当前页面路径（不包含根路径）
url: 当前页面的完整网址
env: 环境变量

// 网站变量
// site.posts: 所有文章
// site.pages: 所有分页
// site.categories: 所有分类
// site.tags: 所有标签

// 页面变量
page.title
    .date
    .updated
    .comments
    .layout 
    .content 
    .excerpt 
    .more 
    .source 
    .full_source 
    .path 
    .permalink 
    .prev 
    .next 
    .raw 
    .photos 
    .link 


// 辅助函数， 在模板中快速插入内容；不能在源文件使用

url_for: 在路径前加上根路径
// <%- url_for(path) %>

relative_url: 取得与from相对的to路径
// <%-relative_url(from, to) %>

gravatar: 插入gravatar图片

// css: 载入css文件，path可以是数字或字符串，path开头不是'/'或其他协议，自动加上根路径，如果后面没有‘。css'会自动加上；
// <%- css(path, ...) %>
// <%- css(['style.css', 'xx.css']) %>

// js: 载入js文件，path可以是数组或字符串，同上；
// <%- js(path, ...) %>
// <%- js(['xx.js', 'aa.js']) %>

link_to: 插入链接
// <%- link_to(path,[text], [ops]) %>
// <%- link_to('http://www.google.com', 'google', {external: true})
// <a href="http://www.google.com" title="google" target="_blank">google</a>

mail_to: 插入邮箱链接
// <%- main_to(path,[text], [ops]) %>
// <%- main_to('a@qq.com', 'email') %>
// <a href="a@qq.com" title="email">email</a>

image_tag: 插入图片
// <%- image_tag(path, [ops]) %>


favicon_tag: 插入favicon
// <%- favicon_tag(path) %>

feed_tag: 插入feed链接
// <%- feed_tag(path, [ops]) %>

// 条件函数

is_current: 检查path是否符合目前页面的网址

is_home: 检查是否为首页

is_post: 检查目前是否为文章

is_archive: 检查目前是否为存档页面

is_year: 检查是否是年度归档页面

is_month:
is_category:
is_tag: 


// 字符串处理

trim: 清除字符串开头和结尾空格

strip_html: 清除字符串中html标签

// titlecat: 字符串转换为正确的title case
// <%-titlecase('title is apple') %>
// # title is apple

markdown: 使用markdown解析字符串
// <%- markdown('make **strong**') %>
// make me <strong>strong</strong>

render: 解析字符串
// <%- render(str, engine, [ops]) %>

word_wrap: 使每行字符串长度不超过length,默认80
// <%- word_wrap(str, [length]) %>\
// <%- word_warp('hahhahha', 2) %>
// ha\n hhahha


truncate: 移除超过length字符串
// <%- truncate(text, length) %>
// <%- truncate('hha', {length: 2}) %>
// hh...



// 模板

partial: 载入其他模板文件
// <%- partial(layout, [locals], [ops]) %>

// fragment_cache: 局部缓存，存储局部内容，下次使用直接使用缓存
// <%- fragment_cache(id, fn) %>
// <%- fragment_cache('header', function() { return '<header></header>'}) %>


// 日期与时间

date: 插入格式化日期
// <%- date(date, [format]) %>
// <%- date(Date.now()) %>
// 201906-28

date_xml: 插入xml格式的日期
// <%- date_xml(date) %>
// <%- date_xml(Date.now()) %>
// 2019-01-01T00:00:00.000Z

time: 插入格式化时间
// <%- time(Date.now()) %>
// 12:03:39
// <%- tiem(Date.now(), 'h:mm:ss a') %>
// 1:33:33 pm

full_date: 插入格式化日期和时间
// 


// moment.js函数库

list_categories: 插入分类列表
// <%- list_categories([ops]) %>

list_tags: 插入标签列表
// <%- list_tags([ops]) %>

list_archives: 插入归档列表
// <%- list_archives([ops]) %>

list_posts: 插入文章列表

tagcloud: 插入标签云

paginator: 插入分页链接

search_from: google搜索框

number_format: 格式化数字
// <%- number_format(number, [ops]) %>
// <%- number_format(23423.343, {precision: 4}) %>
// 23423.3430

// open_graph: 插入 open graph 资源

















































