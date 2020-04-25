import { mapStateToProps, QuestionDetailDisplay } from "../QuestionDetail";
import renderer, { create } from 'react-test-renderer'
import React from "react";

describe(`The Question Detail Component`, ()=>{
  describe('The container element', ()=>{
    describe('Map state to props', ()=> {
      it('should map state to props correctly', ()=>{
        const sampleQuestion = { 
          question_id: 1,
          title:'help me', 
          body:"what is the meaning of life?", 
          answer_count: 0
        }
        const appState = {
          questions: [
            sampleQuestion
          ]
        }
        const componentProps = {
          question_id: 1
        }
        const componentState = mapStateToProps(appState,componentProps)
        expect(componentState).toEqual(sampleQuestion)
      })
    })  
  })

  describe('The Display element', ()=>{
    it(`Should not regress`, ()=>{
      const tree = renderer.create(
        <QuestionDetailDisplay 
          question_id={1}
          title='help me!' 
          body="what is the meaning of life?"
          answer_count= {0}
          tags={['hitchhickers guide to the galaxy']}
        />
      )
      expect(tree.toJSON()).toMatchSnapshot()
    }) 
  })
  
})