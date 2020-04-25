import React from 'react'
import {create} from "react-test-renderer";
import TagsList from './TagsList';

describe("Tags list", ()=>{
  it('Should render as expected', ()=>{
    const tree = create(<TagsList tags={['swift', 'css', 'html']}/>).toJSON()
    console.log('tree', tree)

    
    expect(tree).toMatchSnapshot();
  })
})

