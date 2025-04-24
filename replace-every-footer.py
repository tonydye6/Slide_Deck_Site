#!/usr/bin/env python3

import re

# Read the HTML file
with open('index.html', 'r') as file:
    html_content = file.read()

# Define the pattern for slide footers with SVG logos
svg_pattern = r'(<div class="slide-footer">)\s*<svg[^>]*>.*?</svg>\s*(<span class="slide-footer-text">.*?</span>)'
# Define the pattern for slide footers with missing closing span tags
incomplete_span_pattern = r'(<div class="slide-footer">)\s*<img[^>]*>\s*<span class="slide-footer-text">([0-9]+\s*/\s*[0-9]+)(?!</span>)'

# Replace SVG logos with white PNG logo
replacement = r'\1\n                        <img src="attached_assets/Logo_Skull(White).png" alt="Sparq Skull Logo" class="footer-logo-img">\n                        \2'
# Fix incomplete span tags
fix_span = r'\1\n                        <img src="attached_assets/Logo_Skull(White).png" alt="Sparq Skull Logo" class="footer-logo-img">\n                        <span class="slide-footer-text">\2</span>'

# Apply the replacements using regex with DOTALL flag to match across lines
html_content = re.sub(svg_pattern, replacement, html_content, flags=re.DOTALL)
html_content = re.sub(incomplete_span_pattern, fix_span, html_content, flags=re.DOTALL)

# Write the modified content back to the file
with open('index.html', 'w') as file:
    file.write(html_content)

print("All slide footers have been updated with the white skull logo!")