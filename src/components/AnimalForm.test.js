import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import AnimalForm from "./AnimalForm";

test("animal form adds new animals to animal list", () => {
  const { getByLabelText, getByText} = render(<AnimalForm />);

  // query for the form inputs
  const speciesInput = getByLabelText(/species/i);
  const ageInput = getByLabelText(/age/i);
  const notesInput = getByLabelText(/notes/i);

  // fireEvent function from RTL to fill in the inputs
  fireEvent.change(speciesInput, {
    target: { name: "species", value: "Monkey" }
  });
  fireEvent.change(ageInput, {
    target: { name: "age", value: "15" }
  });
  fireEvent.change(notesInput, {
    target: { name: "notes", value: "docile" }
  });

  console.log(speciesInput.value);

  // query for the submit button
  const submitButton = getByText(/submit!/i);
  fireEvent.click(submitButton);

  // assertion
  const newAnimal = screen.getByText(/monkey/i)
  expect(newAnimal).toBeInTheDocument()
});

