import Form from "./Form";

function ConfirmationForm({ description = "", isPending = false }) {
  return (
    <Form isPending=>
      <p>{description}</p>
    </Form>
  );
}

export default ConfirmationForm;
