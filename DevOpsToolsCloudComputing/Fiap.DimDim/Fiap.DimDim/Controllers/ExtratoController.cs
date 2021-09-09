using Fiap.DimDim.Context;
using Fiap.DimDim.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Fiap.DimDim.Controllers
{
    public class ExtratoController : Controller
    {
        private readonly CrudContexto _crudContexto;

        public ExtratoController(CrudContexto crud)
        {
            _crudContexto = crud;
        }

        public async Task<IActionResult> ObterExtrato()
        {
            return View(await _crudContexto.Teds.ToListAsync());
        }

        [HttpGet]
        public IActionResult AtualizarTed(int? id)
        {
            if (id != null)
            {
                Ted ted = _crudContexto.Teds.Find(id);
                return View(ted);
            }
            else return NotFound();
        }

        [HttpPost]
        public async Task<IActionResult> AtualizarTed(int? id, Ted ted)
        {
            if (id != null)
            {
                if (ModelState.IsValid)
                {
                    _crudContexto.Update(ted);
                    await _crudContexto.SaveChangesAsync();
                    return RedirectToAction(nameof(ObterExtrato));
                }
                else return View(ted);
            }
            else return NotFound();
        }

        [HttpGet]
        public IActionResult ExcluirTed(int? id)
        {
            if (id != null)
            {
                Ted ted = _crudContexto.Teds.Find(id);
                return View(ted);
            }
            else return NotFound();
        }

        [HttpPost]
        public async Task<IActionResult> ExcluirTed(int? id, Ted ted)
        {
            if (id != null)
            {
                if (ModelState.IsValid)
                {
                    _crudContexto.Remove(ted);
                    await _crudContexto.SaveChangesAsync();
                    return RedirectToAction(nameof(ObterExtrato));
                }
                else return View(ted);
            }
            else return NotFound();
        }

        [HttpGet]
        public IActionResult DetalhesTed(int? id)
        {
            if (id != null)
            {
                Ted ted = _crudContexto.Teds.Find(id);
                return View(ted);
            }
            else return NotFound();
        }
    }
}
