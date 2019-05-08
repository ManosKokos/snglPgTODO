/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('FirstApp.view.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'FirstApp.view.comps.centerComp',
        'FirstApp.view.comps.EastComp'
    ],

    layout:'border',
    items:[
        {
            xtype:'centerComp',
            style:{
                overflow:'visible'
            },
            bodyStyle:{
                overflow:'visible'
            }
        },
        {
            xtype:'panel',
            region:'east',
            // resizable:true,
            collapsible:true,
            widht:300,
            style:{
                'box-shadow': '-2px 0px 4px 4px #e2e2e2',
                border:'2px solid #e2e2e2'
            },
            items:[
                {   
                    xtype:'container',
                    layout:'vbox',
                    items:[
                        {
                            xtype:'container',
                            layout : {
                                type  : 'hbox',
                                pack  : 'center',
                                align : 'middle'
                            },
                            items:[
                                {
                                xtype:'datefield',
                                value:new Date()
                            }]
                        },
                        {
                            xtype:'eastComp',
                    }   ]
                    
                }   ]
        }
    ]

    });
