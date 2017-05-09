﻿using Microsoft.AspNetCore.Mvc;

namespace Blades.Web.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return File("~/index.html", "text/html");
        }

        public IActionResult Error()
        {
            return View();
        }
    }
}
