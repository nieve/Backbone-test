using System.Linq;
using System.Web.Mvc;
using Raven.Client.Connection;
using Raven.Client.Document;
using Raven.Client.Linq;

namespace BackboneTest.Controllers
{
    public class SearchController : Controller
    {
        private DocumentStore documentStore;

        public SearchController()
        {
            documentStore = StoreSingleton.Instance;
        }

        public JsonResult Index(string term)
        {
            using (var session = documentStore.OpenSession())
            {
                var text = "*" + RavenQuery.Escape(term) + "*";
                var query = session.Query<TranslationDto.Translation>()
                 .Where(x => x.Key.Contains(text))
                 .Take(5)
                 .ToList();
                return new JsonResult
                {
                    Data = query,
                    JsonRequestBehavior = JsonRequestBehavior.AllowGet
                };
            }
        }

    }
}
