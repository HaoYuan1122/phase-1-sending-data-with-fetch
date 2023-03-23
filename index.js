// Add your code here


// function submitData (a,b){

//     let formData={
//         name:a,
//         email:b
//     }
//     const configurationObject={
//         method:'POST',
//         headers: {
//             "Content-Type": "application/json",
//             "Accept": "application/json",
//           },
//           body: JSON.stringify(formData),
//     }

//     fetch('http://localhost:3000/users',configurationObject)
//       .then(res=>res.json())
//       .then(object=>renderOnPage(object))
//       .catch(error=>errorMessage(error))
//       function errorMessage(error){
//         let body=document.querySelector('body')
//         let p=document.createElement('p')
//         p.textContent=`wrong ${error}`
//         body.appendChild(p)
//       }
//       function renderOnPage(obj){
//         let body=document.querySelector('body')
//         let p=document.createElement('p')
//         p.innerHTML=obj.id
//         body.appendChild(p)
//         console.log(obj)
//       }
// }

// submitData('peter','peter@gamil.com')


// const formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle",
//   };
  
//   const configurationObject = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json",
//     },
//     body: JSON.stringify(formData),
//   };
  
//   fetch("http://localhost:3000/dogs", configurationObject)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(object=>renderOnPage(object));
//     function renderOnPage(obj){
//         p=document.createElement('p')
//         p.innerText=obj.id
//         body=document.querySelector('body')
//         body.appendChild(p)
//     }


function submitData(uName,uEmail){
    const configurationObj={
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "Accept":"application/json"
        },
        body: JSON.stringify({
            name:uName,
            email:uEmail
        })
    }
    return fetch('http://localhost:3000/users',configurationObj).then(res=>res.json()).then(renderOnPage).catch(handleError)
    function renderOnPage(obj){
        let body=document.querySelector('body')
        let p=document.createElement('p')
        p.innerHTML=obj.id
        body.appendChild(p)
      }
      function handleError(error){
        let p=document.createElement('p')
        let body=document.querySelector('body')
        p.innerHTML=error.message
        body.appendChild(p)
      }
}
     