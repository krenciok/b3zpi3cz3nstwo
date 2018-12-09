var mime_samples = [
  { 'mime': 'application/xhtml+xml', 'samples': [
    { 'url': 'http://127.0.0.1:8000/', 'dir': '_m0/0', 'linked': 2, 'len': 343 },
    { 'url': 'http://127.0.0.1:8000/accounts/', 'dir': '_m0/1', 'linked': 5, 'len': 3939 },
    { 'url': 'http://127.0.0.1:8000/accounts/login/', 'dir': '_m0/2', 'linked': 5, 'len': 682 },
    { 'url': 'http://127.0.0.1:8000/accounts/login/', 'dir': '_m0/3', 'linked': 5, 'len': 832 },
    { 'url': 'http://127.0.0.1:8000/accounts/login/', 'dir': '_m0/4', 'linked': 0, 'len': 2513 },
    { 'url': 'http://127.0.0.1:8000/accounts/signup/', 'dir': '_m0/5', 'linked': 5, 'len': 1493 },
    { 'url': 'http://127.0.0.1:8000/admin/login/', 'dir': '_m0/6', 'linked': 5, 'len': 1958 },
    { 'url': 'http://127.0.0.1:8000/admin/login/?next=/admin/', 'dir': '_m0/7', 'linked': 5, 'len': 1819 },
    { 'url': 'http://127.0.0.1:8000/static/', 'dir': '_m0/8', 'linked': 2, 'len': 1634 } ]
  },
  { 'mime': 'text/css', 'samples': [
    { 'url': 'http://127.0.0.1:8000/static/admin/css/base.css/', 'dir': '_m1/0', 'linked': 2, 'len': 16225 },
    { 'url': 'http://127.0.0.1:8000/static/admin/css/login.css/', 'dir': '_m1/1', 'linked': 2, 'len': 1203 },
    { 'url': 'http://127.0.0.1:8000/static/admin/css/responsive.css/', 'dir': '_m1/2', 'linked': 2, 'len': 17976 } ]
  },
  { 'mime': 'text/plain', 'samples': [
    { 'url': 'http://127.0.0.1:8000/static/', 'dir': '_m2/0', 'linked': 2, 'len': 59 } ]
  }
];

