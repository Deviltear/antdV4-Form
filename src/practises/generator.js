const list =['1','2','3']
const SymbolList =list.map((v,index)=>{

 return  {[ Symbol(index)]:v}
}
)
console.log(SymbolList);

console.log(SymbolList.find((item)=>Symbol.keyFor(Symbol.for(0))));