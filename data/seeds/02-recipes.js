exports.seed = function (knex) {
  return knex("recipes").insert([
    { recipe_name: "hamburger" },
    { recipe_name: "chili" },
    { recipe_name: "sandwich" },
  ]);
};
