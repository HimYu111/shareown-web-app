import { v4 as uuidv4 } from 'uuid';
import Cookies from 'cookies-js';

function setSessionCookie() {
  if (Cookies.get('sessionId')) return Cookies.get('sessionId');

  const sessionId = uuidv4();
  Cookies.set('sessionId', sessionId, { expires: 60 * 60 * 24 * 150 }); // Expires in 150 days
  return sessionId;
}