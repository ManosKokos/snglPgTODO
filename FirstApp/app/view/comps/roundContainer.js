Ext.define('FirstApp.view.comps.roundContainer', {
    requires:['Ext.Button'],
    extend: 'Ext.container.Container',
    xtype:'roundContainer',
    layout:'absolute',
    width:400,
    height:200,
    on:false,
    y:20,
    style:{
        'border-radius': '300px 300px 0px 0px',
        // 'border': 'solid 1px red',
        'box-shadow': '0px -5px 5px grey',
        overflow: 'visible'
    },
    bodyStyle:{
        'overflow': 'visible',
    },
    items:[
        {
            id:'dada',
            xtype:'button',
            x:185,
            y:72,
            height:30,
            width:30,
            focusCls:'customB',
        
            style:{
                'border-radius':'15px',
                border:'none',
                outline:'none',
                'background-image': 'url(resources/expand.png) !important',
                'background-size': '100%',
                'background-repeat': 'no-repeat',
                'background-color':'Transparent'
            },
            
            listeners:{
                click:function(cmp){
                    var w = Ext.get('outRoundCont');
                    if (w.on){
                        Ext.get('dada').applyStyles(
                            {'background-image': 'url(resources/close.png) !important'}
                        );
                         Ext.get('dada').setStyle('color', 'red');
                        w.setY(w.getY()-100);
                        w.on=false;
                    }else{
                        Ext.get('dada').applyStyles({
                            'background-image': 'url(resources/expand.png) !important'
                        });
                        w.setY(w.getY()+100);
                        w.on=true;
                    }
                }
            }
        },
        {
            xtype:'button',
            x:180,
            y:-15,
            height:40,
            width:40,
            style:{
                'overflow': 'visible',
                'border-radius':'20px',
                border:'none',
                outline:'none',
                'padding': '10px 10px 10px 10px !important',
                'background-image': 'url(resources/map.png)',
                'background-repeat': 'no-repeat',
                'background-size': '90%',
                'background-color':'orange',
                'box-shadow': '0px 0px 4px 4px #e2e2e2'
            },
        },
        {
            xtype:'button',
            x:270,
            y:5,
            height:40,
            width:40,
            style:{
                'overflow': 'visible',
                'border-radius':'20px',
                border:'none',
                outline:'none',
                padding: '10px',
                'background-image': 'url(resources/danger.png)',
                'background-repeat': 'no-repeat',
                'background-size': '90%',
                'background-color':'red',
                'box-shadow': '0px 0px 4px 4px #ffa0a0'
            },

        },
        {
            xtype:'button',
            x:90,
            y:5,
            height:40,
            width:40,
            style:{
                'overflow': 'visible',
                'border-radius':'20px',
                border:'none',
                outline:'none',
                padding: '10px',
                'background-image': 'url(resources/chart.png)',
                'background-repeat': 'no-repeat',
                'background-size': '90%',
                'background-color':'white',
                'box-shadow': '0px 0px 4px 4px #e2e2e2'
            },
        }
    ]
});