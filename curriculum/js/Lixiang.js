(function(){
    'use strict'
    /**
     * 命名空间
     */
    if(!window.Lixiang){window.Lixiang={};}

    /**
     * 获取DOM元素 
     */
    function $(el){
        if(typeof el !='string'){throw new Error('参数ID必须是一个字符串')}
        let dom = document.getElementById(el)
        if(!dom){throw new Error('dom对象未找到')}
        return dom;
    };
    window.Lixiang.$=$;

    /**
     * 创建元素
     */
    function createElem(el){
        return document.createElement(el)
    };
    window.Lixiang.createElem=createElem;

    /**
     * 设置属性
     */
    function setAttr(node,styles){
        for(let key in styles){
            node.setAttribute(key,styles[key])
        }
    };
    window.Lixiang.setAttr=setAttr;

    /**
     * 获取属性
     */
    function getAttr(node,attr){
        return node.getAttribute(attr)
    };
    window.Lixiang.getAttr=getAttr;

})()