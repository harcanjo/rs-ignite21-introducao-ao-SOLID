import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) { }

  handle(request: Request, response: Response): Response {
    // Complete aqui
    const { user_id } = request.query;

    try {
      this.showUserProfileUseCase.execute({ user_id });

      return response.status(200).send();
    } catch (error) {
      return response.status(404).json({ error: "User Dont Exists" });
    }
  }
}

export { ShowUserProfileController };
