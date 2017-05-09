using Microsoft.AspNetCore.Mvc;

namespace Blades.Web.Controllers
{
    public class DesignerController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Blades()
        {
            return View();
        }

        [Route("/Designer/Blades/New")]
        public IActionResult NewBlade()
        {
            return View();
        }


        public IActionResult Controls()
        {
            return View();
        }

        [Route("/Designer/Controls/New")]
        public IActionResult NewControl()
        {
            return View();
        }


        public IActionResult Forms()
        {
            return View();
        }


        [Route("/Designer/Forms/New")]
        public IActionResult NewForm()
        {
            return View();
        }


        public IActionResult Models()
        {
            return View();
        }


        [Route("/Designer/Models/New")]
        public IActionResult NewModel()
        {
            return View();
        }

        public IActionResult Editors()
        {
            return View();
        }


        [Route("/Designer/Editors/New")]
        public IActionResult NewEditor()
        {
            return View();
        }
    }
}
