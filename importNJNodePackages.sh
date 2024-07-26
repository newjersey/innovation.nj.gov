#!/usr/bin/env bash

echo "Installing Node dependencies..."
npm install

echo "Deleting njwds/dist directory if it exists..."
rm -rf assets/njwds/dist

echo "Deleting feedback-widget/ directory if it exists..."
rm -rf assets/feedback-widget

echo "Creating njwds/dist directory..."
mkdir -p assets/njwds/dist

echo "Creating feedback-widget/ directory..."
mkdir -p assets/feedback-widget

echo "Copying NJWDS files from npm package into project..."
cp -r ./node_modules/@newjersey/njwds/dist/* ./assets/njwds/dist

echo "Copying NJ Feedback Widget files from npm package into project..."
cp -r ./node_modules/@newjersey/feedback-widget/feedback-widget.min.js ./assets/feedback-widget/
