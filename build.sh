#!/usr/bin/env bash
cat ./dist/assess.min.js | echo "javascript:(()=>{$(cat)})();" > ./dist/bookmark.js