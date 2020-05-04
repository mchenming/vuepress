## git study

### git init 初始化git仓库

### git config --global user.name chenming

### git config --global user.email 2232531977@qq.com

### git config --list  查看自己的配置信息

### git add index.html 将工作区代码提交到暂存区

### git status 查看状态

### git commit -m '将暂存区代码提交到版本库'

### git commit -am '直接将代码从工作区提交到版本库'

### git log  查看提交记录
### git log --oneline

### git restore -- index.html  将工作区的代码回退到上个版本
> 如果将工作区的代码已经提交到暂存区可以 git restore --staged (filename)
> git status 查看当前状态因该是已在工作区
> git restore -- (filename) 回退到上一个版本

### 建分支 git branch dev 
    racks
> git branch
  git checkout dev
  删除分支当前分支需要切换到其他分支上