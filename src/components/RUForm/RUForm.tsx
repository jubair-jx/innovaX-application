import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
type TFormConfig = {
  resolver?: any;
  defaultValues?: Record<string, any>;
};
type TFormProps = {
  children: React.ReactNode;
  onSubmit: SubmitHandler<FieldValues>;
} & TFormConfig;
function RUForm({ children, onSubmit, resolver, defaultValues }: TFormProps) {
  const formConfig: TFormConfig = {};
  if (resolver) {
    formConfig["resolver"] = resolver;
  }
  if (defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }
  const methods = useForm(formConfig);
  const { handleSubmit } = methods;
  const handleOnSubmit: SubmitHandler<FieldValues> = (data) => {
    onSubmit(data);
  };
  return (
    <FormProvider {...methods}>
      <form
        className="rounded-lg border w-full p-4 px-3 md:px-6 grid-cols-12 focus-within:shadow-sm grid gap-2"
        onSubmit={handleSubmit(handleOnSubmit)}
      >
        {children}
      </form>
    </FormProvider>
  );
}

export default RUForm;
