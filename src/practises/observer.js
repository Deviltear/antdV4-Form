

class Observer {
constructor(name){
  this.state="开心"
  this.name=name
  this.Watcher =[]
}
addWatcher=(watcher)=>{
  this.Watcher.push(watcher)
}
setStatus=(status)=>{
  this.state =status
  this.Watcher.forEach(wat=>{
    wat.getStatus(this.state)
  })
}

}


class Watcher {
constructor(name){
this.name=name
}
  getStatus =(status)=>{
    console.log(`${this.name}观察到了状态变化为 ${status}`);
  }
}
const watcher1 = new Watcher('观察着1')
const watcher2 = new Watcher('观察者2')
const observer = new Observer('被观察者')
observer.addWatcher(watcher1)
observer.addWatcher(watcher2)
observer.setStatus('不开心了')
