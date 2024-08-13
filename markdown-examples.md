### 部署网站

1. 把项目提交到 git 上面
2. 连接服务器

### ssh

ssh 账号@公网 ip

### Linux 命令

-   查看目录 ls
-   切换目录 cd
-   创建目录 mkdir 目录名称
-   yum 跟 npm 是一样的 linux 的包管理器
-   查看文件
-   查看隐藏文件 ls -a
-   pwd 获取路径 /home/web/vitepress-blog/.vitepress/dist
-   修改配置文件 vim 编辑配置文件
-   nginx 安装完成之后 默认放到 etc

```sh
yum install git
yum install nginx
yum install nodejs
yum install npm
```

nginx 配置 location

```ng
location / {
  root /home/web/vitepress-blog/.vitepress/dist;
  index index.html;
}
```
