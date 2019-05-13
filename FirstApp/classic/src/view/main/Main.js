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
            region:'center',
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
                },{
                    
                    region:'east',
                    layout:'vbox',
                    width:25,
                    
                    items:[
                        {
                            xtype:'button',
                            height:20,
                            width:20,
                            style:{
                                'background-image': 'url(resources/eastExpand.png) !important',
                                'background-repeat': 'no-repeat',
                                'background-size': '100%',
                                'background-repeat': 'no-repeat',
                                'background-color':'white'
                            },
                            listeners:{
                                click:function(){
                                    var ePan = Ext.get('compToCollapse');
                                    if (ePan.collapsed){
                                        ePan.collapsed= false;
                                        ePan.component.expand();
                                    }else{
                                        ePan.collapsed = true;
                                        ePan.component.collapse();
                                    }
                                }
        
                            }
                        }
                    ]
                }
                
            ]
        },
        
        {
            xtype:'panel',
            region:'east',
            id:'compToCollapse',
            collapsed:false,
            collapseMode:'mini',
            layout:{
                type:'vbox',
                align:'middle'
            },
            width:300,
            style:{
                'box-shadow': '-2px 0px 2px 2px #e2e2e2',
                border:'2px solid #e2e2e2'
            },
            items:[
                {
                    layout:{
                        type:'hbox',
                        align:'middle',
                        pack:'center'
                    },
                    items:[{
                        xtype:'datefield',
                        value:new Date(),
                    }]
                },{
                    xtype:'eastComp',
                }
            ]
        }
    ]

    });
