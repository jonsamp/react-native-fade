cd ../
yarn build
FILEPATH=$(npm pack | tail -1)
cd example
yarn add ../${FILEPATH}
echo "✅ Updated ${FILEPATH}"