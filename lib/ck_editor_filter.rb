class CkEditorFilter < TextFilter
  filter_name 'CKEditor'
  description_file File.dirname(__FILE__) + "/../ckeditor.html"
  def filter(text)
	  text
  end
end
