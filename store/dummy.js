const db = {
  user: [
    {
      id: 1,
      name: 'Miguel'
    }
  ]
};

function list(table) {
  return db[table];
}

function get(table, id) {
  const coll = list(table);
  return coll.find( item => item.id === id ) || null;
}

function upsert(table, data) {
  db[table].push(data);
}

function remove(table, id) {
  return true;
}

module.exports = {
  list,
  get,
  upsert,
  remove
}