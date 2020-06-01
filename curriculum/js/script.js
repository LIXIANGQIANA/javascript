'use strict';
//获取DIV
const divDom=window.Lixiang.$('table-data-wrap');
// 创建元素
const tableDom=window.Lixiang.createElem('table');

const styles={
    width: '100%',
    border:0,
    cellpadding:0,
    cellspacing:0,
    id:'table-data-wrap'
}
window.Lixiang.setAttr(tableDom,styles)
let theadHtml=` <thead><tr>`
let thead=[
    {lable:'头像'},
    {lable:'姓名'},
    {lable:'性别'},
    {lable:'年龄'},
    {lable:'手机号'},
    {lable:'国籍',width:'200'},
    {lable:'头衔'},
    {lable:'操作'}
]
thead.forEach((item,index,arr)=>{
    let width=item.width ? `width=${item.width}` : ``
    theadHtml+=`<th ${width}>${item.lable}</th>`
})
theadHtml+=`</tr></thead>`

tableDom.innerHTML=theadHtml
           
divDom.appendChild(tableDom)


