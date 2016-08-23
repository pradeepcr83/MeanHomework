/*
 *  Inserts "doc" into the collection "movies".
 */
exports.insert = function(db, doc, callback) {
    // TODO: implement
    db.collection('movies').insert(doc);
  callback(null);
};

/*
 *  Finds all documents in the "movies" collection
 *  whose "director" field equals the given director,
 *  ordered by the movie's "title" field. See
 *  http://mongodb.github.io/node-mongodb-native/2.0/api/Cursor.html#sort
 */
/*db.messages.find({ headers : { From: "reservations@marriott.com" } })

This queries for documents where headers equals { From: ... }, i.e. contains no other fields.

db.messages.find( { 'headers.From': "reservations@marriott.com" }  )

This only looks at the headers.From field, not affected by other fields contained in, or missing from, headers.*/
exports.byDirector = function (db, director, callback) {
    // TODO: implement
    var query = { 'director': director };
    console.log(query);
    db.collection('movies').find(query).toArray(function (err, doc) {
        doc.forEach(function (d) {
            console.log("77777777777777");
            console.log(JSON.stringify(d));
        })
    });
    callback(null, []);
};

myfunc = function (doc){
    console.log("77777777777777");
    
};
myfunc2 = function (doc) {
    console.log("77777777777777");
    console.log(JSON.stringify(doc));
}