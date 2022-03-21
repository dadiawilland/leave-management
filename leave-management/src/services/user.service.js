export const login = (data) => {
    //add sys var
  fetch("http://localhost:8080/api/users/login", requestOptions(data))
    .then(res => res.json())
    .then(
      (result) => {
        console.log(result)
      //   if (result?.length) {
      //     navigate("/register", { replace: true })
      //   }
      }
    )
}

export const register = (data) => {
  fetch("http://localhost:8080/api/users", requestOptions(data))
  .then(res => res.json())
  .then(
    (result) => {
      console.log(result)
    //   if (result?.length) {
    //     navigate("/register", { replace: true })
    //   }
    }
  )
}

const requestOptions = (data) => {
    return (
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }
    )
};
