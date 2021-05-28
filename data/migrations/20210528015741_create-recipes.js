exports.up = function (knex) {
  return knex.schema
    .createTable("recipes", (tbl) => {
      tbl.increments("recipe_id");
      tbl.text("recipe_name", 128).unique().notNullable();
    })
    .createTable("ingredients", (tbl) => {
      tbl.increments("ingredient_id");
      tbl.text("ingredient_name").unique().notNullable();
      tbl
        .integer("recipe_id")
        .references("recipes.recipe_id")
        .notNullable()
        .unsigned();
    })
    .createTable("ingredient_details", (tbl) => {
      tbl.increments("ingredient_detail_id");
      tbl.float("quantity").notNullable();
      tbl.integer("ingredient_id").references("ingredients.ingredient_id");
    })
    .createTable("recipe_steps", (tbl) => {
      tbl.increments("recipe_steps_id");
      tbl.integer("step_number").unsigned().notNullable();
      tbl.text("step_instructions",255).notNullable();
      tbl
        .integer("recipe_id")
        .references("recipes.recipe_id")
        .notNullable()
        .unsigned();
      tbl
      .integer("ingredient_id")
      .references("ingredients.ingredient_id")
      .unsigned()
    });
};

exports.down = function (knex) {
  return knex.schema
  .dropTableIfExists("recipe_steps")
  
};
