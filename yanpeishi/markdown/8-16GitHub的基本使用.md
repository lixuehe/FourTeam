# Git/GitHub的基本使用

###### 推荐网站:https://www.liaoxuefeng.com/wiki/896043488029600   介绍了基本的安装使用及常用的命令.

## 一.git常用命令:

1. 安装完 Git 应该做的第一件事就是设置用户名称与邮件地址。

   每一个 Git 的提交都会使用这些信息，并且它会写入到每一次提交中，不可更改:

   ```
   $ git config --global user.name "名字"    //配置用户名
   $ git config --global user.email "邮箱"   //配置用户邮箱
   $ git config --list    //查看用户信息
   ```

2. ```
   $ git init     //初始化一个空的git仓库
   $ git remote add origin 远程库的地址    //连接远程库
   $ git clone 远程库的地址   //克隆远程库到本地
   $ git pull origin master //拉取代码到本地仓库
   $ git fetch -a  //同步远程分支到本地
   $ git branch    //查看本地及当前(带*)分支
   $ git branch -a   //查看本地及远程都有哪些分支
   $ git branch 分支名    //创建新分支
   $ git checkout 分支名     //切换到新分支
   $ git branch 分支名  $ git checkout 分支名* 等价于 * $ git checkout -b 分支名 *
   $ git status  //查看状态
   $ git add <file>   //表示添加新文件和编辑过的文件不包括删除的文件
   $ git commit -m '版本信息'  //提交的版本信息描述
   $ git push origin 远程分支名  
                     //推送到远程仓库,同名可简写$ git push origin 分支名
   $ git log   //查看当前分支的版本号.所有提交记录,包括时间.操作人员及提交时的备注信息
   $ git reflog //查看当前分支的版本号.所有提交记录,主要包括具体修改内容  
   $ git log --graph  //以图形化（节点）展示当前git库的`提交信息。
   ```

## 二.连接远程库

1. 连接远程库

   * 新建一个文件夹,终端打开,输入命令:`$ git init` 初始化一个本地库

   * 本地库连接远程库 :

     * $ git remote add origin 远程库地址

     * 例如:

       ```
       $ git remote add origin https://github.com/lixuehe/aaa.git
       - origin： 默认的远程库的名字，可以修改；
       - https://github.com/lixuehe/aaa.git`:要连接的远程库的地址；
       ```

2. 克隆远程库
   * $ git clone  远程库地址    
   *  例如:`git clonehttps://github.com/lixuehe/aaa.git`
3. 向远程库推送内容：
   * `git push -u origin master `第一次推送master分支的所有内容需要加  -u 参数；
   * 之后推送:`git push origin master`;
4. 组长与组员多人共同使用一个远程库时,连接他人分支前,需要由创建库的组长将组员添加为协作者;
5. 建立连接后,可以输入`git remote -v `查看连接的远程仓库地址;
6. `git remote `不带参数，列出已经存在的远程分支,默认是origin;

## 三.分支管理 

**补充及细化在常用命令中的介绍:**

1. 查看分支：`git branch`      当前分支前面会标一个`*`号。
   * git branch 列出当前分支清单;
   * git branch -a 查看远程分支和本地分支;
   * git branch -v 查看各个分支最后一个提交信息;
   * git branch --merged 查看哪些分支已经合并入当前分支;
2. 创建分支:
   * 创建分支：`git branch <name>`;  //当前所在哪个(A)分支,在此(A)分支上创建分支(B)之后,新创建的(B)分支内有本(A)分支的所有内容;
   * 切换分支：`git checkout <name>`;
   * 创建+切换分支：`git checkout -b <name>`;
   * 合并某分支到当前分支：`git merge <name>`
3. 删除分支：
   * 删除本地test分支：`git branch -d test`;
   * test分支还没有合入当前分支，所以要用-D参数才能删掉。：`git branch -D test`;
   * 删除远程test分支:`git push origin --delete test`或者`git push origin :test`;
4. 拉取分支 :
   * `git fetch origin `同步远程服务器的数据到本地;
   * `git checkout test `将远程分支test拉取下来到本地test分支
5. 直接在gitHub 上直接进行远程分支的创建;
6. 在本地删除文件 `git rm -r文件名 ` 
7. 删除远程分支上的文件:`git rm -r --cached 文件名`

## 四.冲突及版本回退

1. 本地自行创造冲突:

   * 在本地的两个分支上,修改同一份文件的内容,进行合并,出现冲突;

   ```
   git checkout dev  //切换到本地dev分支
   vi bb.txt         进入bb.txt文件
   	修改一些内容保存提交到本地仓库,及进行add　/commit 
   git checkout devliu  //切换到本地devliu分支
   vi bb.txt
   	在devliu的分支上修改一些内容并保存也提交到本地仓库,及进行add　/commit 
   git checkout dev
   //合并两个分支内容会出现以下冲突
   git merge devliu
   ```

   ![1565959481641](/home/lixuehe/.config/Typora/typora-user-images/1565959481641.png)
   * 此时可以通过`git diff`和`git status`查看状态即差异

   ![1565959583486](/home/lixuehe/.config/Typora/typora-user-images/1565959583486.png)
   * 手动解决冲突，及修改bb.txt的内容为我们想要的内容，再次进行提交，此时再次查看两个分支bb.txtx的内容,发现都修改为了我们最终更改的内容.

   2. 当一个小组内,两个组员同时修改了一份文件,导致组长合并时出现冲突,组长决定要留取哪份结果,并告知组员需要进行修改再次推送;

   3. git  pull 时,出现报错: fatal: 拒绝合并无关的历史,只需要添加参数–allow-unrelated-histories

      * 例如:

      ```
      git pull origin lixuehe
          ==> fatal: 拒绝合并无关的历史
      git pull origin lixuehe --allow-unrelated-histories
      ```

   4. 版本回退

      **当操作失误,删除或者更改了大量的文件时,可以通过版本回退,撤销这些修改**

      * 常用命令:(回退版本靠前,推荐使用第二种,回退版本靠后,推荐使用第一种,但需要提前查看版本号)
        * git reset --hard 版本号    可以通过git reflog 或者git log 查看具体要回退的版本;  
        * git reset --hard HEAD^    回退到上个版本,两个^^,回退到上上个版本,
        * git reset --hard HEAD~{数字}  回退到指定版本

   ---

   #### @ 安装git 后使用中小技巧:

   1. 解决每次进行推送都需要输入用户名密码的问题 :

      * git bash进入你的项目目录/输入用户名密码进行推送后,输入

        `git config --global credential.helper store`  可以在本地记住用户名和密码;

      * `git fetch `+ `git merger`==>`git pull`

        可以宏观理解为==>左侧与右侧命令效果是相同的,但是推荐使用左侧的操作,因为fetch 后可以看到远程分支的更改;

        

---



 																										8/16 --关于git的常用命令及常见问题总结																																															