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
> git branch
  git checkout dev
  删除分支当前分支需要切换到其他分支上
  在创建的分支上面提交代码再切换到主分支上面，主分支是不存在的需要合并分支

### 分支合并 先切换到主分支master上面 然后git merge dev 如果分支合并存在冲突需要选择性保留之后重新提交