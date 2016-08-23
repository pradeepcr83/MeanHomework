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
var retDoc = [];
exports.byDirector = function (db, director, callback) {
    // TODO: implement
    var query = { 'director': director };
    console.log(query);
    db.collection('movies').find(query , (function (err, doc) {        
        doc.sort({ 'title': 1 }).toArray(callback);        
    }));  
};
