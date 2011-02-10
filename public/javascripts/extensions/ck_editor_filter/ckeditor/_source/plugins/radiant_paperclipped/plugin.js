CKEDITOR.plugins.add('radiant_paperclipped',
{
	init: function(editor){
		var pluginName = 'radiant_paperclipped';
		editor.addCommand(pluginName, function(){
			alert('foo')
		});
		editor.ui.addButton('RadiantPaperclipped',
		{
			label: 'Uploaded images',
			click: function(){
				if ($('show-bucket'))
					if ($("asset-bucket").visible())
						$("asset-bucket").hide()
	        else
						$("asset-bucket").centerInViewport()
						$("asset-bucket").show()
			}
		});
	}
});