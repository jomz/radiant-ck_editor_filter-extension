CKEDITOR.plugins.add('paperclip', {
  icons: 'paperclip',
  init: function(editor){
		editor.addCommand('toggleImageBucket', {
			exec: function(editor){
				$$("p.note a[href=#attach_asset]").first().click()
			}
		});
		editor.ui.addButton( 'paperclip', {
		  label: 'Image Bucket',
		  command: 'toggleImageBucket',
		  toolbar: 'insert'
		});
  }
});
