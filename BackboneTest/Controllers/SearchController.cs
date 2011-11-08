using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;
using Raven.Client;
using Raven.Client.Connection;
using Raven.Client.Document;
using Raven.Client.Linq;
using TemplatesProgressiveEnhancement;
using TranslationDto;

namespace BackboneTest.Controllers
{
    public class SearchController : TemplateRenderingController
    {
        private DocumentStore documentStore;

        public SearchController()
        {
            documentStore = StoreSingleton.Instance;
        }

        public ContentResult SearchFor(string term)
        {
            using (var session = documentStore.OpenSession())
            {
                var result = Search(term, session);
                return TemplateList("Result", result);
            }
        }

        [OutputCache(Duration=6000)]
        public JsonResult Index(string term)
        {
            using (var session = documentStore.OpenSession())
            {
                var query = Search(term, session);
                return new JsonResult
                {
                    Data = query,
                    JsonRequestBehavior = JsonRequestBehavior.AllowGet
                };
            }
        }

        private static List<Translation> Search(string term, IDocumentSession session)
        {
            var text = "*" + RavenQuery.Escape(term) + "*";
            return session.Query<Translation>()
                .Where(x => x.Key.Contains(text))
                .ToList();
        }
    }
}
