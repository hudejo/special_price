const { execute } = require('@evershop/postgres-query-builder');

// eslint-disable-next-line no-multi-assign
module.exports = exports = async (connection) => {
  // add special_price column to product
  await execute(
    connection,
    `ALTER TABLE product ADD COLUMN IF NOT EXISTS special_price numeric(12, 4) NULL`
  );
};
