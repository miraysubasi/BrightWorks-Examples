using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

using MiniShop.Entity.Concreate;

namespace MiniShop.Data.Concreate.EfCore.Context
{
    public class MiniShopDbContext : DbContext
    {
        public MiniShopDbContext(DbContextOptions options):base(options){

        }
        public DbSet<Category> Categories { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<ProductCategory> ProductCategories { get; set; }

        
    }
}