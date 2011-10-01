using System.Web.Mvc;

namespace BackboneTest.Controllers
{
    public class TemplatesController : Controller
    {
        public PartialViewResult Index(string name)
        {
            //HttpContext.Response.ContentType = "text/html";
            return PartialView(name);
        }
    }
}
