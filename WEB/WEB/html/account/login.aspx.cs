using System;
using System.Data.SqlClient;
using System.Data;

namespace SQLCnnApplication
{
    public class Program
    {
        static public void Main(ref string acc, ref string psd)
        {
            String ConnectionString = "Server=tcp:sql.zhangxukun.top.database.windows.net,64074;Initial Catalog=webaccount;Persist Security Info=True;User ID=aaa;Password=aaaaaa;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=True;Connection Timeout=180;";     //���ݿ��¼��Ϣ
            using (SqlConnection con = new SqlConnection(ConnectionString))                     //�趨���ݿ�����
            {
                con.Open();
                SqlCommand findnamepwd = new SqlCommand("SELECT acc,psd FROM accsth WHERE acc = @useracc", con);
                findnamepwd.CommandType = CommandType.Text;
                string useracc = acc;
                findnamepwd.Parameters.Add(new SqlParameter("useracc", useracc));

                SqlDataReader rdr = QueryCMD.ExecuteReader();
            } //���ݿ����ӹر�
        }
    }
}

