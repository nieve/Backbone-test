using System.Linq;
using System.Web.Mvc;
using Raven.Client.Connection;
using Raven.Client.Document;
using Raven.Client.Linq;

namespace BackboneTest.Controllers
{
    public class ContentController : Controller
    {
        private DocumentStore documentStore;

        public ContentController()
        {
            documentStore = new DocumentStore { Url = "http://localhost:8080" };
            documentStore.Initialize();
        }

        public JsonResult Index(string term)
        {
            using (var session = documentStore.OpenSession())
            {
                var text = "*" + RavenQuery.Escape(term) + "*";
                var query = session.Query<TranslationDto.Translation>()
                 .Where(x => x.Value.Contains(text))
                 .Take(5)
                 .ToList();
                return new JsonResult
                {
                    Data = new[]{new {key="MyLn.Hello", value=term + " Hello"}}, //query
                    JsonRequestBehavior = JsonRequestBehavior.AllowGet
                };
            }
        }

    }
}
