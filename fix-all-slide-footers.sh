#!/bin/bash

# Create a temporary file
tmp_file=$(mktemp)

# Use a more advanced sed command to fix all slide footers in one go
sed '
  # When we find a slide footer div
  /<div class="slide-footer">/,/<\/div>/ {
    # Fix the indentation of the img tag
    s/^[[:space:]]*<img/                        <img/
    
    # Fix the span tags - adding closing tag if missing and fixing indentation
    s/^[[:space:]]*<span class="slide-footer-text">([0-9]+ \/ [0-9]+)$/                        <span class="slide-footer-text">\1<\/span>/
    
    # Fix the indentation of the closing div
    s/^[[:space:]]*<\/div>/                    <\/div>/
  }
' index.html > "$tmp_file"

# Replace the original file with our modified version
mv "$tmp_file" index.html

echo "All slide footers have been fixed!"