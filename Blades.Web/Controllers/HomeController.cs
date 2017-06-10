using Microsoft.AspNetCore.Mvc;

namespace Blades.Web.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
             return View();
        }

        public IActionResult Error()
        {
            return View();
        }
    }
}
