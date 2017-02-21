/**
 * 页面加载完成后，执行多个函数
 * @param {[function]} func [绑定的函数]
 */
function addLoadEvent(func) {
  var oldonLoad = window.onload;
  // 当前onload没有绑定函数，则将函数绑定到onload
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    // 否则追加到onload事件中
    window.onload = function() {
      oldonLoad();
      func();
    }
  }
}

/**
 * 在目标元素后插入元素（元素为兄弟关系）
 * @param  {[元素节点]} newElement    [需要插入的新元素]
 * @param  {[元素节点]} targetElement [目标元素]
 */
function insertAfter(newElement,targetElement){
  var parentElement=targetElement.parentNode;
  // 目标元素是父元素的最后一个节点，直接将新元素追加到父元素
  if(parentElement.lastChild==targetElement){
    parentElement.appendChild(newElement);
  }else{
    // 否则，在目标元素的后面一个元素前插入新元素
    parentElement.insertBefore(newElement,targetElement.nextSibling);
  }
}

/**
 * 获取和遍历所有匹配的dom元素
 * @Author   lhx
 * @DateTime 2016-10-24
 * @param    selector [css选择符]
 * @param    context  [目标元素下匹配]
 */
function $$(selector,context){
  context=context||document;
  var elements=context.querySelectorAll(selector);
  return Array.prototype.slice.call(elements);
}

/**
 * 检测属性是否存在
 * @Author   lhx
 * @DateTime 2016-10-24
 * @param    property [属性名]
 */
function testProperty(property){
  var root=document.documentElement;
  
  if(property in root.style){
    root.classList.add(property.toLowerCase());
    return true;
  }

  root.classList.add('no-'+property.toLowerCase());
  return false;
}

/**
 * 检测某个具体属性值是否支持
 * @Author   lhx
 * @DateTime 2016-10-24
 * @param    {[type]}   id       [类名]
 * @param    {[type]}   value    [属性值]
 * @param    {[type]}   property [属性]
 */
function testValue(id,value,property){
  var dummy=document.createElement('p');
  dummy.style[property]=value;

  if(dummy.style[property]){
    root.classList.add(id);
    return true;
  }

  root.classList.add("no-"+id);
  return false;
}