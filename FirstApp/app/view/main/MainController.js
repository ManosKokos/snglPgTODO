/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('FirstApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function (sender, record) {
        msg = 'Email: '+record.get('mail')+'  Phonenumber: '+record.get('phone');
        Ext.toast({
            html: msg,
            closable: false,
            align: 't',
            slideInDuration: 400,
            minWidth: 400
        });
        // Ext.Msg.alert('HEllo THere');
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    }
});
