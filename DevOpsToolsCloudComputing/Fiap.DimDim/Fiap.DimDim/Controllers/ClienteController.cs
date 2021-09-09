using Fiap.DimDim.Context;
using Fiap.DimDim.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace Fiap.DimDim.Controllers
{
    public class ClienteController : Controller
    {
        private readonly CrudContexto _crudContexto;

        public ClienteController(CrudContexto crud)
        {
            _crudContexto = crud;
        }

        [HttpGet]
        public IActionResult CadastrarCliente()
        {
            return View();
        }

        [HttpPost]
        public IActionResult CadastrarCliente(Cliente cliente)
        {
            _crudContexto.Clientes.Add(cliente);
            _crudContexto.SaveChanges();
            return RedirectToAction("CadastrarConta", "ContaBancaria");
        }
    }
}
