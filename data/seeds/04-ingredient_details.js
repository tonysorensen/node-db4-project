exports.seed = function (knex) {
  return knex("ingredient_details").insert([{ quantity: 1 }, { quantity: 2 }]);
};
