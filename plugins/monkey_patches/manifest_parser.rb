module Bridgetown
  module Utils
    def parse_webpack_manifest_file(site, asset_type)
      manifest_file = site.in_root_dir(".bridgetown-webpack", "manifest.json")
      return "MISSING_WEBPACK_MANIFEST" unless File.exist?(manifest_file)

      manifest = JSON.parse(File.read(manifest_file))

      known_assets = %w(js css)
      if known_assets.include?(asset_type)
        asset_path = manifest.dig("main", asset_type) || manifest["main.#{asset_type}"]

        log_webpack_asset_error(asset_type) && return if asset_path.nil?

        asset_path = asset_path.split("/").last
        return [static_frontend_path(site), asset_type, asset_path].join("/")
      end

      Bridgetown.logger.error("Unknown Webpack asset type", asset_type)
      nil
    end
  end
end