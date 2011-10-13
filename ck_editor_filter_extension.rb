# Uncomment this if you reference any of your controllers in activate
# require_dependency 'application_controller'
require "radiant-ck_editor_filter-extension"

class CkEditorFilterExtension < Radiant::Extension
  version     RadiantCkEditorFilterExtension::VERSION
  description RadiantCkEditorFilterExtension::DESCRIPTION
  url         RadiantCkEditorFilterExtension::URL
  
  # define_routes do |map|
  #   map.namespace :admin, :member => { :remove => :get } do |admin|
  #     admin.resources :ck_editor_filter
  #   end
  # end
  
  def activate
    CkEditorFilter
    Admin::PagesController.send :include, CkeditorInterface
    admin.page.edit.add :part_controls, "editor_control"
    
    # Overwrite insert link href from # to asset.url, so CK knows where to get the image.
    Admin::AssetsHelper.class_eval do 
      def asset_insertion_link(asset)
        radius_tag = asset.asset_type.default_radius_tag || 'link';
        link_to t('clipped_extension.insert'), asset.asset.url, :class => 'insert_asset', :rel => "#{radius_tag}_#{Radiant.config['assets.insertion_size']}_#{asset.id}"
      end
    end
  end
  
  def deactivate
    # admin.tabs.remove "Ck Editor Filter"
  end
  
end
