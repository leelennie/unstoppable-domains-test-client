import UAuth from '@uauth/js'

const uauth = new UAuth({
  clientID: 'uauth_example_spa_id',
  clientSecret: 'uauth_example_spa_secret',
  redirectUri: 'http://localhost:5000/callback',
})

window.login = async () => {
  try {
    const authorization = await uauth.loginWithPopup()

    console.log(authorization)
  } catch (error) {
    console.error(error)
  }
}
