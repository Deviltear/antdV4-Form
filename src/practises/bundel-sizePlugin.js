const {resolve} =require('path')
const fs =require('fs')

class bundleSizePlugin {
constructor (options){
this.options = options

}
apply (compiler){
  const {sizeLimit} =this.options
  compiler.hooks.compile.tap('bundleSizePlugin',(compilationParams)=>{

  })  
  compiler.hooks.done.tap('bundleSizePlugin',(stats)=>{
const {path,filename} =stats.compilation.outputOptions 
const bundlePath = resolve(path,filename)
const {size} =fs.statSync(bundlePath)
const bundleSize = size / 1024 
if (bundleSize<sizeLimit) {
  console.log(`safe bundleSize ${bundleSize},
  limiteSize: ${sizeLimit}
  `);
}
  })           
}
}
module.exports = bundleSizePlugin