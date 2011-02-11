function instantiateCkEditor(partIndex){
	CKEDITOR.config.startupOutlineBlocks = true
	CKEDITOR.config.colorButton_enableMore = false
	CKEDITOR.config.protectedSource.push( /<r:([\S]+)*>.*<\/r:\1>/g )
	CKEDITOR.config.protectedSource.push( /<r:[^>\/]*\/>/g )
	CKEDITOR.config.extraPlugins = 'paperclipped,MediaEmbed'
	CKEDITOR.config.toolbar =
	[
	    ['Source','-','Save','Preview','-','Templates'],
	    ['Cut','Copy','Paste','PasteText','PasteFromWord','-','Print', 'SpellChecker', 'Scayt'],
	    ['Undo','Redo','-','Find','Replace','-','SelectAll','RemoveFormat'],
	    // ['Form', 'Checkbox', 'Radio', 'TextField', 'Textarea', 'Select', 'Button', 'ImageButton', 'HiddenField'],
	    ['Image','Paperclipped', 'MediaEmbed', 'Table','HorizontalRule','SpecialChar','PageBreak'],
			'/',
	    ['Styles','Format'],
	    ['Bold','Italic','Underline','Strike','-','Subscript','Superscript'],
	    ['NumberedList','BulletedList','-','Outdent','Indent','Blockquote'],
	    ['JustifyLeft','JustifyCenter','JustifyRight'],
	    ['Link','Unlink','Anchor'],
	    ['Maximize','-','About']
	]
	CKEDITOR.on('instanceReady',
		function( evt ) {
			var editor = evt.editor
			var ck_holder = $("cke_" + editor.name)
			if(ck_holder){
				Droppables.add(ck_holder, {
					accept: 'asset',
					onDrop: function(element) {
						var link = element.select('a.bucket_link')[0]
						var classes = element.className.split(' ')
						var tag_type = classes[0]
						if(tag_type == 'image') {
			        var tag = '<img src="'+ link.href +'" />'
			      }
			      else {
			        var asset_id = element.id.split('_').last();
			        var tag = '<a href="'+ link.href +'">'+ link.title +'</a>'
			      }
						var element = CKEDITOR.dom.element.createFromHtml(tag)
						editor.insertElement(element)
				  }
				})
			}
    }
	)
	
	var usedFilter = $('part_' + partIndex +'_filter_id')
	if(usedFilter.value == 'CKEditor'){
		putInEditor(partIndex)
	}
	
	var timer = setInterval(function() { 
		// Make image asset draggable
		Asset.MakeDraggables
		// Make asset bucket thumbnails draggable 
	  $$('div.resized').each(function(element){
			if(!element.hasClassName("move"))
	    	new Draggable(element, { revert: true })
	    	element.addClassName('move')
	  })
	}, 5000);
	
}

function toggleEditor(partIndex){
	var filterId = $('part_' + partIndex + '_filter_id')
	if(filterId.value == 'CKEditor'){
		putInEditor(partIndex)
	} else {
		removeEditor(partIndex)
	}
}

function removeEditor(partIndex){
	var instance = CKEDITOR.instances['part_'+ partIndex +'_content']
	instance.destroy()
}

function putInEditor(partIndex){
	var textarea = $('part_' + partIndex + '_content')
	CKEDITOR.replace(textarea)
}
