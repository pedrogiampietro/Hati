import { Request } from 'express';
import publicIp from 'public-ip';

async function getIp(request: Request): Promise<string> {
  const forwardedFor =
    request.headers['X-Forwarded-For'] || request.headers['x-forwarded-for'];
  const ip = Array.isArray(forwardedFor)
    ? forwardedFor[0]
    : forwardedFor || request.ip;

  if (ip?.includes('::ffff:')) {
    return ip.replace('::ffff:', '');
  }

  if (ip === '::1') {
    // Localhost request (local development) => get external ip of the developer machine
    return publicIp.v4();
  }

  return ip;
}

export { getIp };
