/**
 * Created by Hekx on 16/2/1.
 */


window.onload = function(){
    var jsonData = [
        {
            id:"4be10198-5ad2-11e5-a590-c81f66f585f92112",
            name:"活着.mp4",
            icon:"/originalService/temp/docthumb/2ff84f51-b844-11e5-a288-02000a671f06",
            type:"file",
            properties: [
                {name:"创建人",value:"张三"},
                {name:"创建日期",value:"2015-01-01"},
                {name:"分类",value:"艺术创作/音乐"},
                {name:"原文件名",value:"活着.mp4"},
                {name:"认证时间",value:"2015-01-01 22:12"}
            ],
            images:[
                {title:"已认证",url:"11.png"},
                {title:"已公示",url:"00.png"}
            ],
            url :"/originalService/app/document/viewdoc/4be10198-5ad2-11e5-a590-c81f66f585f9",
            target:"_blank",
            buttons : [{name:"编辑",func : 'Edit'}]
        },
        {
            id: "78b58204-e704-1121e4-8c63-c81f66f585f9",
            name: "我的音乐1",
            type: "folder",
            properties: [{name: "创建人", value: "张三"}, {name: "创建日期", value: "2015-01-01"}, {name: "分类", value: "艺术创作/音乐"}],
            url:"/originalService/app/group/documentList/78b58204-e704-11e4-8c63-c81f66f585f9",
            buttons : [{name:"编辑",func : 'Edit'},{name:"移动",func : 'Move'},{name:"删除",func:'Del'},{name:'下载'}],
            empty : true
        },
        {
            id: "78b58204-e704-1121e4-8c63-c81f66f585f9",
            name: "我的音乐2",
            type: "folder",
            properties: [{name: "创建人", value: "张三"}, {name: "创建日期", value: "2015-01-01"}, {name: "分类", value: "艺术创作/音乐"}],
            url:"/originalService/app/group/documentList/78b58204-e704-11e4-8c63-c81f66f585f9",
            buttons : [{name:"编辑",func : 'Edit'},{name:"移动",func : 'Move'},{name:"删除",func:'Del'},{name:'下载'}],
            empty : true
        },
        {
            type: "folder",
            id: "78b58204-e704-11e4-8c63-32ds21ad2WESD2",
            name: "我的音乐3",
            properties: [{name: "创建人", value: "张三"}, {name: "创建日期", value: "2015-01-01"}, {name: "分类", value: "艺术创作/音乐"}],
            url:"/originalService/app/group/documentList/78b58204-e704-11e4-8c63-c81f66f585f9",
            buttons : [{name:"编辑",func : 'Edit'},{name:"移动",func : 'Move'},{name:"删除",func:'Del'},{name:'下载'}],
            empty: false
        },
        {
            id:"4be10198-5ad2-11e5-a590-c81f66f5852112f9",
            name:"夜色.mp4",
            icon:"/originalService/temp/docthumb/2ff84f51-b844-11e5-a288-02000a671f06",
            type:"file",
            properties: [
                {name:"创建人",value:"张三"},
                {name:"创建日期",value:"2015-01-01"},
                {name:"分类",value:"艺术创作/音乐"},
                {name:"原文件名",value:"夜色.mp4"},
                {name:"认证时间",value:"2015-01-01 22:12"}
            ],
            images:[
                {title:"已认证",url:"22.png"}
            ],
            url :"/originalService/app/document/viewdoc/4be10198-5ad2-11e5-a590-c81f66f585f9",
            target:"_blank",
            buttons : [{name:"编辑",func : 'Edit'}]
        }
    ];
    /**
     *
     * init
     */
    var hfiles   = document.getElementById('hfiles');
    var createButton = document.getElementById('createButton');
    var selectButton = document.getElementById('filesLayout').querySelectorAll('.wd-button');
    var utils = {
        $hasClass : function(el,klass){
            return !!el.className.match(new RegExp("(\\s|^)" + klass + "(\\s|$)"));
        },
        $delClass : function(el,klass){
            if(this.$hasClass(el,klass)){
                el.className = el.className.replace(new RegExp( "(\\s|^)" + klass + "(\\s|$)" ),"");
            }
        }
    };
    for(var i = 0; i < selectButton.length; i += 1){
        if(utils.$hasClass(selectButton[i],'active')){
            selectButton[i].setAttribute('data-state','active');
        }else{
            selectButton[i].setAttribute('data-state','normal');
        }
        selectButton[i].onclick = (function(index){
            return function (){
                for(var j = 0 ;  j < selectButton.length ; j += 1){
                    if(index === j){
                        if(selectButton[index].getAttribute('data-state') === 'normal'){
                            selectButton[index].setAttribute('data-state','active');
                            selectButton[index].className += ' ' + 'active';
                            if(selectButton[index].getAttribute('data-style') === 'cube'){
                                utils.$delClass(hfiles,'hfiler-list');
                                hfiles.className += ' ' + 'hfiler-cube';
                            }
                        }
                        continue;
                    }else{
                        selectButton[j].setAttribute('data-state','normal');
                        utils.$delClass(selectButton[j],'active');
                        if(selectButton[index].getAttribute('data-style') === 'list'){
                            utils.$delClass(hfiles,'hfiler-cube');
                            hfiles.className += ' ' + 'hfiler-list';
                        }
                    }
                }
            }
        }(i))
    }
    var configs = {
        wrap : 'hfiles',
        init : function(){},
        classes : 'wd-utils-left'
    };
    var filer = hfiler(configs);

    filer.init(jsonData);

    createButton.onclick = function(){
        filer.build();
    };
    var Edit = function(filerNode,filerId){

    }
};

