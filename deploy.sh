#!/bin/bash

if [ "$TRAVIS_BRANCH" = "master" ]; then
 git subtree push --prefix dist https://$GITHUB_TOKEN:x-oauth-basic@github.com/gabrieledarrigo/nasa-apod.git gh-pages
fi