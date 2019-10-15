import requests
import re
import os
'''
实现登录 后获取制定课程

'''

class ydma(object):
    proxies = {
        "http": "http://127.0.0.1:8888",
        "https": "http://127.0.0.1:8888",
    }

    headers = {
     'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36'
     }

    def login(self):
        # http://www.ydma.com/login
        username = input('请输入云课堂账号:')
        password = input('请输入云课堂密码:')
        r = requests.Session()
        r = requests.get('http://www.ydma.com/login',headers = self.headers,proxies=self.proxies)
        _token_regular='name="_token" value="(.*)">'
        _token = re.search(_token_regular,r.text).group(1)
        data = {
                'targetUrl':'http://www.ydma.com',
                'email': username, 'password': password,
                '_token': _token,
        }
        headers = {
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
            'Accept-Encoding': 'gzip, deflate',
            'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
            'Cache-Control': 'max-age=0',
            'Connection': 'keep-alive',
            'Content-Length': '80',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Cookie': 'UM_distinctid=16d480e535f52e-066cac63780d87-30750f58-1fa400-16d480e5361146; Hm_lvt_727c97fda13f47680a5f4f5b55ff4fe6=1570585990,1570601267,1570860850,1571017770; CNZZDATA1271172817=1079416235-1568867940-%7C1571106827; Hm_lpvt_727c97fda13f47680a5f4f5b55ff4fe6=1571110608; XSRF-TOKEN={0}; laravel_session={1}'.format( r.cookies["XSRF-TOKEN"],r.cookies["laravel_session"] ),
            'Host': 'www.ydma.com',
            'Origin': 'http://www.ydma.com',
            'Referer': 'http://www.ydma.com/login',
            'Upgrade-Insecure-Requests': '1',
            'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36',
        }
        r = requests.post('http://www.ydma.com/login', data, headers = headers)
        try:
            user = 'dropdown-header">\s+(.*)'
            users = re.search(user, r.text).group(1)
            print('登录成功：',users)
            cookie = r.cookies
            if cookie == None:
                pass
            else:
                self.list(cookie)
        except:
            user_regular = '<strong>(.*?)</strong>'
            userif = re.search(user_regular,r.text)
            if userif:
                print(userif.group(1))
                self.login()
            else:
                print(userif.group(1))
                self.login()

    def list(self,cookie):
         list = 'http://www.ydma.com/my/classrooms'
         rs = requests.get(list,cookies = cookie,headers = self.headers)
         list_regular='alt="(.*?)">'
         list_name = re.findall(list_regular,rs.text)
         del list_name[0]
         #14617, 14636
         list_url_regular='course-picture-link"\shref="(.*)"'
         list_url=re.findall(list_url_regular,rs.text)
         num = 0
         for i in list_name:
              print('你的课程有  %s:'% num,i)
              num = num + 1
         while True:
             number = int(input('请输入你要选择的课程编号：'))
             if number > len(list_name):
                 print('超出编号范围请重新输入!')
             else:
                 url =list_url[number]
                 urls =url
                 self.task(url,cookie,urls)
                 return True
             return False
    def task(self,url,cookie,urls):
        urls = url
        r = requests.get(url,cookies = cookie)
        task_regular = 'class="task-title">(.*)</div>'
        task_name = re.findall(task_regular,r.text)
        task_url_regular = '<a\shref="(.*)"\sclass="task-cover">'
        task_url = re.findall(task_url_regular,r.text)
        num = 0
        for i in task_name:
            print('你的任务有  %s:' % num, i)
            num = num + 1
        while True:
            number = int(input('请输入你要选择的任务编号 99返回上级：'))
            if number == 99:
                self.list(cookie)

                return True
            elif number > len(task_name):
                print('超出编号范围请重新输入!')
            else:
                self.curriculum(task_url[number],urls,cookie)
            return False
    def curriculum(self,url,urls,cookie):
        r= requests.get(url,cookies = cookie)
        curriculum_regular = 'showLessions\(.*\d\)\">(.*)</a>'
        curriculum_name = re.findall(curriculum_regular,r.text)
        for i in curriculum_name:
            print('你的课程有  :',i)
        while True:
            number = int(input('返回上级请输入 99 退出请输入 88：'))
            if number == 99:
                self.task(urls,cookie,urls)
                return True
            elif number == 88:
                self.logout(cookie)
                if self.logout(cookie) == False:
                    return False
            else:
                print('输入错误请重新输入！')

    def logout(self,cookie):
        r = requests.get('http://www.ydma.com/logout',cookie)
        if r.status_code == 200:
            try:
                exit()
            except:
                return False

if __name__=='__main__':
    main = ydma()
    main.login()
