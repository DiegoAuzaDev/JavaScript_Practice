const getData = () => {
  const API_URL =
    "https://leadup-backend.onrender.com/api"; // place holder

  const API_TOKEN =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZmEzOWYyMzdmM2JmNGYyYTEwYzk5MSIsImlhdCI6MTcxMTAzODA4MH0.qyJA2-Fsy7MsVRBn4O8llQOTYkmoaKeTcuhDiZTJbIQ";

  let headers = {
    Authorization: `Bearer ${API_TOKEN}`,
    "application-type": "application/json",
  };
   const body = JSON.stringify({
  name: "Diego Luis Auza aaaaatrujillo 12312312312",
  address: "325 Marché Way Unit 107, Ottawa, ON ",
  country: "CA",
  phoneNumber: [3118999898, 121231112312312, 11111, 12312312],
  task: [],
})

  fetch(API_URL, {
    method: "GET",
    mode: "cors",
    headers: headers,
    body : body
  })

    .then((response) => {
      if (!response.ok) {
        throw new Error("Error");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

getData();
