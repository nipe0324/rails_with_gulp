module ApplicationHelper
  def gulp_asset_path(path)
    new_path = REV_MANIFEST[path] if defined?(REV_MANIFEST)
    raise "path miss match error: #{path}" if new_path.blank?

    return "/assets/javascripts/#{new_path}" if new_path.end_with?('.js')
    "/assets/stylesheets/#{new_path}"        if new_path.end_with?('.css')
  end
end
