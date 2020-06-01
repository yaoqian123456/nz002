<?php

// 1,获取前端参数
$regname = $_POST['regname']; 
$regpwd = $_POST['regpwd']; 


// 2,根据参数,对数据库进行数据写入操作

// 链接数据库
$link = mysqli_connect('127.0.0.1' , 'root' , 'root' , 'nz2002' , 3306);
// 设定SQL语句
$sql = "INSERT INTO `user`(`username` , `userpwd`) VALUES ( '{$regname}' , '{$regpwd}' )";
// 执行SQL语句,因为是非查询语句,执行结果是 布尔类型
$result = mysqli_query($link , $sql);
// 根据执行结果,返回不同的响应体内容
if($result === true){
    echo 1;
}else{
    echo 0;
}

// 关闭数据库
mysqli_close($link);