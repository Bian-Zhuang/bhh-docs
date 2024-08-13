import{_ as s,c as i,o as a,a2 as t}from"./chunks/framework.ExS4QBCO.js";const E=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"docs/frameworks/vue/basic.md","filePath":"docs/frameworks/vue/basic.md"}'),e={name:"docs/frameworks/vue/basic.md"},h=t('<h2 id="vscode-安装" tabindex="-1"><a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer"><code>VScode 安装</code></a> <a class="header-anchor" href="#vscode-安装" aria-label="Permalink to &quot;[`VScode 安装`](https://code.visualstudio.com/)&quot;">​</a></h2><h2 id="homebrew-安装" tabindex="-1"><a href="https://brew.sh/" target="_blank" rel="noreferrer"><code>HomeBrew 安装</code></a> <a class="header-anchor" href="#homebrew-安装" aria-label="Permalink to &quot;[`HomeBrew 安装`](https://brew.sh/)&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><ul><li>HomeBrew 官网需要科学上网 所以选择镜像版本</li></ul></div><p>终端输入命令</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">bin</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">zsh </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">c </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)&quot;</span></span></code></pre></div><h2 id="git-安装" tabindex="-1"><a href="https://git-scm.com/" target="_blank" rel="noreferrer"><code>Git 安装</code></a> <a class="header-anchor" href="#git-安装" aria-label="Permalink to &quot;[`Git 安装`](https://git-scm.com/)&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">brew install git</span></span></code></pre></div><h2 id="nvm-安装" tabindex="-1"><code>NVM 安装</code> <a class="header-anchor" href="#nvm-安装" aria-label="Permalink to &quot;`NVM 安装`&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">git clone </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">https</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//gitee.com/mirrors/nvm</span></span></code></pre></div><p>克隆仓库 将文件中的 <code>install.sh</code> 文件拖拽到终端执行</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><ol><li>进入.nvm 文件夹</li><li>查看有没有.bash_profile 文件,如果有就直接 open .bash_profile 进入文件，如果没有则 touch .bash_profile 新建文件。</li><li>open .bash_profile 进入文件，输入以下代码</li><li>编译该文件 source .bash_profile</li></ol></div><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> NVM_DIR</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;$HOME/.nvm&quot;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[ </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">s </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;$NVM_DIR/nvm.sh&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> \\. </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;$NVM_DIR/nvm.sh&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> # This loads nvm</span></span></code></pre></div><p>安装完成后解决每次打开终端都需要重新执行 source .bash_profile 才能重新使用 nvm 命令的问题 原因：没有将配置添加到.zshrc 文件中 先检查是否有.zshrc，如果有直接打开 open ~/.zshrc，然后粘贴下边这两行代码</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> export</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> NVM_DIR</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=~/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.nvm</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [ </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">s </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;$NVM_DIR/nvm.sh&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> . </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;$NVM_DIR/nvm.sh&quot;</span></span></code></pre></div>',14),l=[h];function n(p,o,r,k,d,c){return a(),i("div",null,l)}const u=s(e,[["render",n]]);export{E as __pageData,u as default};
