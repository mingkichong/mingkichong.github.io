# mingkichong.net

A single-page personal site, built with Jekyll and served by GitHub Pages at
[www.mingkichong.net](https://www.mingkichong.net).

## Running it locally

```
bundle install
bundle exec jekyll serve
```

Then open <http://localhost:4000>. `run.sh` is a shortcut for the second command.

## How the page is put together

`index.html` is empty apart from its front matter; everything lives in the
layout and its includes.

```
_layouts/default.html    assembles the page
_includes/head.html      meta, stylesheets, fonts, favicons
_includes/header.html    the black hero panel, social icons, sticky nav
_includes/summary.html   the "TLDR" JSON-styled bio
_includes/publications.html
_includes/footer.html
_includes/arrow-*.html   the inline SVG scroll arrows
```

Sections are switched on and off from `_config.yml`:

```yaml
include_summary:     true
include_publication: true
```

Setting one to `false` removes both the section and its navigation link.
`assets/js/header.js` works out the nav highlighting from whichever sections are
actually present, so it does not need updating when a flag changes.

Stylesheets, in load order:

```
main.css          normalize.css plus base typography and the pulse keyframes
header.css        the hero panel and sticky nav
summary.css       the TLDR block, and the shared .tooltip rules
site.css          shared bits: scroll arrows, the JSON block, page containers
publications.css  the publication list and its collapsible headings
```

`site.css` was called `about.css` until the about section was removed. Despite
the old name it holds site-wide rules, so it is always needed.

Icons come from Font Awesome 5 over its CDN, using `fas` / `fab` / `far`
classes. There is no local icon font.

## Editing content

Most text lives in `_config.yml` — the title, tagline, the `user_description`
under the TLDR block, and the social usernames that drive the header icons. An
icon only renders when its key is set, so deleting a key removes the icon.

The TLDR block itself is markup, in `_includes/summary.html`.

### Publications

`_includes/publications.html` renders `_data/publications.json`, splitting on
`EntryType`: `article` becomes Journals, `inproceedings` becomes Conferences.
Theses and academic volunteering are hardcoded in that template. To refresh the
data:

1. Export from [DBLP](https://dblp.org) in BibTeX format.
2. Convert it with [bib2json](https://github.com/mayanklahiri/bib2json)
   (needs Node): `node Bib2JSON.js INPUT.bib OUTPUT.json`
3. Save the result over `_data/publications.json`.

Your own name is bolded via `publications.my_author_name` in `_config.yml`.

## Deployment

Pushing to `master` triggers the `pages build and deployment` workflow, which
builds the site and publishes it. There is no workflow file in this repo —
GitHub Pages generates it.

That builder uses **its own gem set and ignores `Gemfile.lock`**, so the lockfile
only affects local development. It also means a plugin has to be one GitHub
Pages supports; `jekyll-seo-tag` is.

Stylesheet and script URLs carry `?v=<build timestamp>`, so a CSS or JS change
reaches visitors immediately instead of sitting behind the cache on an unchanged
filename.

## Notes

**Do not upgrade Jekyll or Sass.** The versions are pinned deliberately. Jekyll
3.9.1 and Ruby Sass 3.7.4 are old, but the site builds and renders correctly and
the upgrade would touch the whole stack.

The Gemfile declares `logger`, `csv`, `base64` and `bigdecimal` because Ruby
3.5+ dropped them from the default gems while Jekyll 3.9 still requires them
without declaring the dependency. `kramdown-parser-gfm` is there because
kramdown 2.x split out the GFM parser Jekyll asks for by default. `liquid` must
stay at 4.0.4 or newer — 4.0.3 calls `String#tainted?`, which Ruby removed in
3.2. Together these are what let the site build on a current Ruby.

There is no analytics and no feed, both removed deliberately.
