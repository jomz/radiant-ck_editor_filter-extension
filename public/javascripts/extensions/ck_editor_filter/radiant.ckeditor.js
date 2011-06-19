function instantiateCkEditor(partIndex){
	CKEDITOR.config.startupOutlineBlocks = true
	CKEDITOR.config.colorButton_enableMore = false
	CKEDITOR.config.protectedSource.push( /<r:([\S]+)*>.*<\/r:\1>/g )
	CKEDITOR.config.protectedSource.push( /<r:[^>\/]*\/>/g )
	CKEDITOR.config.extraPlugins = 'paperclipped,MediaEmbed,radiantpreview'
	CKEDITOR.config.forcePasteAsPlainText = true
	CKEDITOR.config.height = 500
	CKEDITOR.config.toolbar =
	[
		['Styles','Format'],
    ['Bold','Italic','Strike','-','Subscript','Superscript'],
    ['NumberedList','BulletedList','-','Outdent','Indent','Blockquote'],
    ['RadiantPreview', 'Paste', 'RemoveFormat'],
    ['Find','Replace'],
    ['Image','Paperclipped', 'MediaEmbed', 'Table','HorizontalRule','SpecialChar'],
    ['Link','Unlink','Anchor'],
    ['Source', '-', 'Maximize']
	//// 	Alternative toolbar config
	//    ['Source','-','Templates'],
	//    ['Cut','Copy','Paste','PasteText','PasteFromWord','-','Print', 'SpellChecker','-','RadiantPreview'],
	//    ['Undo','Redo','-','Find','Replace','-','SelectAll','RemoveFormat'],
	//    ['Image','Paperclipped', 'MediaEmbed', 'Table','HorizontalRule','SpecialChar','PageBreak'],
	//		'/',
	//    ['Styles','Format'],
	//    ['Bold','Italic','Underline','Strike','-','Subscript','Superscript'],
	//    ['NumberedList','BulletedList','-','Outdent','Indent','Blockquote'],
	//    ['JustifyLeft','JustifyCenter','JustifyRight'],
	//    ['Link','Unlink','Anchor'],
	//    ['Maximize','-','About']
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

InsertIntoCk = Behavior.create({
  onclick: function(e) {
    if (e) e.stop();
    var part_name = TabControlBehavior.instances[0].controller.selected.caption;
    var textbox = $('part_' + part_name + '_content');

    var tag_parts = this.element.getAttribute('rel').split('_');
    var href = this.element.getAttribute('href')
    var tag_name = tag_parts[0];
    var asset_size = tag_parts[1];
    var asset_id = tag_parts[2];

    if($('part_' + part_name + '_filter_id').value == 'CKEditor'){
      editor = CKEDITOR.instances['part_'+ part_name +'_content']
      if(tag_name == 'image')
        editor.insertHtml("<img src=\"" + href + "\" alt=\"\" />")
      else
        editor.insertHtml("<a href=\"" + href + "\">" + this.element.up(".back").down(".title").innerHTML + "</a>")
    }
    else{
      var radius_tag = '<r:asset:' + tag_name;
      if (asset_size != '') radius_tag = radius_tag + ' size="' + asset_size + '"';
      radius_tag =  radius_tag +' id="' + asset_id + '" />';
      Asset.InsertAtCursor(textbox, radius_tag);
    }
  }
});
