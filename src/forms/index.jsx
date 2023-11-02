import { useForm } from 'react-hook-form';
import InputElement from './fields/InputElement';
import SelectElement from './fields/SelectElement';
import TextAreaElement from './fields/TextAreaElement';
import  '../components/Button/index.css';
import { createTicket } from '../services/ticket'
import { createCategory } from '../services/category'
export const TicketForm = () => {
    const {register, formState: {errors}, handleSubmit} = useForm()

    const handleFormSubmit = (data) => {
        createTicket(data)
    }
    const priorityOptions = [{value:'low', label: 'Low'}, {value:'medium', label: 'Medium'}, {value:'high', label: 'High'}]
    const categoryOptions = [{value:'1233', label: 'IT-Support'}, {value:'1342', label: 'Admin'}, {value:'3421', label: 'HR- Operations'}]
    const assigneeOptions = [{value:'1111', label: 'Balaji'}, {value:'2222', label: 'Pari'}, {value:'3333', label: 'Arun'}]
    return (
        <div className='flex justify-center'>
        <form onSubmit={handleSubmit(handleFormSubmit)} className='flex flex-col w-fit justify-start'>
            <InputElement label='Title' placeholder='Laptop not working' fieldName='title' register={register} errors={errors} />
            <TextAreaElement label='Description' placeholder='Laptop keeps on restarting...' fieldName='description' register={register} errors={errors} />
            <div className="flex flex-row w-fit gap-6 justify-start">
                <SelectElement label='Department' fieldName='category' register={register} errors={errors} options={categoryOptions} />
                <SelectElement label='Assignee' fieldName='assignee' register={register} errors={errors} options={assigneeOptions} />
            </div>
            <SelectElement label='Priority' fieldName='priority' register={register} errors={errors} options={priorityOptions} />
            <button  type='submit' className='button-primary bg-green-500 hover:text-green-600 border-green-500'>Create Ticket</button>
        </form>
        </div>
    )

}

export const CategoryForm = () => {
    const {register, formState: {errors}, handleSubmit} = useForm()

    const handleFormSubmit = (data) => {
        createCategory(data)
    }
    return (
        <div className='flex justify-center'>
            <form onSubmit={handleSubmit(handleFormSubmit)} className='flex flex-col w-fit justify-start'>
                <InputElement label='Department title' placeholder='Laptop not working' fieldName='name' register={register} errors={errors} />
                <TextAreaElement label='What they do' placeholder='Laptop keeps on restarting...' fieldName='description' register={register} errors={errors} />           
                <button  type='submit' className='button-primary bg-green-500 hover:text-green-600 border-green-500'>Create Category</button>
            </form>
        </div>
    )

}