#!/bin/bash

# This script ensures all slide footers are consistent, with proper closing tags and indentation

# Create a temporary file
tmp_file=$(mktemp)

# Use sed to fix all slide footers
sed -E '
  # Match slide footer divs that need fixing
  /<div class="slide-footer">[[:space:]]*<img/,/<\/div>/ {
    # Fix the span tag if its missing a closing tag
    s|<span class="slide-footer-text">([0-9]+ / [0-9]+)([^<]*$)|<span class="slide-footer-text">\1</span>|
    # Fix indentation of the closing div
    s|^[[:space:]]*<\/div>|                        </div>|
  }
' index.html > "$tmp_file"

# Replace the original file with our modified version
mv "$tmp_file" index.html