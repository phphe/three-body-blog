#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 进入生成的文件夹
cd dist
rm .git -rf
# use git lfs
cp ../.gitattributes ./
# custom domain
echo "threebodyblog.phphe.com" > CNAME
# required. Or file or directory which starts with underscore can't be found. https://github.blog/2009-12-29-bypassing-jekyll-on-github-pages/
echo "" > .nojekyll

git init -b master
git add -A
git commit -m 'deploy'
git commit -m 'rebuild pages' --allow-empty

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:phphe/three-body-blog.git master:gh-pages

rm -rf .git
cd -