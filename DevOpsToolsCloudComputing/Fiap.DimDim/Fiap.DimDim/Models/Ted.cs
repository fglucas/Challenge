using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Fiap.DimDim.Models
{
    public class Ted
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int TedId { get; set; }
        public decimal Valor { get; set; }
        public string NomeBanco { get; set; }
        public int FavorecidoAgencia { get; set; }
        public int FavorecidoConta { get; set; }
        public string FavorecidoNome { get; set; }
        public string FavorecidoDocumento { get; set; }
        public string Observacao { get; set; }
    }
}
