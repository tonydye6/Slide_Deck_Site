#!/bin/bash

# Create a temporary file
tmp_file=$(mktemp)

# Use sed to:
# 1. Remove all SVG logo code
# 2. Add the white PNG logo image
# 3. Fix any nested span tags

sed -E '
  # Find lines with slide-footer div
  /<div class="slide-footer">/,/<\/div>/ {
    # Replace content inside the slide-footer div
    s|<svg class="logo-skull-small".*(<span class="slide-footer-text">.*<\/span>)|\n                            <img src="attached_assets/Logo_Skull(White).png" alt="Sparq Skull Logo" class="footer-logo-img">\n                            \1|
    # Skip lines until we get to the end of the SVG
    /<\/svg>/d
    # Delete the SVG path lines
    /<path /d
    /<circle /d
    # Fix nested spans
    s|<span class="slide-footer-text"><span class="slide-footer-text">(.*)</span>|<span class="slide-footer-text">\1|
  }
' index.html > "$tmp_file"

# Replace the original file with our modified version
mv "$tmp_file" index.html