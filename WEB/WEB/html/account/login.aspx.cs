using System;
using System.Data.SqlClient;
using System.Data;

namespace SQLCnnApplication
{
    public class Program
    {
        static public void Main(ref string acc, ref string psd)
        {
            String ConnectionString = "Server=tcp:sql.zhangxukun.top.database.windows.net,64074;Initial Catalog=webaccount;Persist Security Info=True;User ID=aaa;Password=aaaaaa;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=True;Connection Timeout=180;";     //数据库登录信息
            using (SqlConnection con = new SqlConnection(ConnectionString))                     //设定数据库连接
            {
                con.Open();
                SqlCommand findnamepwd = new SqlCommand("SELECT acc,psd FROM accsth WHERE acc = @useracc", con);
                findnamepwd.CommandType = CommandType.Text;
                string useracc = acc;
                findnamepwd.Parameters.Add(new SqlParameter("useracc", useracc));

                SqlDataReader rdr = QueryCMD.ExecuteReader();
            } //数据库连接关闭
        }
    }
}

