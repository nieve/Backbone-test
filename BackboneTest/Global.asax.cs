using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;
using Raven.Client.Document;
using TranslationDto;

namespace BackboneTest
{

    public class MvcApplication : System.Web.HttpApplication
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                "search",
                "search/",
                new {controller = "Search", action = "Index"}
            );

            routes.MapRoute(
                "Default",                                              // Route name
                "{controller}/{action}/{id}",                           // URL with parameters
                new { controller = "Home", action = "Index", id = "" }  // Parameter defaults
            );

        }

        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            StoreSingleton.Init();
            RegisterRoutes(RouteTable.Routes);
        }
    }

    public class StoreSingleton
    {
        private static DocumentStore documentStore;

        static StoreSingleton()
        {
            documentStore = new DocumentStore { Url = "http://localhost:8080" };
            documentStore.Initialize();
        }

        public static DocumentStore Instance { get {return documentStore;} }

        public static void Init()
        {
            using (var session = documentStore.OpenSession())
            {
                var dataExist = session.Query<Translation>().Any();
                
                if (!dataExist) {
					var random = new Random();
					for (int i = 0; i < 100; i++ )
					{
						var key = new string(new []{Convert.ToChar(random.Next(65, 90)), Convert.ToChar(random.Next(97,122)), Convert.ToChar(random.Next(97,122)), Convert.ToChar(random.Next(97,122)), Convert.ToChar(random.Next(97,122))});
						var value = new string(new []{Convert.ToChar(random.Next(65, 90)), Convert.ToChar(random.Next(97,122)), Convert.ToChar(random.Next(97,122)), Convert.ToChar(random.Next(97,122)), Convert.ToChar(random.Next(97,122))});
						var translation = new Translation{Key = key, Value=value};
						session.Store(translation);
					}
					session.SaveChanges();
				}
            }
        }
    }
}