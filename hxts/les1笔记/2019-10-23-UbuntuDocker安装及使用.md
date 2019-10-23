---
layout: post
title:  "UbuntuDocker安装及使用"
date:   2019-10-23 11:25:00 +0800
categories: 笔记
tags: Docker
comments: 1
---



##### Ubuntu Docker安装

###### 前提条件

Docker要求Ubuntu系统的内核版本高于3.10，查看本页面的前提条件来验证你的Ubuntu版本是否支持Docker。

通过uname -r 命令来查看你当前的内核版本

```
$ uname -r

输出：5.0.0-31-generic

```

###### 使用脚本安装Docker

1.获取最新版本的Docker安装包

```
$  wget -qO- https://get.docker.com/ | sh
```

输入当前用户的密码后，就会下载脚本并安装Docker及依赖包。

安装后有个提示：

```
If you would like to use Docker as a non-root user, you should now consider
adding your user to the "docker" group with something like:

  sudo usermod -aG docker hxt

Remember that you will have to log out and back in for this to take effect!

WARNING: Adding a user to the "docker" group will grant the ability to run
         containers which can be used to obtain root privileges on the
         docker host.
         Refer to https://docs.docker.com/engine/security/security/#docker-daemon-attack-surface
         for more information.
```

当要以非root用户可以直接运行docker时，需要执行sudo usermod -aG docker hxt 命令，然后重新登录，否则会有报错。

2.启动docker后台服务

```
$ sudo service docker start
```

3.测试运行hello-world

```
$ docker run hello-world
```

##### Docker Hello World

Docker允许你在容器内运行应用程序，使用docker run命令来在容器内运行一个应用程序。输出Hello world

```
$ docker run ubuntu:15.10 /bin/echo "Hello world"
输出：Hello world
```

![使用命令在容器内运行一个应用程序](/home/hxt/图片/使用命令在容器内运行一个应用程序.png)

各个参数解析：

* docker:Docker的二进制执行文件。
* run: 与前面的docker组合来运行一个容器。
* ubuntu:15.10指定要运行的镜像，Docker首先从本地主机上查找镜像是否存在，如果不存在，Docker就会从镜像仓库Docker Hub下载公共镜像。
* /bin/echo "Hello world":在启动的容器里执行的命令

以上命令完整的意思为：Docker以ubuntu15.10镜像创建一个新容器，然后在容器里执行bin/echo "Hello world",然后输出结果。

###### 运行交互式的容器

通过docker的两个参数 -i -t，让docker运行的容器实现“对话”的能力

```
$ docker run -i -t ubuntu:15.10 /bin/bash
```

各个参数解析：

* -t：在新容器内指定一个伪终端或终端。
* -i：允许你对容器内的标准输入（STDIN）进行交互。

进入一个ubuntu15.10系统的容器

可以尝试在容器中运行命令cat /proc/version和ls分别查看当前系统的版本信息和当前目录下的文件列表

可以通过运行exit命令或者使用CTRL+D来退出容器。

##### 启动容器（后台模式）

使用以下命令创建一个以进程方式运行的容器

```
$ docker run -d ubuntu:15.10 /bin/sh -c "while true; do echo hello world; sleep 1; done"
```

![启动容器](/home/hxt/图片/启动容器.png)

在输出中，我们没有看到期望的“Hello world”，而是一串长字符

```
83e0c3b693f0c51d6d14ac467f60583018a604e76921c4c887f7e48b9ecc4abd
```

这个长字符串叫做容器ID，对每个容器来说都是唯一的，我们可以通过容器ID来查看对应的容器发生了什么。

首先，我们需要确认容器有在运行，可以通过docker ps 来查看

```
$ docker ps
```

![查看容器在运行](/home/hxt/图片/查看容器在运行.png)

CONTAINER ID:容器ID

NAMES:自动分配的容器名称

在容器内使用docker logs命令，查看容器内的标准输出

```
$ docker logs ab9e818e537c
```

![查看容器内的标准输出](/home/hxt/图片/查看容器内的标准输出.png)

```
$ docker logs amazing_cori
```

###### 停止容器

```
$ docker ps
或者用
$ docker stop amazing_cori
```

