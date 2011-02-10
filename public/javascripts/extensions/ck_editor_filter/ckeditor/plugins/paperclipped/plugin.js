	CKEDITOR.plugins.add('paperclipped',
	{
		init: function(editor){
			var pluginName = 'paperclipped';
//			editor.addCommand( 'Paperclipped',  );
			editor.ui.addButton('Paperclipped',
			{
				label: 'Image bucket',
				click: function(){
					if ($('show-bucket'))
						if ($("asset-bucket").visible())
							$("asset-bucket").hide()
		        else
							$("asset-bucket").centerInViewport()
							$("asset-bucket").show()
				},
	      command: 'Paperclipped',
				icon: this.path+'images/icon.png'
			});
		}
	})