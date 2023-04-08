<html>
<body>
<% if Request.QueryString("hiadet") = "ldl" Then
    Response.Redirect("/WEB/html/dl/dlindex.html")
    Response.End
    else
    Response.Redirect("../index.html")
    Response.End
End if
%>
</body>
</html>