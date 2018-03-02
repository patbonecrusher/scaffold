import Foo from './myClass';
import EBParse from './EBParse';

const btn = document.getElementById('iii');
let f = new Foo(document.getElementById('iii'));

btn.onclick = () => {
    let idx = aAccounts.length+1;
    // aAccounts.push({id:idx, AccountName: `Account ${idx}`, City: "Rochester"});
    $$('grid').add({id:idx, AccountName: `Account ${idx}`, City: "Rochester"}, idx-1);
    console.log(idx);
}

import main from './main';

main();


console.log('here');
(async function () {
    const photoTable = new EBParse("EBPhoto");
    photoTable.query.equalTo("ParentID", "r27JjCuOg9");
    let photos = await photoTable.find();
    //console.log(photos[0].get("image")._url);
    console.log("#=" + photos.length);
})();

var aAccounts = [
    {id:1, AccountName: "Account 1", City: "Toronto"},
    {id:2, AccountName: "Account 2", City: "New York"},
    {id:3, AccountName: "Account 3", City: "Chicago"},
    {id:4, AccountName: "Account 4", City: "Toronto"}
];

var data = new webix.DataCollection({ 
    template:"#id#. #AccountName# - #City#",
    data:aAccounts // the data source
});

var dTable = new webix.ui({
    container: "Grid1",
    view: "datatable",
    id: "grid",
    height:400,
    columns: [
        {header: "Account", id: "AccountName",  width: 300},
        {header: "City",    id: "City",         width: 200}
    ],
    width: 500,
    onBindUpdate: (data) => {
        console.log(data)
    }
    // data: aAccounts
});

$$('grid').data.sync(data);

