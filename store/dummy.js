const db = {
  user: [
    {
      id: '1',
      name: 'Miguel'
    }
  ]
};

async function list(table) {
  return db[table];
}

async function get(table, id) {
  const coll = await list(table);
  return coll.filter( item => item.id === id )[0] || null;
}

async function upsert(table, data) {
  db[table].push(data);
}

async function remove(table, id) {
  return true;
}

module.exports = {
  list,
  get,
  upsert,
  remove
}