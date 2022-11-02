module.exports.up = async function up(knex) {
  await knex.raw(`
    CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

    CREATE TABLE contracts (
        id UUID NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
        created_at timestamp with time zone NOT NULL DEFAULT NOW(),
        status text NOT NULL,
        renter JSONB NOT NULL,
        owner JSONB NOT NULL,
        asset JSONB NOT NULL
    );
  `);

  await knex.raw(`
    INSERT INTO contracts (id, status, renter, owner, asset) VALUES
      ('4f9167af-95f4-4c46-b964-b2e54cc2906f', 'DRAFT', '{"first_name": "John", "last_name": "Doe"}', '{"first_name": "Jane", "last_name": "Duh"}', '{"value": 1337}'),
      ('7b2cdab5-0580-48cd-b6e7-9fb2d15f676e', 'ISSUED', '{"first_name": "Alice", "last_name": "Guy-Blaché"}', '{"first_name": "Margaret", "last_name": "Hughes"}', '{"value": 1630}'),
      ('e8fc8982-08ae-41d0-8ae0-4690967f26dd', 'ISSUED', '{"first_name": "Bob", "last_name": "McCase"}', '{"first_name": "Ronald", "last_name": "Noproblem"}', '{"value": 3500}');
  `);

  await knex.raw(`
    CREATE TABLE cases (
        id UUID NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
        contract_id uuid NOT NULL REFERENCES contracts (id) ON DELETE CASCADE,
        created_at timestamp with time zone NOT NULL DEFAULT NOW(),
        status text NOT NULL,
        incident_date timestamp with time zone NOT NULL,
        refund real,
        refunded real
    );
  `);

  await knex.raw(`
    INSERT INTO cases (contract_id, status, incident_date, refund, refunded) VALUES
    ('e8fc8982-08ae-41d0-8ae0-4690967f26dd', 'REJECTED', NOW(), 5000, 0),
    ('e8fc8982-08ae-41d0-8ae0-4690967f26dd', 'RECEIVED', NOW(), 1500, 0);
  `);
};

module.exports.down = async function down(knex) {
  await knex.raw(`
    DROP TABLE cases;
    DROP TABLE contracts;
  `);
};
