using System.Web.Mvc;

namespace BackboneTest.Controllers
{
    public class ContentItemController : Controller
    {
        public JsonResult Index(string data)
        {
            return new JsonResult {Data = new {data = data + "dada"},
                JsonRequestBehavior=JsonRequestBehavior.AllowGet};
        }

    }
}
