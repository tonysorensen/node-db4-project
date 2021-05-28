
exports.seed = function(knex) {
  // Deletes ALL existing entries
 
      // Inserts seed entries
      return knex('recipes').insert([
        {recipe_id: 1, recipe_name: 'hamburger'},
        {recipe_id: 2, recipe_name: 'chili'},
        {recipe_id: 3, recipe_name: 'sandwich'}
      ]);
};
