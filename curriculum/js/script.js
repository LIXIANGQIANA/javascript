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

tableDom.innerHTML=
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


