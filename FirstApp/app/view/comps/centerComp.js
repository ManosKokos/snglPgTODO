Ext.define('FirstApp.view.comps.centerComp', {
    extend: 'Ext.panel.Panel',
    xtype:'centerComp',

    requires:['FirstApp.view.comps.roundContainer'],
    region: 'center',
    layout : {
        type  : 'vbox',
        pack  : 'end',
        align : 'middle'
    },
    bodyStyle:{
        "background-color":"#f2f2f2",
        border:'0.05px solid #e0e0e0'
    },
    style:{
        border:'0.05px solid #e0e0e0'
    },
    items:[
        {
            id:'outRoundCont',
            xtype:'container',
            layout:'absolute',
            items:[
                {
                    xtype:'roundContainer'
                }
            ],
            listeners:{
                afterlayout:function(cmp){
                    var w = Ext.get('outRoundCont');
                    w.setY(w.getY()+100);
                    // Ext.Msg.alert('HELLO');
                }
            }
        }
    ]
});