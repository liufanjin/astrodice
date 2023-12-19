function store() {
    var username = document.getElementById('new_username').value;
    var password = document.getElementById('new_password').value;
  
    // 创建或获取存储在localStorage的用户数据
    var users = JSON.parse(localStorage.getItem('users')) || {};
  
    // 添加新用户到用户数据对象
    users[username] = password;
  
    // 更新localStorage的用户数据
    localStorage.setItem('users', JSON.stringify(users));
  
    alert("注册成功!"); 
}

function check(form) {
    var username = form.username.value;
    var password = form.password.value;
  
    // 获取存储在localStorage的用户数据
    var users = JSON.parse(localStorage.getItem('users')) || {};
  
    if(users[username] === password) {
      // 将当前登录者的username放到localStorage里去
      localStorage.setItem('currentUsername', username);
      window.location.href = "success.html";
    } else {
      alert("错误的用户名或密码！"); 
    }
}
