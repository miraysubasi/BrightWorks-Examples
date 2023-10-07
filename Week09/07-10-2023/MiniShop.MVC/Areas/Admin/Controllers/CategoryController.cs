using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using Microsoft.Extensions.Logging;
using MiniShop.MVC.Data;

namespace MiniShop.MVC.Areas.Admin.Controllers
{
    [Area("Admin")]
    public class CategoryController : Controller
    {
        public async Task<IActionResult> Index()
        {
            var response = await CategoryDAL.GetAllCategories();
            return View(response.Data);
        }
        [HttpGet]
        public async Task<IActionResult> Create()
        {
            return View();
        }
        [HttpPost]
        public async Task<IActionResult> Create(string categoryName, string categoryDescription)
        {
            var response = await CategoryDAL.CreateCategory(categoryName, categoryDescription);
            return RedirectToAction("Index");
        }
        [HttpGet]
        public async Task<IActionResult> SoftDelete(int id)
        {
            var response = await CategoryDAL.DeleteCategory(id);
            return RedirectToAction("Index");
        }
        [HttpGet]
        public async Task<IActionResult> Delete(int id)
        {
            var response = await CategoryDAL.DeleteCategory(id);
            return RedirectToAction("Index");
        }
        //soft delete kalsın
        //Ödev=Hard delete veritabınından silme işlemini  yap 

        [HttpGet]
        public async Task<IActionResult> Edit(int categoryId)
        {
            var response = await CategoryDAL.GetCategoryById(categoryId);
            return !response.Data.IsDeleted?
            View(response.Data):
            RedirectToAction("Index");
        }
        [HttpPost]
        public async Task<IActionResult> Edit(string categoryName, string categoryDescription)
        {
            var response = await CategoryDAL.CreateCategory(categoryName, categoryDescription);
            return RedirectToAction("Index");
        }
    }
}