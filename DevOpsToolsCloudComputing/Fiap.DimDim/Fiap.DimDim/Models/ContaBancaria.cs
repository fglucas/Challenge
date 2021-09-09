using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Fiap.DimDim.Models
{
    public class ContaBancaria
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ContaId { get; set; }
        public int Agencia { get; set; }
        public int Numero { get; set; }
        public decimal Saldo { get; set; }
        public TipoConta Tipo { get; set; }
        public DateTime CriadoEm { get; set; }
        public int EmpresaId { get; set; }
    }

    public enum TipoConta
    {
        Corrente, Poupança
    }
}