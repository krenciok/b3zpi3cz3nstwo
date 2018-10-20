
from selenium import webdriver
driver = webdriver.Firefox(executable_path='/home/tomasz/geckodriver')
file=open("Host.txt")
a1=file.readline()
driver.get('http://www.'+a1)
file.close()
driver.delete_all_cookies()
file2=open('Cookie.txt')
w=file2.readlines()
for i in range(0,len(w),2):
	cookie = {"name" : w[i] ,"value" : w[i+1]}
	driver.add_cookie(cookie)
file2.close()
