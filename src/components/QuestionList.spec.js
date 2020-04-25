describe(`The Question List Component`, ()=>{
  beforeAll(()=>{
    console.log('before all')
  })
  beforeEach(()=>{
    console.log('before each')
  })
  afterAll(()=>{
    console.log('before all')
  })
  afterEach(()=>{
    console.log('before each')
  })

  it.skip(`Should display lifes meaning`, ()=>{
    expect(40+2).toEqual(42-1)
  })


  it(`Should display a list of items`, ()=>{
    expect(['item1']).toEqual(['item1'])
  })

})