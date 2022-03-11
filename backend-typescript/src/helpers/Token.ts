import { sign, verify, decode } from 'jsonwebtoken';

import auth from '../config/auth';

export interface IPayload {
  user: {
    name: string;
    email: string;
    role?: {
      name: string;
      is_admin: boolean;
    };
  };
}

interface ISubject {
  sub: string;
}

const {
  secret_token,
  expires_in_token,
  secret_refresh_token,
  expires_in_refresh_token,
} = auth;

class TokenUtils {
  static generateToken(user_id: string, payload: Object = {}) {
    const token = sign(payload, secret_token, {
      subject: user_id,
      expiresIn: expires_in_token,
    });

    return token;
  }

  static generateRefreshToken(user_id: string, payload: Object = {}) {
    const refresh_token = sign(payload, secret_refresh_token, {
      subject: user_id,
      expiresIn: expires_in_refresh_token,
    });

    return refresh_token;
  }

  static verifyToken(
    token: string,
    tokenType: 'token' | 'refresh_token'
  ): ISubject {
    let secret = secret_token;

    if (tokenType === 'refresh_token') {
      secret = secret_refresh_token;
    }

    const decode = verify(token, secret) as ISubject;

    return decode;
  }

  static decodeToken(token: string): IPayload {
    const payload = decode(token, { json: true });

    return payload as IPayload;
  }
}

export { TokenUtils };
