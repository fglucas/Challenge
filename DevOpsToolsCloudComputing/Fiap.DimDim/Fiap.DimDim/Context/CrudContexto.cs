using Fiap.DimDim.Models;
using Microsoft.EntityFrameworkCore;

namespace Fiap.DimDim.Context
{
    public class CrudContexto : DbContext
    {
        public CrudContexto(DbContextOptions<CrudContexto> options) : base (options)
        {

        }

        public DbSet<Cliente> Clientes { get; set; }
        public DbSet<ContaBancaria> ContasBancarias { get; set; }
        public DbSet<Ted> Teds { get; set; }
    }
}
