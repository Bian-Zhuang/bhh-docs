#!/usr/bin/env sh

# 当发生错误时终止脚本
set -e

# 构建
npm run docs:build

# 进入构建文件夹
cd .vitepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果你想发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:Bian-Zhuang/bhh-docs.git master:main

cd -
