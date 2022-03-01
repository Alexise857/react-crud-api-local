import React, {useEffect, useState} from 'react';

const initialForm = {
    name: "",
    constellation: "",
    id: null
}

const CrudForm = ({ createData, updateData, dataToEdit, setDataToEdit }:any) => {

    const [form, setForm] = useState<any>(initialForm);

    useEffect(() => {
        if (dataToEdit) {
            setForm(dataToEdit)
        } else {
            setForm(initialForm)
        }
    }, [dataToEdit]);


    const handleChange = (e: any) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (!form.name || !form.constellation) {
            alert('Datos incompletos')
            return
        }
        if (!form.id) {
            createData(form)
        } else {
            console.log(form)
            updateData(form)
        }

        handleReset(e)

    }
    const handleReset = (e: any) => {
        setForm(initialForm);
        setDataToEdit(null)
    }

    return (
        <div>
            <h3>{dataToEdit ? 'Editar' : 'Agregar'}</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="nombre"
                       onChange={handleChange} value={form.name} />
                <input type="text" name="constellation" placeholder="constelacion"
                       onChange={handleChange} value={form.constellation} />
                <input type="submit" value="Enviar "/>
                <input type="reset" value="Limpiar" onClick={handleReset} />
            </form>
        </div>
    );
};

export default CrudForm;
