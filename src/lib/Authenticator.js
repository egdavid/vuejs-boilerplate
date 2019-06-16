import store from '@/store'

export default class Authenticator {

  constructor () {
    /* For later use */
  }

  requireAuth(to, from, next) {
    if (! (new Authenticator()).isAuthenticated()) {
      next({
        path: '/',
        query: { redirect: to.fullPath }
      });
    } else {
      next()
    }
  }

  login (authData) {
    /* Call authentication method (Ex: Auth0 login) or validate authData */
  }

  logout() {
    /* Call logout method (Ex: Auth0 logout) */
  }

  handleAuthentication () {
    return new Promise((resolve, reject) => {
      /* Replace with your own authentication logic */
      const err = false
      const sessionData = {
        accessToken: btoa(+new Date()).slice(0, -5), // dev: random unique string
        idToken: btoa(+new Date()).slice(0, -2), // dev: longer random unique string
        expiresIn: new Date().getTime() // dev: timestamp
      }

      if (err) return reject(err)
      resolve(sessionData)
    })
  }

  isAuthenticated() {
    return store.state.session.authenticated
  }

}
