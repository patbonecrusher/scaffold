import EBParse from './EBParse';

console.log('here');
(async function () {
  try {
    const photoTable = new EBParse("EBPhoto");
    photoTable.query.equalTo("ParentID", "r27JjCuOg9");
    let photos = await photoTable.find();
    console.log("#=" + photos.length);
  } catch (err) {
    console.error(err);
  }
})();

const grid_data = JSON.parse('[{"id":1,"title":"The Shawshank Redemption","year":1994,"votes":678790,"rating":9.2,"rank":1},{"id":2,"title":"The Godfather","year":1972,"votes":511495,"rating":9.2,"rank":2},{"id":3,"title":"The Godfather: Part II","year":1974,"votes":319352,"rating":9,"rank":3},{"id":4,"title":"The Good, the Bad and the Ugly","year":1966,"votes":213030,"rating":8.9,"rank":4},{"id":5,"title":"My Fair Lady","year":1964,"votes":533848,"rating":8.9,"rank":5},{"id":6,"title":"12 Angry Men","year":1957,"votes":164558,"rating":8.9,"rank":6}]');
var collection = new webix.DataCollection({ data:grid_data });

collection.attachEvent("onAfterAdd", id => {
  console.log(collection.serialize());
});  
collection.attachEvent("onAfterDelete", id => {
  console.log(collection.serialize());
});  

webix.protoUI({
  name:"editlist"
}, webix.EditAbility, webix.ui.datatable);

webix.ui({
  rows:[
  	{ view:"toolbar", cols:[
    	{ view:"button", value:"Add new", click:function(){
          collection.add({title:"New film "+webix.uid(), rank:7})
        }},
        { view:"button", value:"Remove selected", click:function(){
          var sel = $$("table1").getSelectedId() || $$("table2").getSelectedId();
          if(sel)
          	collection.remove(sel);
        }},
      {gravity:2}
    ]},
    { rows:[
      {
          fitBiggest:true, cells:[
            {
              view:"datatable", 
              id:"table1",
              width:320,
              autoConfig:true,
              select:true
            },
            {
              view:"datatable",
              id:"table2",
              columns:[
                { id:"rank",	header:"", css:"rank",	width:50,	editor:"text"},
                { id:"title",	header:"Film title",	fillspace:true,	editor:"text"},
                { id:"year",	header:"Released" , 	width:80,	editor:"text"},
                { id:"votes",	header:"Votes", 		width:100,	editor:"text"}
              ],
              editaction:"dblclick",
              editable:true,
              scrollX:false,
              select:true
          }
        ]},
      {
        view:"segmented", multiview:true, options:[
          "table1", "table2"
        ]
      }
    ]}
  ]
});


$$("table1").sync(collection);
$$("table2").sync(collection);