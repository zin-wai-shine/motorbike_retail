#!/bin/bash

# Create fonts directory in public folder
mkdir -p public/fonts

# Copy fonts from Downloads to public/fonts
cp "/Users/zinwaishine/Downloads/alphacorsa/Alphacorsa Personal Use.ttf" "public/fonts/"
cp "/Users/zinwaishine/Downloads/alphacorsa/Alphacorsa Personal Use Italic.ttf" "public/fonts/"

# Verify
echo "Fonts copied to public/fonts/:"
ls -lh public/fonts/

