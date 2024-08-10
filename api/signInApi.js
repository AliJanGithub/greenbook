const signInApi = async (url, data, setUser, setIsLoggedIn) => {
  const response = await fetch(url, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data),
  });

  const result = await response.json();
  // console.log("result is ", result);

  // If sign-in is successful and user data is returned
  if (response.ok && result.user) {
    // console.log("response and result is ", response, result.user);
    setUser({
      name: result.user.name,
      email: result.user.email,
      userType: result.user.userType || 'Default',
    });
    setIsLoggedIn(true);
    localStorage.setItem('userData', JSON.stringify(result.user)); // Optionally store in local storage
  }

  return result; // Return the result for further processing
};

export default signInApi;
