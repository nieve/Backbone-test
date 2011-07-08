﻿using System.Web.Mvc;

namespace BackboneTest.Controllers
{
    [HandleError]
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewData["Message"] = "Translations Manager";

            return View();
        }

        public ActionResult About()
        {
            return View();
        }
    }
}
