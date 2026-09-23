source "https://rubygems.org"

# Hello! This is where you manage which Jekyll version is used to run.
# When you want to use a different version, change it below, save the
# file and run `bundle install`. Run Jekyll with `bundle exec`, like so:
#
#     bundle exec jekyll serve
#
# This will help ensure the proper Jekyll version is running.
# Happy Jekylling!
gem "jekyll", "~> 3.9.1"

# kramdown 2.x moved the GFM parser, which jekyll 3.9 asks for by default,
# out into its own gem.
gem "kramdown-parser-gfm", "~> 1.1"

# If you want to use GitHub Pages, remove the "gem "jekyll"" above and
# uncomment the line below. To upgrade, run `bundle update github-pages`.
# gem "github-pages", group: :jekyll_plugins

# If you have any plugins, put them here!
group :jekyll_plugins do
  gem "jekyll-seo-tag", "~> 2.0"
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]

# Ruby 3.5+ / 4.x dropped these from the default gems, but jekyll 3.9.1 and
# its dependencies still require them without declaring the dependency.
gem "logger"
gem "csv"
gem "base64"
gem "bigdecimal"
