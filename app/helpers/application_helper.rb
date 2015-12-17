module ApplicationHelper
  def gulp_asset_path(path)
    path = REV_MANIFEST[path] if defined?(REV_MANIFEST)
    raise 'path miss match error' if path.blank?
    return "/assets/javascripts/#{path}" if path.end_with?('.js')
    "/assets/stylesheets/#{path}" if path.end_with?('.css')
  end
end
