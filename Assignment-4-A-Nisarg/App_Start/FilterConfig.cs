using System.Web;
using System.Web.Mvc;

namespace Assignment_4_A_Nisarg
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
