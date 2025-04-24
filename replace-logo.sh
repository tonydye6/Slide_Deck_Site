#!/bin/bash

# Create a temporary file
tmp_file=$(mktemp)

# The replacement code for the footer logo
replacement='                            <img src="attached_assets/Logo_Skull(White).png" alt="Sparq Skull Logo" class="footer-logo-img">
                            <span class="slide-footer-text">'

# Read each line of the file
while IFS= read -r line; do
  # Check if this line contains the SVG logo opening tag
  if [[ $line == *"<svg class=\"logo-skull-small\""* ]]; then
    # Skip the next 6 lines (the SVG content)
    for i in {1..6}; do
      read -r skip_line
    done
    
    # Read the next line (should be the slide number)
    read -r slide_number
    
    # Write the replacement plus the slide number
    echo "$replacement$slide_number"
  else
    # Write the original line
    echo "$line"
  fi
done < index.html > "$tmp_file"

# Replace the original file with our modified version
mv "$tmp_file" index.html