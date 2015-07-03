  CKEDITOR.plugins.add('paperclipped',
  {
    init: function(editor){
      var pluginName = 'paperclipped';
      editor.ui.addButton('Paperclipped',
      {
        label: 'Image bucket',
        click: function(){
          $$("p.note a[href=#attach_asset]").first().click()
        },
        command: 'Paperclipped',
        icon: this.path+'images/icon.png'
      });
    }
  })
