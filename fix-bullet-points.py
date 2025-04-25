#!/usr/bin/env python3
"""
Fix all bullet points in the presentation to use the Sparq skull logo.
This script modifies the HTML directly to add inline styling for bullet points.
It ensures all bullet lists in the presentation use the Sparq skull logo.
"""

import re
import sys
from pathlib import Path

def fix_bullet_points(file_path):
    """
    Replace all bullet point lists with custom styled lists using skull image.
    Uses a regex-based approach for more robust matching.
    """
    # Read the HTML file
    with open(file_path, 'r', encoding='utf-8') as file:
        html_content = file.read()

    # Keep track of how many lists we've modified
    lists_modified = 0
    items_modified = 0

    # Process all <ul> tags, with or without attributes
    ul_pattern = re.compile(r'<ul[^>]*>(.*?)</ul>', re.DOTALL)
    li_pattern = re.compile(r'<li[^>]*>(.*?)</li>', re.DOTALL)
    
    def replace_li(match):
        """Replace a <li> tag with a customized one that has the skull bullet."""
        nonlocal items_modified
        
        # Get the original content of the <li> tag
        li_content = match.group(1).strip()
        
        # Skip if this <li> already has our custom bullet
        if 'Bulletpoint_Logo_Skull(Red) copy.png' in li_content:
            return match.group(0)
        
        # Create the new <li> with our custom bullet
        new_li = f"""<li style="padding-left: 28px; position: relative; margin-bottom: 8px; list-style: none;">
            <img src="attached_assets/Bulletpoint_Logo_Skull(Red) copy.png" style="width: 16px; height: 16px; position: absolute; left: 0; top: 4px;">
            {li_content}
        </li>"""
        
        items_modified += 1
        return new_li
    
    def replace_ul_content(match):
        """Replace the content of a <ul> tag, processing each <li> tag within it."""
        nonlocal lists_modified
        
        # Get all attributes of the <ul> tag
        ul_opening_tag = match.group(0).split('>')[0] + '>'
        ul_content = match.group(1)
        
        # Skip if this list already has our custom styling
        if 'list-style: none; padding-left: 0;' in ul_opening_tag:
            return match.group(0)
        
        # Add our custom styling to the <ul> tag
        if 'style="' in ul_opening_tag:
            ul_opening_tag = ul_opening_tag.replace('style="', 'style="list-style: none; padding-left: 0; ')
        else:
            ul_opening_tag = ul_opening_tag[:-1] + ' style="list-style: none; padding-left: 0;">'
        
        # Process all <li> tags within the <ul>
        processed_ul_content = li_pattern.sub(replace_li, ul_content)
        
        lists_modified += 1
        return f"{ul_opening_tag}{processed_ul_content}</ul>"
    
    # Replace all <ul> tags and their content
    modified_html = ul_pattern.sub(replace_ul_content, html_content)
    
    # Write the modified HTML back to the file
    with open(file_path, 'w', encoding='utf-8') as file:
        file.write(modified_html)
    
    print(f"Updated {lists_modified} lists with {items_modified} bullet points in {file_path}.")

if __name__ == "__main__":
    # The HTML file to modify
    file_path = "index.html"
    if not Path(file_path).exists():
        print(f"Error: File '{file_path}' not found.")
        sys.exit(1)
    
    # Run the bullet point fix function
    fix_bullet_points(file_path)