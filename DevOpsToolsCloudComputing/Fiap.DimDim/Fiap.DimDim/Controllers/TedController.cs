using Fiap.DimDim.Context;
using Fiap.DimDim.Models;
using Microsoft.AspNetCore.Mvc;

namespace Fiap.DimDim.Controllers
{
    public class TedController : Controller
    {
        private readonly CrudContexto _crudContexto;

        public TedController(CrudContexto crudContexto)
        {
            _crudContexto = crudContexto;
        }

        [HttpGet]
        public IActionResult Transferencia()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Transferencia(Ted ted)
        {
            _crudContexto.Teds.Add(ted);
            _crudContexto.SaveChanges();
            return View();
        }
    }
}
