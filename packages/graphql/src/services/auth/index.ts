import axios from 'axios';
import { JWKS, JWT } from 'jose';

import logger, { serviceTags } from '../../logging';
import type { User } from '../../types';

export interface AuthServiceConfiguration {
  issuer: string;
  ssoHost: string;
}

export class AuthService {
  private readonly issuer: string;

  private readonly ssoHost: string;

  constructor({ issuer, ssoHost }: AuthServiceConfiguration) {
    this.issuer = issuer;
    this.ssoHost = ssoHost;
  }

  public async getUser(accessToken?: string): Promise<User | null> {
    if (accessToken) {
      try {
        const { sub, scope, authorities = '' } = JWT.verify(
          accessToken.replace(/^Bearer\s+/i, ''),
          await this.getJWKSKeyStore(),
          {
            issuer: this.issuer
          }
        ) as any;

        return {
          id: sub,
          scopes: (scope as string)
            .split(' ')
            .map(s => s.trim())
            .filter(Boolean),
          authorities: (authorities as string)
            .split(',')
            .map(s => s.trim())
            .filter(Boolean)
        };
      } catch (error) {
        logger.error(error.message, {
          tags: [...serviceTags, 'auth', 'error'],
          error
        });
      }
    }

    return null;
  }

  private async getJWKSKeyStore(): Promise<JWKS.KeyStore> {
    const { data: jwks } = await axios.get(
      `${this.ssoHost}/auth/realms/fdk/protocol/openid-connect/certs`
    );

    return JWKS.asKeyStore(jwks);
  }
}
