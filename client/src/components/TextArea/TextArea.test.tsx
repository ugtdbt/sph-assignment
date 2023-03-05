import TEXTAREA from "./TextArea";
import { render, fireEvent } from "@testing-library/react";
import { FormProvider, useForm } from "react-hook-form";
import "../../utils/matchMedia";

const Component = () => {
  const methods = useForm({ defaultValues: { test: "" } });
  return (
    <FormProvider {...methods}>
      <TEXTAREA name="test" label="test" />
    </FormProvider>
  );
};

it("Should display textarea with text", async () => {
  render(<Component />);

  const input = document.querySelector("[name='test']");
  input &&
    fireEvent.input(input, {
      target: {
        value: "something",
      },
    });

  expect(input).toHaveValue("something");
});
