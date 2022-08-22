const marked = require('marked') //将内容转换为html
const utils = require('loader-utils') //可以拿到loader中的各种参数的官方库
function markdownLoader(source) {
  const options = utils.getOptions(this) //每步处理后的this传入即可
  const html = marked(source,options)
  return `module.exports=${JSON.stringify(html)} `
   
} 
module.exports= markdownLoader