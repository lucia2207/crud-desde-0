import React from 'react';
import { useForm } from 'react-hook-form'

const AddUserForm = (props) => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = (data,e) => {
       
        props.addUser(data);
        e.target.reset();
    }

    return (
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Name</label>
                <input
                    {...register('name', {
                        required: true,
                    })}
                />
                {errors.name?.type === 'required' && (
                    <span className='text-danger text-small d-block mb-2'>
                        Campo obligatorio
                    </span>
                )}
                <label>Username</label>
                <input
                    {...register('username', {
                        required: true,
                    })}
                />
                {errors.username?.type === 'required' && (
                    <span className='text-danger text-small d-block mb-2'>
                        Campo obligatorio
                    </span>
                )}
                <button className='btn btn-primary' type='submit'>Add new user</button>
            </form>
    );
}

export default AddUserForm;