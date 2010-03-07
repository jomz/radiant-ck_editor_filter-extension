# Uncomment this if you reference any of your controllers in activate
# require_dependency 'application_controller'

class CkEditorFilterExtension < Radiant::Extension
  version "1.0"
  description "Describe your extension here"
  url "http://yourwebsite.com/ck_editor_filter"
  
  # define_routes do |map|
  #   map.namespace :admin, :member => { :remove => :get } do |admin|
  #     admin.resources :ck_editor_filter
  #   end
  # end
  
  def activate
    CkEditorFilter
    Admin::PagesController.send :include, CkeditorInterface
    admin.page.edit.add :part_controls, "editor_control"
  end
  
  def deactivate
    # admin.tabs.remove "Ck Editor Filter"
  end
  
end
