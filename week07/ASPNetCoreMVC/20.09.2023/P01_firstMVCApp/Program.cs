//(1)Builder adında bir web uygulaması inşa edici oluşturuyoruz.(WebApplicationBuilder tipinde)
var builder = WebApplication.CreateBuilder(args);

//builder adlı WebApplicationBuilder nesnesinin MVC  özellikleriyle donatılmasını sağlar.
builder.Services.AddControllersWithViews();

//(2)Oluşturulan builder isimle WebApplicationBuilder nesnesini derliyoruz.ve app adında bir 
//WebApplication elde ediyoruz.(WebApplication tipinde)
var app = builder.Build();

//bu aşamada app run edilene kadar app uzeriine ihtiyac duyulan middleWare(ara yazılım) yapıları eklenir. (Use ile başalayan)
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapAreaControllerRoute(
    name:"Admin",
    areaName:"Admin",
    pattern:"Admin/{controller=Home}/{action=index}/{id?}"
);



//https://localhost:5047/home/privacy
app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");
//(3)Oluşturulan web adındaki WebApplication ı calıştırıyoruz.
app.Run(); 
