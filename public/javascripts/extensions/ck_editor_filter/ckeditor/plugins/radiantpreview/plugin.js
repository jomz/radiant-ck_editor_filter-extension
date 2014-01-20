CKEDITOR.plugins.add('radiantpreview', {
  icons: 'radiantpreview',
  init: function(editor){
		editor.addCommand('showPreview', {
			exec: function(editor){
				if ($('show-preview')){
					$('show-preview').click()
				}
			}
		});
		editor.ui.addButton( 'radiantpreview', {
		  label: 'Preview',
		  command: 'showPreview'
		});
  }
});
