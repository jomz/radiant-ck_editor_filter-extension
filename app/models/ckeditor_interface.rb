module CkeditorInterface
  def self.included(base)
    base.class_eval {
      include CkeditorInstanceMethods
      before_filter :add_ckeditor_interface, :only => [:edit, :new]
    }
  end
  
  module CkeditorInstanceMethods
    def add_ckeditor_interface
      include_javascript 'extensions/ck_editor_filter/ckeditor/ckeditor'
      include_javascript 'extensions/ck_editor_filter/radiant.ckeditor'
    end
  end
end