using CoreAngularJayson.Helper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;

namespace CoreAngularJayson.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MoneyConverterController : ControllerBase
    {
        [HttpGet]
        public IResult Get(decimal amount)
        {
            var moneyString = MoneyConverterHelper.ConvertToWordsFull(amount.ToString());
            return Results.Ok(moneyString);
        }
    }
}