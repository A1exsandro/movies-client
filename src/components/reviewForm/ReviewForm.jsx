import React from 'react'
import { Button, Form } from 'react-bootstrap'

const ReviewForm = () => {
  return (
    <Form>
      <Form.Group className='mb-3' controlId='exampleForm.ControlsTextarea1'>
        <Form.Label>{labelText}</Form.Label>
        <Form.Control 
          ref={revText} 
          as="textarea" 
          rows={3} 
          defaultValue={defaultValue}
        />
      </Form.Group>
      <Button variant='outline-info' onclick={handleSubmit}>Submit</Button>
    </Form>
  )
}

export default ReviewForm
