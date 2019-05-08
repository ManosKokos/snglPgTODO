Ext.define('FirstApp.model.CustomModel',{
    extend: 'Ext.data.Model',
    xtype: 'cModel',

    fields:[
        {name:'firstName', type:'string'},
        {name:'mail', type:'string'},
        {name:'phone', type:'string'}
    ]
});