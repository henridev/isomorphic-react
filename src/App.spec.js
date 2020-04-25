it.skip(`async test basic`, done=>{
  setTimeout(done, 5001);
})

it(`async test promise`, ()=>{
  return new Promise(res=>setTimeout(res,100))
})


it(`async test await`, async () =>{
  await new Promise(res => setTimeout(res, 1000))
})