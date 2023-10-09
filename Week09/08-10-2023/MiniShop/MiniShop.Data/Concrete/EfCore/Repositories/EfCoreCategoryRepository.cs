using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MiniShop.Data.Abstract;
using MiniShop.Data.Concrete.EfCore.Contexts;
using MiniShop.Entity.Concrete;

namespace MiniShop.Data.Concrete.EfCore.Repositories
{
    public class EfCoreCategoryRepository : EfCoreGenericRepository<Category>, ICategoryRepository
    {
        public EfCoreCategoryRepository(MiniShopDbContext _context) : base(_context)
        {

        }
        MiniShopDbContext Context
        {
            get { return _dbContext as MiniShopDbContext; }
        }

        public List<Category> GetActiveAndUndeletedCategories(bool? isActive = null, bool? isDeleted = null)
        {
            var result = Context
                .Categories
                .AsQueryable();
            if (isActive!=null)
            {
                result = result
                    .Where(c=>c.IsActive==isActive)
                    .AsQueryable();
            }
            if (isDeleted!=null)
            {   
                result = result
                    .Where(c=>c.IsDeleted==isDeleted)
                    .AsQueryable();
            }
            return result.ToList();

        }

        public List<Category> GetCategoriesWithProducts()
        {
            throw new NotImplementedException();
        }

        public Category SoftDelete(Category category)
        {
            category.IsDeleted = true;
            Context.Categories.Update(category);
            Context.SaveChanges();
            return category;
        }
    }
}