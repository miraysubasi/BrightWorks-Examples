using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MiniShop.Entity.Concreate
{
    public class ProductCategory
    {
        public int ProductId { get; set; }
        public Product Product { get; set; } //Navigation property
        public int CategoryId { get; set; } 
        public Category Category { get; set; } //Navigation property


    }
}