var issue_samples = [
  { 'severity': 4, 'type': 50102, 'samples': [
    { 'url': 'http://127.0.0.1:8000/accounts/login/', 'extra': 'responses to `true` and `false` different than to `uname`', 'sid': '0', 'dir': '_i0/0' } ]
  },
  { 'severity': 3, 'type': 40601, 'samples': [
    { 'url': 'http://127.0.0.1:8000/accounts/signup/', 'extra': 'implicitly cacheable \x27Set-Cookie\x27 response', 'sid': '0', 'dir': '_i1/0' } ]
  },
  { 'severity': 0, 'type': 10803, 'samples': [
    { 'url': 'http://127.0.0.1:8000/static/', 'extra': '', 'sid': '0', 'dir': '_i2/0' },
    { 'url': 'http://127.0.0.1:8000/static/admin/', 'extra': '', 'sid': '0', 'dir': '_i2/1' },
    { 'url': 'http://127.0.0.1:8000/static/admin/css/', 'extra': '', 'sid': '0', 'dir': '_i2/2' },
    { 'url': 'http://127.0.0.1:8000/static/admin/css/base.css/', 'extra': '', 'sid': '0', 'dir': '_i2/3' },
    { 'url': 'http://127.0.0.1:8000/static/admin/css/login.css/', 'extra': '', 'sid': '0', 'dir': '_i2/4' },
    { 'url': 'http://127.0.0.1:8000/static/admin/css/responsive.css/', 'extra': '', 'sid': '0', 'dir': '_i2/5' } ]
  },
  { 'severity': 0, 'type': 10802, 'samples': [
    { 'url': 'http://127.0.0.1:8000/static/', 'extra': 'text/plain', 'sid': '0', 'dir': '_i3/0' },
    { 'url': 'http://127.0.0.1:8000/static/admin/', 'extra': 'text/plain', 'sid': '0', 'dir': '_i3/1' },
    { 'url': 'http://127.0.0.1:8000/static/admin/css/', 'extra': 'text/plain', 'sid': '0', 'dir': '_i3/2' } ]
  },
  { 'severity': 0, 'type': 10602, 'samples': [
    { 'url': 'http://127.0.0.1:8000/accounts/login/', 'extra': '', 'sid': '0', 'dir': '_i4/0' },
    { 'url': 'http://127.0.0.1:8000/accounts/login/', 'extra': '', 'sid': '0', 'dir': '_i4/1' },
    { 'url': 'http://127.0.0.1:8000/accounts/login/', 'extra': '', 'sid': '0', 'dir': '_i4/2' },
    { 'url': 'http://127.0.0.1:8000/accounts/signup/', 'extra': '', 'sid': '0', 'dir': '_i4/3' },
    { 'url': 'http://127.0.0.1:8000/admin/login/', 'extra': '', 'sid': '0', 'dir': '_i4/4' },
    { 'url': 'http://127.0.0.1:8000/admin/login/?next=/admin/', 'extra': '', 'sid': '0', 'dir': '_i4/5' } ]
  },
  { 'severity': 0, 'type': 10405, 'samples': [
    { 'url': 'http://127.0.0.1:8000/accounts/login/', 'extra': '', 'sid': '0', 'dir': '_i5/0' },
    { 'url': 'http://127.0.0.1:8000/admin/auth/', 'extra': '', 'sid': '0', 'dir': '_i5/1' },
    { 'url': 'http://127.0.0.1:8000/admin/auth/group/', 'extra': '', 'sid': '0', 'dir': '_i5/2' },
    { 'url': 'http://127.0.0.1:8000/admin/logout/', 'extra': '', 'sid': '0', 'dir': '_i5/3' },
    { 'url': 'http://127.0.0.1:8000/admin/przelewy/', 'extra': '', 'sid': '0', 'dir': '_i5/4' } ]
  },
  { 'severity': 0, 'type': 10403, 'samples': [
    { 'url': 'http://127.0.0.1:8000/static/', 'extra': '', 'sid': '0', 'dir': '_i6/0' },
    { 'url': 'http://127.0.0.1:8000/static/admin/', 'extra': '', 'sid': '0', 'dir': '_i6/1' },
    { 'url': 'http://127.0.0.1:8000/static/admin/css/', 'extra': '', 'sid': '0', 'dir': '_i6/2' } ]
  },
  { 'severity': 0, 'type': 10401, 'samples': [
    { 'url': 'http://127.0.0.1:8000/accounts/signup/', 'extra': '', 'sid': '0', 'dir': '_i7/0' },
    { 'url': 'http://127.0.0.1:8000/accounts/signup/', 'extra': '', 'sid': '0', 'dir': '_i7/1' },
    { 'url': 'http://127.0.0.1:8000/accounts/signup/', 'extra': '', 'sid': '0', 'dir': '_i7/2' },
    { 'url': 'http://127.0.0.1:8000/accounts/signup/', 'extra': '', 'sid': '0', 'dir': '_i7/3' },
    { 'url': 'http://127.0.0.1:8000/accounts/signup/', 'extra': '', 'sid': '0', 'dir': '_i7/4' } ]
  },
  { 'severity': 0, 'type': 10205, 'samples': [
    { 'url': 'http://127.0.0.1:8000/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i8/0' },
    { 'url': 'http://127.0.0.1:8000/accounts/login/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i8/1' },
    { 'url': 'http://127.0.0.1:8000/accounts/signup/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i8/2' },
    { 'url': 'http://127.0.0.1:8000/admin/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i8/3' },
    { 'url': 'http://127.0.0.1:8000/admin/auth/group/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i8/4' },
    { 'url': 'http://127.0.0.1:8000/admin/auth/group/sfi9876/', 'extra': '', 'sid': '0', 'dir': '_i8/5' },
    { 'url': 'http://127.0.0.1:8000/static/admin/css/base.css/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i8/6' },
    { 'url': 'http://127.0.0.1:8000/static/admin/css/login.css/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i8/7' },
    { 'url': 'http://127.0.0.1:8000/static/admin/css/responsive.css/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i8/8' } ]
  },
  { 'severity': 0, 'type': 10204, 'samples': [
    { 'url': 'http://127.0.0.1:8000/', 'extra': 'X-Frame-Options', 'sid': '0', 'dir': '_i9/0' },
    { 'url': 'http://127.0.0.1:8000/static/', 'extra': 'X-Frame-Options', 'sid': '0', 'dir': '_i9/1' } ]
  },
  { 'severity': 0, 'type': 10202, 'samples': [
    { 'url': 'http://127.0.0.1:8000/', 'extra': 'WSGIServer/0.2 CPython/3.5.2', 'sid': '0', 'dir': '_i10/0' } ]
  },
  { 'severity': 0, 'type': 10201, 'samples': [
    { 'url': 'http://127.0.0.1:8000/accounts/login/', 'extra': 'sessionid', 'sid': '0', 'dir': '_i11/0' },
    { 'url': 'http://127.0.0.1:8000/accounts/signup/', 'extra': 'csrftoken', 'sid': '0', 'dir': '_i11/1' },
    { 'url': 'http://127.0.0.1:8000/admin/', 'extra': 'sessionid', 'sid': '0', 'dir': '_i11/2' } ]
  }
];

