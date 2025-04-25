#!/usr/bin/env python3
"""
Fix all bullet points in the presentation to use the Sparq skull logo.
This script modifies the HTML directly to add inline styling for bullet points.
"""

import re
import sys
from pathlib import Path

def fix_bullet_points(file_path):
    """
    Replace all bullet point lists with custom styled lists using skull image.
    """
    # Read the HTML file
    with open(file_path, 'r', encoding='utf-8') as file:
        html_content = file.read()

    # Regular expression pattern to find <ul> tags with optional classes
    ul_pattern = r'<ul(?:\s+class="[^"]*")?>(.*?)</ul>'
    
    # Find all <ul> tag blocks with their content using re.DOTALL to match across multiple lines
    ul_blocks = re.findall(ul_pattern, html_content, re.DOTALL)
    
    for ul_block in ul_blocks:
        # If this is already a customized block with image, skip it
        if '<img src="attached_assets/Bulletpoint_Logo_Skull(Red) copy.png"' in ul_block:
            continue
            
        # Regular expression to find <li> tags with their content
        li_pattern = r'<li>(.*?)</li>'
        
        # Find all <li> tags within this <ul> block
        li_items = re.findall(li_pattern, ul_block, re.DOTALL)
        
        # Skip if there are no li items
        if not li_items:
            continue
            
        # Create replacement for each <li> item
        modified_block = ul_block
        for li_content in li_items:
            # Original <li> tag and content
            original_li = f'<li>{li_content}</li>'
            
            # New <li> tag with skull image and styling
            new_li = f"""<li style="padding-left: 28px; position: relative; margin-bottom: 8px; list-style: none;">
                <img src="attached_assets/Bulletpoint_Logo_Skull(Red) copy.png" style="width: 16px; height: 16px; position: absolute; left: 0; top: 4px;">
                {li_content}
            </li>"""
            
            # Replace in the block
            modified_block = modified_block.replace(original_li, new_li)
        
        # Replace the original <ul> block with the modified one in the HTML content
        original_ul = f'<ul>{ul_block}</ul>'
        modified_ul = f'<ul style="list-style: none; padding-left: 0;">{modified_block}</ul>'
        html_content = html_content.replace(original_ul, modified_ul)
        
        # Also handle <ul> with classes
        class_pattern = r'<ul\s+class="([^"]*)">{}</ul>'.format(re.escape(ul_block))
        class_matches = re.findall(class_pattern, html_content, re.DOTALL)
        
        for class_match in class_matches:
            original_ul_with_class = f'<ul class="{class_match}">{ul_block}</ul>'
            modified_ul_with_class = f'<ul class="{class_match}" style="list-style: none; padding-left: 0;">{modified_block}</ul>'
            html_content = html_content.replace(original_ul_with_class, modified_ul_with_class)
    
    # Write the modified HTML back to the file
    with open(file_path, 'w', encoding='utf-8') as file:
        file.write(html_content)
    
    print(f"Bullet points in {file_path} have been updated.")

if __name__ == "__main__":
    # The HTML file to modify
    file_path = "index.html"
    if not Path(file_path).exists():
        print(f"Error: File '{file_path}' not found.")
        sys.exit(1)
        
    fix_bullet_points(file_path)