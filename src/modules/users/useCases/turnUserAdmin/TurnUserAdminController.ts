import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) { }

  handle(request: Request, response: Response): Response {
    // Complete aqui
    const { user } = request.body;

    try {
      this.turnUserAdminUseCase.execute(user);

      return response.status(200).send();
    } catch (error) {
      return response.status(404).json({ error: "User Dont Exists" });
    }
  }
}

export { TurnUserAdminController };
