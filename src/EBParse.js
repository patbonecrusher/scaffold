import Parse from 'parse';

Parse.serverURL = "https://parseapi.back4app.com";
Parse.User._currentUser = new Parse.User();
Parse.initialize("fNzUO93vYbxhEjGMCrGMPzIlHMuN41228lBjlgD1", "ssTKRnqHotbNDwB7zh7iT63UbREX9NHaD6CYetFE"); // Back4App Test database

export default class EBParse {
    
    constructor(className) {
        this.table = Parse.Object.extend(className);
        this.query = new Parse.Query(this.table);
        this.query.notEqualTo("Archived", "Yes");
        this.query.notEqualTo("Deleted", "Yes");
    }
    
    async find() {
        return await this.query.find(); 
    }
}
