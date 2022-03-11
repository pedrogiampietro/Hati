import { injectable, inject } from 'tsyringe';
import { TokenUtils } from '../helpers/Token';

interface ITokenResponse {
  token: string;
  refresh_token: string;
}

@injectable()
class RefreshTokenService {
  async execute(token: string): Promise<ITokenResponse> {
    const newToken = TokenUtils.generateToken();

    return {
      token: newToken,
      refresh_token,
    };
  }
}

export { RefreshTokenService };
