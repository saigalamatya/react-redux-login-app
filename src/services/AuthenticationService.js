class AuthenticationService {
  static baseUrl = 'http://localhost:3000';

  // static get(path, params) {
  //   const url = RebrandlyApi.baseUrl + path;
  //   const password = sessionStorage.getItem('password') || params.header.password;

  //   return fetch(url, {
  //     headers: {
  //       password
  //     }
  //   })
  //   .then(response => {
  //     if (!response.ok) {
  //       return Promise.reject(new Error(response.statusText));
  //     } else {
  //       return response.json();
  //     }
  //   })
  // }

  static post(user) {
    const url = AuthenticationService.baseUrl + '/api/auth/login';

    return fetch(url, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(user)
    })
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.log(err)
    })
  }
}

export default AuthenticationService;