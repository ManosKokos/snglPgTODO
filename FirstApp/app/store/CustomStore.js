Ext.define('FirstApp.store.CustomStore',{
    requires:'FirstApp.model.CustomModel',
    extend:'Ext.data.Store',
    xtype:'cStore',
    alias:'store.cStore',
    model:'FirstApp.model.CustomModel',
    storeId: 'CustomStore',
    data:[
        ['John',     'John@something.com',      'N/A'],
        ['George',   'George@something.com',  'N/A'],
        ['Max',      'Max@something.com',        'N/A']
    ]
});