<% @ Page Language="C#" AutoEventWireup="true" CodeBehind="login.aspx.cs" %>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>登录</title>
        <!--外联-->
        <link rel="Shortcut Icon" href="/WEB/pic/header/tb.ico" type="image/x-icon">
        <link rel="stylesheet" type="text/css" href="/WEB/css/all.css">
        <link rel="stylesheet" type="text/css" href="index.css">
        <script src="https://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js"></script>
        <script src="/WEB/js/all.js"></script>
    </head>
    <body>
        <!-- 容器 -->
        <div class="all" id="rongqi">
            @RenderPage("../same/top.cshtml")
            <!--a-->
            <div class="dltc">
                <form action="login.aspx.cs" class="dlb" method="post" name="csdlb">
                    <h2>登录</h2>
                    <input
                        type="text"
                        name="acc"
                        placeholder="用户名"
                    >
                    <input
                        type="password"
                        name="psd"
                        placeholder="密码"
                    >
                    <button type="submit">登录</button>
                </form>
            </div>
            }
        }
            <div id="xiamian"></div>
        </div>
    </body>
</html>