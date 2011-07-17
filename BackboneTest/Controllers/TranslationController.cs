using System.Web.Mvc;
using Raven.Client.Document;
using TranslationDto;

namespace BackboneTest.Controllers
{
    public class TranslationController : Controller
    {
        private DocumentStore documentStore;

        public TranslationController()
        {
            documentStore = StoreSingleton.Instance;
        }

        [HttpPut]
        public JsonResult Index(Translation translation)
        {
            using (var session = documentStore.OpenSession())
            {
                session.Store(translation);
                session.SaveChanges();
            }
            return Json(translation, JsonRequestBehavior.AllowGet);
        }

    }
}
