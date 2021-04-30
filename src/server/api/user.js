var models = require('../db.js');
var express = require('express');
var jwt = require('jsonwebtoken');
var uuid = require('node-uuid');
var router = express.Router();
var mysql = require('mysql');
var $sql = require('../sql.js');

//连接数据库
var conn = mysql.createConnection(models.mysql);

conn.connect();

//登录接口
router.post('/login', (req, res)=>{
  var sql = $sql.user.login;
  var params = req.body;
  var userName = params.userName;
  var password = params.password;
  console.log(params);
  conn.query(sql, [params.userName, params.password], function(err, result) {
    var data = JSON.parse(JSON.stringify(result))
    console.log('data '+data.toString()+'result '+result.toString());
    if(result.length === 0) {
      return res.send(JSON.stringify({ //序列化json数据
        status: 1,
        msg: 'no admin'
      }))
    } else {
      let content = {
        userName: params.userName
      }
      let secretOrPrivateKey = '_jwt'; //这是加密的Key(密钥)
      let token = jwt.sign(content, secretOrPrivateKey, {
        expiresIn: 60 * 60 * 1 //1小时过期
      });
      // res.send(resBody);
      return res.send(JSON.stringify({
        status: 1,
        msg: 'login success',
        userName: params.userName,
        token: token
      }))
    }
  })
});

//创建用户
router.post('/createUser', (req, res)=>{
  var sql = $sql.user.createUser;
  console.log(req);
  conn.query(sql, [req.body.userId, req.body.userName, req.body.password], function(err, result) {
    var data = req.body;
    console.log(result);
    return res.send(JSON.stringify({
      status: 1,
      msg: 'add success',
      data: data
    }))
  })
});

//查询用户列表
router.get('/userList', (req, res)=>{
  var sql = $sql.user.queryUserList;
  var params = req.body;
  console.log(params);
  conn.query(sql, [], function(err, result) {
    var data = JSON.parse(JSON.stringify(result))
    return res.send(JSON.stringify({
      status: 1,
      msg: 'query success',
      list: data
    }))
  })
});

module.exports = router;
