exports.seed = function (knex) {
  return knex("ingredients").insert([
    { ingredient_name: "hamburger" },
    { ingredient_name: "beans" },
    { ingredient_name: "bread" },
    { ingredient_name: "peanut butter" },
  ]);
};
