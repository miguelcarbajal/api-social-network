const nanoid = require('nanoid');
const TABLE = 'user';

module.exports = function (injectedStore) {
  if (!injectedStore) injectedStore = require('../../../store/dummy');

  return {
    list: () => injectedStore.list(TABLE),
    get: (id) => injectedStore.get(TABLE, id),
    upsert: (body) => {
      const user = body;
      if (!user.id) {
        user.id = nanoid();
      }

      injectedStore.upsert(TABLE, user)
    }
  }
}
