Ext.define('FirstApp.view.comps.EastComp',{
    requires:[
        'FirstApp.store.CustomStore',
        'FirstApp.view.main.MainController'
    ],
    extend:'Ext.grid.Panel',
    xtype:'eastComp',
    id:'eastComp',
    heigth:500,
    width:275,
    store:{
        type:'cStore'
    },

    controller:'main',
    columns:[
        {text:'Name', dataIndex:'firstName' , flex:1}
    ],

    listeners: {
        select: 'onItemSelected'
    }
});