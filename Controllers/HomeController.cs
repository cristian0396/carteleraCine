using carteleraCine.Models.ViewModels;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace carteleraCine.Controllers
{
    [Route("api/[Controller]")]
    public class HomeController : Controller
    {
        private Models.MyDBContext db;

        public HomeController(Models.MyDBContext context)
        {
            db = context;
        }
        [HttpGet("[action]")]
        public IEnumerable<DetailViewModel> Detail()
        {

            List<DetailViewModel> lst = (from d in db.Detail
                                         select new DetailViewModel
                                         {
                                             Id = d.Id,
                                             Name = d.Name,
                                             Text = d.Text
                                         }).ToList();

            return lst;
        }
    }
}
