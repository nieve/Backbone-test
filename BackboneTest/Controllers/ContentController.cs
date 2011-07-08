using System.Web.Mvc;

namespace BackboneTest.Controllers
{
    public class ContentController : Controller
    {
        public JsonResult Index(string term)
        {
            var content = new[] { 
                new { value = term + " one" }, 
                new { value = term + " two" }, 
                new { value = term + " three" }
            };
            return new JsonResult {Data = content, 
                JsonRequestBehavior=JsonRequestBehavior.AllowGet};
        }

    }
}
