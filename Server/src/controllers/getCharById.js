const axios =require('axios')

const getCharById = (res, id) => {
 axios
 .get(`https://rickandmortyapi.com/api/character/${id}`)
  .then((response) => response.data)
  .then((data) => {
    let char = {
        id: id,
        name: data.name,
        gender: data.gender,
        origin: data.origin.name,
        image: data.image,
        status: data.status,
       };
    
    return res
    .writeHead(200, {'Content-type': 'applicationa/json'})
    .end(JSON.stringify(char))
  })

  .catch(error=>{
    return res
    .writeHead(500,{'Content-type' : 'text/plain'})
    .end(error.message)
  });
};


module.exports = {
    getCharById
}

