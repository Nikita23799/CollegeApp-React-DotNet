using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace CollegeApplicationReact.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class StudentDetailsController : ControllerBase
    {
        SqlConnection con = new SqlConnection("data source=LTPC0ECUD1; database=Student; integrated security=SSPI; ");
       
        
        private static readonly string[] Names = new[]
        {
            "Nikita", "Sonal", "Shreya", "Shilpa", "Sujen", "Pooja", "Priya", "Payal", "Pushpa", "Naina"
        };
        private static readonly string[] pers = new[]
    {
            "87", "88", "98", "76", "67", "78", "79", "85", "97", "86"
        };
        private static readonly string[] ids = new[]
{
             "0","1", "2", "3", "4", "5", "6", "7", "8", "9"
        };

        private readonly ILogger<StudentDetailsController> _logger;

        public StudentDetailsController(ILogger<StudentDetailsController> logger)
        {
            _logger = logger;
        }

        /*   [HttpGet]
         public IEnumerable<StudentDetails> Get()
           {
               var rng = new Random();
               return Enumerable.Range(1, ids.Length-1).Select(index => new StudentDetails
               {
                   id = ids[index],
                   Name = Names[index],
                   Per = pers[index]
               })
               .ToArray();
           }*/

        [HttpGet]
        public string Get()
         {
             SqlDataAdapter da = new SqlDataAdapter("select * from StudentDetails", con);
             DataTable dt = new DataTable();
             da.Fill(dt);
         
            if (dt.Rows.Count>0)
             {


                var JsonString = ToJson(dt);
                return JsonString;
            }
             else
             {
                 return "No Data Found!!";
             }
         }

        [HttpPost]
        public string Post([FromBody] StudentDetails std)
        {
            var sd = std;
            SqlCommand cmd = new SqlCommand("insert into StudentDetails values('"+sd.Id + "','"+sd.Name+ "','"+sd.Grade + "','" + sd.ContactNo + "','" +sd.Email+ "');",con);
             con.Open();
          int i = cmd.ExecuteNonQuery();
             con.Close();
             if(i==1)
             {
                 return "Inserted!!!";
             }
             else
             {
                 return "Try Again";
             }
            return "successful";
        }


        public static string ToJson(DataTable dt)
        {
            List<Dictionary<string, object>> lst = new List<Dictionary<string, object>>();
            Dictionary<string, object> item;
            foreach (DataRow row in dt.Rows)
            {
                item = new Dictionary<string, object>();
                foreach (DataColumn col in dt.Columns)
                {
                    item.Add(col.ColumnName, (Convert.IsDBNull(row[col]) ? null : row[col]));
                }
                lst.Add(item);
            }
            return JsonConvert.SerializeObject(lst);
        }

    }
}
