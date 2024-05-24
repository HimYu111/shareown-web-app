import { v4 as uuidv4 } from 'uuid';
import Cookies from 'js-cookie';

export function setSessionCookie() {
    if (!Cookies.get('consent') || !(Cookies.get('consent') === 'true')) return null; // Check for consent

    if (Cookies.get('sessionId')) return Cookies.get('sessionId');

    const sessionId = uuidv4();
    Cookies.set('sessionId', sessionId, { expires: 60 * 60 * 24  }); //
    return sessionId;
}
