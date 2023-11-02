import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { REDUCER_ACTIONS } from '../appContants';
import '../components/Button/index.css';
import ModuleContext from '../hooks/context/ModuleContext';
import users from '../mock/user';
import { createCategory } from '../services/category';
import { createTicket } from '../services/ticket';
import InputElement from './fields/InputElement';
import SelectElement from './fields/SelectElement';
import TextAreaElement from './fields/TextAreaElement';

export const TicketForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { dispatchTicket, categories } = useContext(ModuleContext);

  const handleFormSubmit = async (ticket) => {
    const { data } = await createTicket(ticket);
    dispatchTicket({ type: REDUCER_ACTIONS.ADD, payload: data });
  };

  const priorityOptions = [
    { value: 'low', label: 'Low' },
    { value: 'medium', label: 'Medium' },
    { value: 'high', label: 'High' },
  ];
  const categoryOptions = (categories || []).map((category) => ({
    value: category.id,
    label: category.name,
  }));
  const assigneeOptions = (users || []).map((user) => ({
    value: user.id,
    label: user.name,
  }));
  return (
    <div className="flex justify-center">
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="flex flex-col w-fit justify-start"
      >
        <InputElement
          label="Title"
          placeholder="Laptop not working"
          fieldName="title"
          register={register}
          errors={errors}
        />
        <TextAreaElement
          label="Description"
          placeholder="Laptop keeps on restarting..."
          fieldName="description"
          register={register}
          errors={errors}
        />
        <div className="flex flex-row w-fit gap-6 justify-start">
          <SelectElement
            label="Department"
            fieldName="category"
            register={register}
            errors={errors}
            options={categoryOptions}
          />
          <SelectElement
            label="Assignee"
            fieldName="assignee"
            register={register}
            errors={errors}
            options={assigneeOptions}
          />
        </div>
        <SelectElement
          label="Priority"
          fieldName="priority"
          register={register}
          errors={errors}
          options={priorityOptions}
        />
        <button
          type="submit"
          className="button-primary bg-green-500 hover:text-green-600 border-green-500"
        >
          Create Ticket
        </button>
      </form>
    </div>
  );
};

export const CategoryForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { dispatchCategory } = useContext(ModuleContext);

  const handleFormSubmit = async (ticket) => {
    const { data } = await createCategory(ticket);
    dispatchCategory({ type: REDUCER_ACTIONS.ADD, payload: data });
  };
  return (
    <div className="flex justify-center">
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="flex flex-col w-fit justify-start"
      >
        <InputElement
          label="Department title"
          placeholder="IT-Support"
          fieldName="name"
          register={register}
          errors={errors}
        />
        <TextAreaElement
          label="What they do"
          placeholder="Request to Change OS..."
          fieldName="description"
          register={register}
          errors={errors}
        />
        <button
          type="submit"
          className="button-primary bg-green-500 hover:text-green-600 border-green-500"
        >
          Create Category
        </button>
      </form>
    </div>
  );
};
