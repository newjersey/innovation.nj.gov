echo "Installing Node dependencies..."
npm install

echo "Creating njwds/dist directory..."
mkdir -p assets/njwds/dist

echo "Copying NJWDS files from npm package into project..."
cp -r ./node_modules/@newjersey/njwds/dist/* ./assets/njwds/dist