using Fiap.DimDim.Context;
using Fiap.DimDim.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;

namespace Fiap.DimDim.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly CrudContexto _crudContexto;

        SqlConnection con = new SqlConnection();
        SqlCommand com = new SqlCommand();
        SqlDataReader dr;

        public HomeController(ILogger<HomeController> logger, CrudContexto crud)
        {
            _logger = logger;
            _crudContexto = crud;
        }

        [HttpGet]
        public IActionResult Index()
        {
            return View();
        }

        void connectionString()
        {
            con.ConnectionString = "Data Source=Localhost,1401;Initial Catalog=model;User ID=SA;Password=Str0ngPassword!";
        }

        [HttpPost]
        public IActionResult Index(string email, string senha)
        {
            connectionString();
            con.Open();
            com.Connection = con;
            com.CommandText = "select * from [model].[dbo].[Clientes] where email ='" + email+"'and senha ='"+senha+"'";
            dr = com.ExecuteReader();
            if (dr.Read())
            {
                con.Close();
                return View("Logado");
            }
            else
            {
                con.Close();
                return View();
            }
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }

        public IActionResult Logado()
        {
            return View();
        }
    }
}
