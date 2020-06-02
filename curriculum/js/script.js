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
//设置属性
window.Lixiang.setAttr(tableDom,styles)

let theadHtml=` <thead><tr>`
/**
 * 表头数据
 */
theadData.forEach((item,index,arr)=>{
    //通过三目判断是否有width
    let width=item.width ? `width=${item.width}` : ``
    theadHtml+=`<th ${width}>${item.lable}</th>`
})
theadHtml+=`</tr></thead>`

let tbodyHtml=`<tbody>`
/**
 * 列表数据
 */
let trHtml=``
console.log(tbodyData);
for(let i=0;i<tbodyData.length;i++){
    trHtml+=`<tr>`
    let data=tbodyData[i]
    //头像
    trHtml+=`
                <td>
                    <div class="face">
                        <span class="gender icon-${data.face.gender}"></span>
                        <img src="${data.face.img}" alt="">
                    </div>
                 </td>
            `
    //姓名
    trHtml+=`
            <td>
                <div class="people-name">
                    <h4 class="name">${data.name.trueName}</h4>
                    <span class="nickname option-05 fs-12">${data.name.nickname}</span>
                </div>
            </td>
            `
    //性别
    trHtml+=`
            <td>
                <div class="gender-wrap">
                    <span class="gender icon-girl ${data.face.gender=== 'girl' ? '' : 'option-05'}"></span>
                    <span class="gender icon-boy ${data.face.gender=== 'girl'? 'option-05' : ''}"></span>
                </div>
            </td>
            `
    //年龄
    trHtml+=`
            <td>
                <div class="age text-center">
                    <p>${data.age.number}</p>
                    <span class="option-05 fs-12">（单身狗）</span>
                </div>
             </td>
            `
    //手机号码
    trHtml+=`
            <td>
                <div class="phone">
                    +86<span class="option-05">（中国）</span><br />
                    ${data.phone.number}
                </div>
            </td>
            `
    //国籍
    trHtml+=`
            <td>
                <div>
                    <img src="${data.country.National_flag}" alt="中国">
                    <p class="country-name" style="color: red;">${data.country.name}</p>
                </div>
            </td>
            `
    //爱好
    let likeHtml=``;
    data.like.forEach(item=>{
        likeHtml+=`<span style="background-color: ${item.color};">${item.tga}</span>`
    });
    trHtml+=` <td><div class="likes">${likeHtml}</td></div>`

    //头衔
    trHtml+=`
            <td>
                <div class="grade">
                    <span class="role-name">${data.rank.name}</span>
                    <div class="grade-wrap icon-grade">
                        <div class="grade-high icon-grade" style="width: ${data.rank.level*16.6666}%;"></div>
                    </div>
                </div>
            </td>
            `
    //操作
    trHtml+=`
            <td>
                <div class="operation">
                    <a href="javascript: void(0);" class="operation-btn">设置</a>
                    <ul class="links">
                        <a href="javascript: void(0);">编辑</a>
                        <a href="javascript: void(0);">删除</a>
                        <a href="javascript: void(0);">锁定</a>
                        <a href="javascript: void(0);">收起</a>
                    </ul>
                </div>
            </td>
    `

    trHtml+=`</tr>`   
}
tbodyHtml+=`${trHtml}</tbody>`
console.log(tbodyHtml);



tableDom.innerHTML=theadHtml+tbodyHtml


           
divDom.appendChild(tableDom)








