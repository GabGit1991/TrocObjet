using AutoMapper;
using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Mvc;

namespace api;


[Microsoft.AspNetCore.Mvc.Route("api/{controller}")]
public class ObjectController
{

    private readonly MaDal db;
    private readonly IMapper mapper;
    public ObjectController(MaDal db, IMapper mapper)
    {
        this.db = db;
        this.mapper = mapper;
    }

    // GET api/object
    [HttpGet]
    public IEnumerable<SearchResult> Get(string searchText)
    {
        if (searchText == null)
        {
            searchText = "";
        }
        var daos = db.Objects.Where(c => c.Label.Contains(searchText)).ToArray();
        return daos.Select(dao => new SearchResult()
        {
            Id = dao.IdObject,
            Label = dao.Label,
            Description = dao.Description.Substring(0, 10)
        });
    }


    // GET api/object/ "guid"
    [HttpGet("{id:guid}")]
    public object GetObject(Guid id) {
        var dao = db.Objects.Find(id);
        var model=mapper.Map<ObjectModel>(dao);
        return model;
    }
}