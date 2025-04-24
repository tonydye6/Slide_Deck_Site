#!/usr/bin/env python3

import re

# Read the HTML file
with open('index.html', 'r') as file:
    html_content = file.read()

# Pattern to match all slide footers (except slide 1)
slide_pattern = r'(<!-- Slide ([2-9]|[1-9][0-9]+)[^>]*>.*?)<!-- Slide Footer with Skull Logo -->\s*<div class="slide-footer">.*?</div>\s*</div>\s*</section>'

def footer_replacement(match):
    # Return the slide content with a properly formatted footer with just the skull logo
    return f'{match.group(1)}<!-- Slide Footer with Skull Logo -->\n                    <div class="slide-footer">\n                        <img src="attached_assets/Footer_Logo_Skull(White).png" alt="Sparq Skull Logo" class="footer-logo-img">\n                    </div>\n                </div>\n            </section>'

# Apply the replacements
fixed_html = re.sub(slide_pattern, footer_replacement, html_content, flags=re.DOTALL)

# Write the modified content back to the file
with open('index.html', 'w') as file:
    file.write(fixed_html)

print("All slide footers have been updated to show only the skull logo in the bottom left corner!")