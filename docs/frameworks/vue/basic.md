## [`VScode 安装`](https://code.visualstudio.com/)

## [`HomeBrew 安装`](https://brew.sh/)

::: tip

- HomeBrew 官网需要科学上网 所以选择镜像版本
  :::

终端输入命令

```js
/bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)"
```

## [`Git 安装`](https://git-scm.com/)

```js
brew install git
```

## `NVM 安装`

```js
git clone https://gitee.com/mirrors/nvm
```

克隆仓库 将文件中的 `install.sh` 文件拖拽到终端执行

::: tip

1. 进入.nvm 文件夹
2. 查看有没有.bash_profile 文件,如果有就直接 open .bash_profile 进入文件，如果没有则 touch .bash_profile 新建文件。
3. open .bash_profile 进入文件，输入以下代码
4. 编译该文件 source .bash_profile
   :::

```js
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

安装完成后解决每次打开终端都需要重新执行 source .bash_profile 才能重新使用 nvm 命令的问题 原因：没有将配置添加到.zshrc 文件中 先检查是否有.zshrc，如果有直接打开 open ~/.zshrc，然后粘贴下边这两行代码

```js
 export NVM_DIR=~/.nvm
 [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
```
