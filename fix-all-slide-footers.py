#!/usr/bin/env python3

import re

# Read the HTML file
with open('index.html', 'r') as file:
    html_content = file.read()

# First, create a consistent slide pattern for all slides except slide 1
slide_pattern = r'(<!-- Slide ([2-9]|[1-9][0-9]+)[^>]*>.*?)<!-- Slide Footer with Skull Logo -->\s*<div class="slide-footer">.*?</div>\s*</div>\s*</section>'

slide_count = 44  # Total number of slides

def footer_replacement(match):
    slide_num = match.group(2)
    # Return the slide content with a properly formatted footer
    return f'{match.group(1)}<!-- Slide Footer with Skull Logo -->\n                    <div class="slide-footer">\n                        <img src="attached_assets/Footer_Logo_Skull(White).png" alt="Sparq Skull Logo" class="footer-logo-img">\n                        <span class="slide-footer-text">{slide_num} / {slide_count}</span>\n                    </div>\n                </div>\n            </section>'

# Apply the replacements
fixed_html = re.sub(slide_pattern, footer_replacement, html_content, flags=re.DOTALL)

# Write the modified content back to the file
with open('index.html', 'w') as file:
    file.write(fixed_html)

print("All slide footers have been fixed with the correct Footer_Logo_Skull(White).png and proper slide numbering!")