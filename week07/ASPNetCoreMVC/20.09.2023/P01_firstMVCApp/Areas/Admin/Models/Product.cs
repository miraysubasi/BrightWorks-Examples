using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace P01_firstMVCApp.Areas.Admin.Models
{
    public class Product
    {
        public string RequestId { get; set; }

        public bool ShowRequestId => !string.IsNullOrEmpty(RequestId);
    }
}