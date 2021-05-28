exports.seed = function (knex) {
  // Inserts seed entries
  return knex("recipe_steps").insert([
    {
      step_number: 1,
      recipe_id: 1,
      ingredient_id: 1,
      step_instructions: "cook hamburger",
      ingredient_details_id: 1,
    },
    {
      step_number: 2,
      recipe_id: 1,
      ingredient_id: 3,
      step_instructions: "place hamburger on bread",
      ingredient_details_id: 2,
    },

    {
      step_number: 1,
      recipe_id: 2,
      ingredient_id: 1,
      step_instructions: "cook hamburger",
      ingredient_details_id: 1,
    },
    {
      step_number: 2,
      recipe_id: 2,
      ingredient_id: 2,
      step_instructions: "cook beans",
      ingredient_details_id: 1,
    },
    // {step_number: 3, recipe_id: 2 , ingredient_id: [1,2], step_instructions: 'combine ingredients', ingredient_details: [1,2] },
    { step_number: 3, recipe_id: 2, step_instructions: "combine ingredients" },

    {
      step_number: 1,
      recipe_id: 3,
      ingredient_id: 3,
      step_instructions: "open peanut butter",
      ingredient_details_id: 1,
    },
    {
      step_number: 2,
      recipe_id: 2,
      ingredient_id: 4,
      step_instructions: "spread on bread",
      ingredient_details_id: 2,
    },
  ]);
};
