#!/bin/bash
for i in $(seq 3 33); do
  old_text="$i / 33"
  new_text="$i / 44"
  sed -i "s|$old_text|$new_text|g" index.html
done
chmod +x update_footers.sh
./update_footers.sh
