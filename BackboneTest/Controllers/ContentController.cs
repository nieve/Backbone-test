using System.Web.Mvc;

namespace BackboneTest.Controllers
{
    public class ContentController : Controller
    {
        public JsonResult Index(string data)
        {
            var content = new[] {new {data = data + " one"}, new {data = data + " two"}, new {data = data + " three"}};
            return new JsonResult {Data = content, 
                JsonRequestBehavior=JsonRequestBehavior.AllowGet};
        }

    }
}
