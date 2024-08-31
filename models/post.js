const db = require('../config/db');

class post {
    constructor(title,body){
        this.title=title;
        this.body=body;
    }
    save(){
        let d = new Date();
        let yyyy = d.getFullYear();
        let mm = d.getMonth() + 1;
        let dd = d.getDay();

        let createdatdate = `${yyyy}-${mm}-${dd}`;

        let sql = `
        INSERT INTO posts(
            title,
            body,
            created_at
        )
        VALUES(
            '${this.title}'
            '${this.body}'
            '${this.created_at}'
        )
        `;

        const [newpost,_] = db.execute(sql);
        return newpost;
    }

    static findall(){
        let sql = "SELECT * FROM posts;";
        return db.execute(sql);
    }
    static findall(){
        let sql = `SELECT * FROM posts WHERE id = ${id};`;
        return db.execute(sql);
    }

}

module.exports = post;