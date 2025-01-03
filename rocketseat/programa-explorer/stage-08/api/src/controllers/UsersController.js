const AppError = require("../utils/AppError");

class UsersController {

  /*

    * Index - GET to list a lot of registers.
    * Show - GET to show a specific register.
    * Create - POST to create a register.
    * Update - PUT to update a register.
    * Delete - DELETE to remove a register.

  */

  create(request, response) {
    const { name, email, password } = request.body;

    if (!name) throw new AppError("Name is required!")

    response.status(201).json({ name, email, password });
  }




}

module.exports = UsersController;