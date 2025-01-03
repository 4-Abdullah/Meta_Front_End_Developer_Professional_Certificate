import { fireEvent, render, screen } from "@testing-library/react";
import FeedbackForm from "./FeedbackForm";

describe("Feedback Form", () => {
  test("User is able to submit the form if the score is lower than 5 and additional feedback is provided", () => {
    const score = "3";
    const comment = "The pizza crust was too thick";
    const handleSubmit = jest.fn();
    render(<FeedbackForm onSubmit={handleSubmit} />);
    const rangeInput = screen.getByLabelText(/Score/)
    fireEvent.change(rangeInput,{target:{value:score}})
    
    const textarea = screen.getByLabelText(/Comment/)
    fireEvent.change(textarea,{target:{value:comment}})

    const submitbutton = screen.getByRole("button")
    fireEvent.click(submitbutton);   

    expect(handleSubmit).toHaveBeenCalledWith({
      score,
      comment,
    });
  });

  test("User is able to submit the form if the score is higher than 5, without additional feedback", () => {
    const score = "9";
    const handleSubmit = jest.fn();
    render(<FeedbackForm onSubmit={handleSubmit} />);
    const rangeInput = screen.getByLabelText(/Score/)
    fireEvent.change(rangeInput,{target:{value:score}})
   
    const submitbutton = screen.getByRole("button")
    fireEvent.click(submitbutton);   
  
    expect(handleSubmit).toHaveBeenCalledWith({
      score,
      comment: "",
    });
  });
});
