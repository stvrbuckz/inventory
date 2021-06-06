const { Model } = require('objection');
const schema = require('./staff.schema.json');

class staffMember extends Model {
    static get tableName() {
      return 'staff';
    }

    static get jsonSchema() {
      return schema;
    }

}

module.exports = staffMember;