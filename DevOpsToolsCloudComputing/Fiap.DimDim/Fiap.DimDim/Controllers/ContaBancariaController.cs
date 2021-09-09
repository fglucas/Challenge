using Fiap.DimDim.Context;
using Fiap.DimDim.Models;
using Microsoft.AspNetCore.Mvc;
using System;

namespace Fiap.DimDim.Controllers
{
    public class ContaBancariaController : Controller
    {
        private readonly CrudContexto _crudContexto;

        public ContaBancariaController(CrudContexto crud)
        {
            _crudContexto = crud;
        }

        [HttpGet]
        public IActionResult CadastrarConta(ContaBancaria conta)
        {
            Random random = new Random();
            conta.Agencia = 0001;
            conta.Numero = random.Next(100000, 900000);
            conta.Saldo = 0;
            conta.Tipo = TipoConta.Corrente;
            conta.CriadoEm = DateTime.Now;
            _crudContexto.ContasBancarias.Add(conta);
            _crudContexto.SaveChanges();
            return View();
        }
    }
}
