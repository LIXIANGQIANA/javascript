'use strict'  //使用严格模式
/**
 * 获取元素
 */
// const divDom=document.getElementById('table-data-wrap')
const divDom=getElem('table-data-wrap')
/**
 * 创建DOM元素
 */
// const tableDom=document.createElement('table')
const tableDom=createElem('table')
/**
 * 设置属性
 */
const styles={
    width: '100%',
    border:0,
    cellpadding:0,
    cellspacing:0,
    id:'table-data-wrap'
}
setAttr(tableDom,styles)
// tableDom.setAttribute(node,styles)
// tableDom.border='0'
// tableDom.setAttribute('cellpadding','0')
// tableDom.setAttribute('cellspacing','0')
// tableDom.setAttribute('id','table-data-wrap')
let a=getAttr(tableDom,'id')


function getElem(el){
    if(typeof el=='String'){
        throw new Error('参数ID必须是一个字符串')
    }
    let dom= document.getElementById(el)
    if(!dom){
        throw new Error('dom未找到')
    }
    return dom
}

function createElem(el){
    return document.createElement(el)
}

function setAttr(node,styles){
    for(let key in styles){
        node.setAttribute(key,styles[key])
    }
}

function getAttr(node,attr){
    return node.getAttribute(attr)
}
tableDom.innerHTML+=
            `
            <thead>
            <tr>
                <th>头像</th>
                <th>姓名</th>
                <th>性别</th>
                <th>年龄</th>
                <th>手机号</th>
                <th>国籍</th>
                <th width="200">爱好</th>
                <th>头衔</th>
                <th>操作</th>
            </tr>
        </thead>
            `
divDom.appendChild(tableDom)


