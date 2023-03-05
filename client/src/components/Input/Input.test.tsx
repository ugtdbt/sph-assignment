import INPUT from "./Input";
import { render, fireEvent } from "@testing-library/react";
import { FormProvider, useForm } from "react-hook-form";
import "../../utils/matchMedia";

const Component = () => {
  const methods = useForm({ defaultValues: { test: "" } });
  return (
    <FormProvider {...methods}>
      <INPUT name="test" label="test" />
    </FormProvider>
  );
};

it("Should display input with text", async () => {
  render(<Component />);

  const element = document.querySelector("[name='test']");
  element &&
    fireEvent.input(element, {
      target: {
        value: "something",
      },
    });

  expect(element).toHaveValue("something");
});
