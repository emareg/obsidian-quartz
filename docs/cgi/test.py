#!/usr/bin/python
print("Content-type: text/html")
print("")
print("<html><head><title>My first test</title></head><body><pre>")
print("My first test!")

# import sys
# sys.stderr = sys.stdout

# import os
# from cgi import escape
# print("<strong>Python %s</strong>" % sys.version)
# keys = os.environ.keys(  )
# keys.sort(  )
# for k in keys:
#     print("%s\t%s" % (escape(k), escape(os.environ[k])))
print("</pre></body></html>")